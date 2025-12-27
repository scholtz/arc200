import {
  arc4,
  assert,
  BoxMap,
  bytes,
  clone,
  Contract,
  emit,
  Global,
  GlobalState,
  gtxn,
  itxn,
  op,
  TransactionType,
  Txn,
} from '@algorandfoundation/algorand-typescript'

import {
  Address,
  Bool,
  DynamicBytes,
  StaticBytes,
  Uint256,
  Uint64,
  Uint8,
} from '@algorandfoundation/algorand-typescript/arc4'

class ApprovalStruct extends arc4.Struct<{
  approvalAmount: Uint256
  owner: arc4.Address
  spender: arc4.Address
}> {}
// Define a struct for the event with named parameters
class arc200_Transfer extends arc4.Struct<{
  from: Address
  to: Address
  value: Uint256
}> {}
// Define a struct for the event with named parameters
class arc200_Approval extends arc4.Struct<{
  owner: Address
  spender: Address
  value: Uint256
}> {}

// Define a struct for the event with named parameters
class arc200_exchangeInfo extends arc4.Struct<{
  exchange_asset: Uint64
  sink: Address
}> {}

// Define a struct for the event with named parameters
class asaProps extends arc4.Struct<{
  metadataHash: StaticBytes<32>
  url: arc4.DynamicBytes
}> {}
/**
 * Smart Contract Token Base Interface
 */
// eslint-disable-next-line no-unused-vars
export class Arc200_ASA extends Contract {
  /**
   * Name of the asset. Max 32 bytes
   */
  public name = GlobalState<DynamicBytes>({ key: 'n' })

  /**
   * Symbol of the asset. Max 8 bytes
   */
  public symbol = GlobalState<DynamicBytes>({ key: 's' })

  /**
   * Decimals of the asset. Recommended is 6 decimal places.
   */
  public decimals = GlobalState<Uint8>({ key: 'd' })

  /**
   * Minted supply
   */
  public totalSupply = GlobalState<Uint256>({ key: 't' })

  public balances = BoxMap<Address, Uint256>({ keyPrefix: 'b' })

  public approvals = BoxMap<StaticBytes<32>, ApprovalStruct>({ keyPrefix: 'a' })

  /**
   * Asa exchangable with the ARC200 token
   */
  public assetId = GlobalState<Uint64>({ key: 'asa' })

  @arc4.abimethod()
  public bootstrap(
    name: DynamicBytes,
    symbol: DynamicBytes,
    decimals: Uint8,
    totalSupply: Uint256,
    asset: asaProps,
  ): Bool {
    assert(Txn.sender === Global.creatorAddress, 'Only deployer of this smart contract can call bootstrap method')
    assert(name.native.length > 0, 'Name of the asset must be longer or equal to 1 character')
    assert(name.native.length <= 32, 'Name of the asset must be shorter or equal to 32 characters')
    assert(symbol.native.length > 0, 'Symbol of the asset must be longer or equal to 1 character')
    assert(symbol.native.length <= 8, 'Symbol of the asset must be shorter or equal to 8 characters')
    assert(!this.totalSupply.hasValue, 'This method can be called only once')

    this.name.value = name
    this.symbol.value = symbol
    this.totalSupply.value = totalSupply
    this.decimals.value = decimals

    const sender = new Address(Txn.sender)

    this.balances(sender).value = totalSupply

    const createdAsset = itxn
      .assetConfig({
        total: totalSupply.asUint64(),
        defaultFrozen: false,
        unitName: symbol.native,
        assetName: name.native,
        manager: Global.currentApplicationAddress,
        reserve: Global.currentApplicationAddress,
        fee: 0,
        metadataHash: asset.metadataHash.native.toFixed({ length: 32 }),
        url: asset.url.native,
        decimals: decimals.asUint64(),
      })
      .submit().createdAsset

    this.assetId.value = new Uint64(createdAsset.id)

    emit(new arc200_Transfer({ from: new Address(Global.zeroAddress), to: sender, value: totalSupply }))
    return new Bool(true)
  }

  /**
   * Returns the name of the token
   *
   * @returns The name of the token
   */
  @arc4.abimethod({ readonly: true })
  arc200_name(): StaticBytes<32> {
    return new StaticBytes<32>(this.name.value.native)
  }

  /**
   * Returns the symbol of the token
   *
   * @returns The symbol of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_symbol(): StaticBytes<8> {
    return new StaticBytes<8>(this.symbol.value.native)
  }

  /**
   * Returns the decimals of the token
   *
   * @returns The decimals of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_decimals(): arc4.Uint8 {
    return this.decimals.value
  }

  /**
   * Returns the total supply of the token
   *
   * @returns The total supply of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_totalSupply(): arc4.Uint256 {
    return this.totalSupply.value
  }

  /**
   * Returns the current balance of the owner of the token
   *
   * @param owner The address of the owner of the token
   * @returns The current balance of the holder of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_balanceOf(owner: Address): arc4.Uint256 {
    return this._balanceOf(owner)
  }

  /**
   * Transfers tokens
   *
   * @param to The destination of the transfer
   * @param value Amount of tokens to transfer
   * @returns Success
   */
  @arc4.abimethod()
  public arc200_transfer(to: Address, value: arc4.Uint256): arc4.Bool {
    return this._transfer(new Address(Txn.sender), to, value)
  }

  /**
   * Transfers tokens from source to destination as approved spender
   *
   * @param from The source of the transfer
   * @param to The destination of the transfer
   * @param value Amount of tokens to transfer
   * @returns Success
   */
  @arc4.abimethod()
  public arc200_transferFrom(from: Address, to: Address, value: arc4.Uint256): arc4.Bool {
    const spender = new Address(Txn.sender)
    const spender_allowance = this._allowance(from, spender)
    assert(spender_allowance.asBigUint() >= value.asBigUint(), 'insufficient approval')
    const new_spender_allowance = new Uint256(spender_allowance.asBigUint() - value.asBigUint())
    this._approve(from, spender, new_spender_allowance)
    return this._transfer(from, to, value)
  }

  /**
   * Approve spender for a token
   *
   * @param spender Who is allowed to take tokens on owner's behalf
   * @param value Amount of tokens to be taken by spender
   * @returns Success
   */
  @arc4.abimethod()
  public arc200_approve(spender: Address, value: arc4.Uint256): Bool {
    const owner = new Address(Txn.sender)
    return this._approve(owner, spender, value)
  }
  /**
   * arc200_exchange() → (uint64 exchange_asset, address sink)
   * Returns configuration parameters used by the exchange mechanism:
   * exchange_asset: The ASA ID that the ARC200 token can be exchanged with.
   *
   * sink: The address that holds ARC200 tokens for redemption operations.
   *
   * This method MUST NOT mutate state.
   *
   * https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
   */
  @arc4.abimethod({ readonly: true })
  public arc200_exchange(): arc200_exchangeInfo {
    return new arc200_exchangeInfo({
      exchange_asset: this.assetId.value, //The ASA ID that the ARC200 token can be exchanged with.
      sink: new Address(Global.currentApplicationAddress), // The address that holds ARC200 tokens for redemption operations.
    })
  }

  /**
   * Exchanges ASA tokens for ARC200 tokens.
   * Requirements:
   * The user MUST include a valid ASA transfer to the contract in the same transaction group.
   *
   * The ASA ID MUST match the configured exchange_asset.
   *
   * The amount transferred MUST be equal to or greater than the amount requested.
   *
   * The contract MUST transfer ARC200 tokens to the user from the sink address.
   *
   * No ARC200 tokens may be minted or burned during the exchange.
   *
   * https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
   */
  @arc4.abimethod()
  public arc200_redeem(amount: Uint64): void {
    const prev = gtxn.Transaction(Txn.groupIndex - 1)
    assert(prev.type === TransactionType.AssetTransfer, 'Previous txn must be ASA transfer')
    const axfer = gtxn.AssetTransferTxn(Txn.groupIndex - 1)
    assert(
      axfer.assetAmount >= amount.asUint64(),
      'The amount transferred MUST be equal to or greater than the amount requested',
    )
    assert(axfer.xferAsset.id === this.assetId.value.asUint64(), 'ASA ID must match configured exchange_asset')
    assert(axfer.assetReceiver === Global.currentApplicationAddress, 'ASA must be sent to the sink address')
    assert(axfer.sender === Txn.sender, 'ASA sender must match ARC200 redeemer')

    this._transfer(
      new Address(Global.currentApplicationAddress),
      new Address(Txn.sender),
      new Uint256(axfer.assetAmount), // send the real amount which must be greater or equal to requested amount
    )
  }
  /**
   * wnnt200 for arc200_redeem
   *
   * @param amount
   * @returns
   */
  @arc4.abimethod()
  public deposit(amount: Uint64): arc4.Uint256 {
    const prev = gtxn.Transaction(Txn.groupIndex - 1)
    assert(prev.type === TransactionType.AssetTransfer, 'Previous txn must be ASA transfer')
    const axfer = gtxn.AssetTransferTxn(Txn.groupIndex - 1)
    assert(
      axfer.assetAmount >= amount.asUint64(),
      'The amount transferred MUST be equal to or greater than the amount requested',
    )
    assert(axfer.xferAsset.id === this.assetId.value.asUint64(), 'ASA ID must match configured exchange_asset')
    assert(axfer.assetReceiver === Global.currentApplicationAddress, 'ASA must be sent to the sink address')
    assert(axfer.sender === Txn.sender, 'ASA sender must match ARC200 redeemer')
    const ret = new Uint256(axfer.assetAmount)
    this._transfer(
      new Address(Global.currentApplicationAddress),
      new Address(Txn.sender),
      ret, // send the real amount which must be greater or equal to requested amount
    )
    return ret
  }
  /**
   * arc200_swapBack(uint64 amount) → void
   *
   * Exchanges ARC200 tokens back into ASA tokens.
   * Requirements:
   * The user MUST transfer ARC200 tokens to the configured sink address.
   *
   * Upon receiving the ARC200 tokens, the contract MUST transfer the equivalent amount of ASA tokens to the user.
   *
   * The ASA MUST be transferred from the application's own account.
   *
   * No ARC200 tokens may be minted or burned during the exchange.
   *
   * https://docs.google.com/document/d/1Uy9kbWF6yfM7W_VbBp1W5c2VqVdcoCj_hyoXUf1FIV0/edit?tab=t.0#heading=h.socgebj776o0
   * @param amount
   */
  @arc4.abimethod()
  public arc200_swapBack(amount: Uint64): void {
    this._transfer(
      new Address(Txn.sender),
      new Address(Global.currentApplicationAddress),
      new Uint256(amount.asBigUint()),
    )
    itxn
      .assetTransfer({
        assetReceiver: Txn.sender,
        assetAmount: amount.asUint64(),
        xferAsset: this.assetId.value.asUint64(),
        fee: 0,
      })
      .submit()
  }
  /**
   * wnnt200 for arc200_swapBack
   *
   * @param amount
   * @returns
   */
  @arc4.abimethod()
  public withdraw(amount: Uint64): arc4.Uint256 {
    const ret = new Uint256(amount.asBigUint())
    this._transfer(new Address(Txn.sender), new Address(Global.currentApplicationAddress), ret)
    itxn
      .assetTransfer({
        assetReceiver: Txn.sender,
        assetAmount: amount.asUint64(),
        xferAsset: this.assetId.value.asUint64(),
        fee: 0,
      })
      .submit()
    return ret
  }
  /**
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param owner Owner's account
   * @param spender Who is allowed to take tokens on owner's behalf
   * @returns The remaining allowance
   */
  @arc4.abimethod({ readonly: true })
  public arc200_allowance(owner: Address, spender: Address): arc4.Uint256 {
    return this._allowance(owner, spender)
  }

  private _balanceOf(owner: Address): Uint256 {
    if (!this.balances(owner).exists) return new Uint256(0)
    return this.balances(owner).value
  }

  private _transfer(sender: Address, recipient: Address, amount: Uint256): Bool {
    const sender_balance = this._balanceOf(sender)
    const recipient_balance = this._balanceOf(recipient)
    assert(sender_balance.asBigUint() >= amount.asBigUint(), 'Insufficient balance at the sender account')

    if (sender !== recipient) {
      // if sender == recipent, do nothing, just issue event
      this.balances(sender).value = new Uint256(sender_balance.asBigUint() - amount.asBigUint())
      this.balances(recipient).value = new Uint256(recipient_balance.asBigUint() + amount.asBigUint())
    }
    emit(new arc200_Transfer({ from: sender, to: recipient, value: amount }))
    return new Bool(true)
  }

  private _approvalKey(owner: Address, spender: Address): StaticBytes<32> {
    return new StaticBytes<32>(op.sha256(op.concat(owner.bytes, spender.bytes)))
  }

  private _allowance(owner: Address, spender: Address): Uint256 {
    const key = this._approvalKey(owner, spender)
    if (!this.approvals(key).exists) return new Uint256(0)
    return this.approvals(key).value.approvalAmount
  }

  private _approve(owner: Address, spender: Address, amount: Uint256): Bool {
    const key = this._approvalKey(owner, spender)
    const approvalBox: ApprovalStruct = new ApprovalStruct({
      approvalAmount: amount,
      owner: owner,
      spender: spender,
    })
    this.approvals(key).value = clone(approvalBox)
    emit(new arc200_Approval({ owner: owner, spender: spender, value: amount }))
    return new Bool(true)
  }
}
