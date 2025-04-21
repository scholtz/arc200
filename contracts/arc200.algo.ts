import {
  arc4,
  assert,
  BoxMap,
  Contract,
  emit,
  Global,
  GlobalState,
  op,
  Txn,
} from '@algorandfoundation/algorand-typescript';

import {
  Address,
  Bool,
  DynamicBytes,
  StaticBytes,
  UintN256,
  UintN8,
} from '@algorandfoundation/algorand-typescript/arc4';

class ApprovalStruct extends arc4.Struct<{
  approvalAmount: UintN256;
  owner: arc4.Address;
  spender: arc4.Address;
}> {}
// Define a struct for the event with named parameters
class arc200_Transfer extends arc4.Struct<{
  from: Address;
  to: Address;
  value: UintN256;
}> {}
// Define a struct for the event with named parameters
class arc200_Approval extends arc4.Struct<{
  owner: Address;
  spender: Address;
  value: UintN256;
}> {}

/**
 * Smart Contract Token Base Interface
 */
// eslint-disable-next-line no-unused-vars
export class Arc200 extends Contract {
  /**
   * Name of the asset. Max 32 bytes
   */
  public name = GlobalState<DynamicBytes>({ key: 'n' });
  /**
   * Symbol of the asset. Max 8 bytes
   */
  public symbol = GlobalState<DynamicBytes>({ key: 's' });
  /**
   * Decimals of the asset. Recommended is 6 decimal places.
   */
  public decimals = GlobalState<UintN8>({ key: 'd' });
  /**
   * Minted supply
   */
  public totalSupply = GlobalState<UintN256>({ key: 't' });

  public balances = BoxMap<Address, UintN256>({ keyPrefix: 'b' });

  public approvals = BoxMap<StaticBytes<32>, ApprovalStruct>({ keyPrefix: 'a' });
  @arc4.abimethod()
  public bootstrap(name: DynamicBytes, symbol: DynamicBytes, decimals: UintN8, totalSupply: UintN256): Bool {
    assert(Txn.sender === Global.creatorAddress, 'Only deployer of this smart contract can call bootstrap method');
    assert(name.length > 0, 'Name of the asset must be longer or equal to 1 character');
    assert(name.length <= 32, 'Name of the asset must be shorter or equal to 32 characters');
    assert(symbol.length > 0, 'Symbol of the asset must be longer or equal to 1 character');
    assert(symbol.length <= 8, 'Symbol of the asset must be shorter or equal to 8 characters');
    assert(!this.totalSupply.hasValue, 'This method can be called only once');

    this.name.value = name;
    this.symbol.value = symbol;
    this.totalSupply.value = totalSupply;
    this.decimals.value = decimals;
    const sender = new Address(Txn.sender);

    this.balances(sender).value = totalSupply;

    emit(new arc200_Transfer({ from: new Address(Global.zeroAddress), to: sender, value: totalSupply }));
    return new Bool(true);
  }

  /**
   * Returns the name of the token
   *
   * @returns The name of the token
   */
  @arc4.abimethod({ readonly: true })
  arc200_name(): StaticBytes<32> {
    return new StaticBytes<32>(this.name.value.native);
  }

  /**
   * Returns the symbol of the token
   *
   * @returns The symbol of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_symbol(): StaticBytes<8> {
    return new StaticBytes<8>(this.symbol.value.native);
  }

  /**
   * Returns the decimals of the token
   *
   * @returns The decimals of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_decimals(): arc4.UintN8 {
    return this.decimals.value;
  }

  /**
   * Returns the total supply of the token
   *
   * @returns The total supply of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_totalSupply(): arc4.UintN256 {
    return this.totalSupply.value;
  }

  /**
   * Returns the current balance of the owner of the token
   *
   * @param owner The address of the owner of the token
   * @returns The current balance of the holder of the token
   */
  @arc4.abimethod({ readonly: true })
  public arc200_balanceOf(owner: Address): arc4.UintN256 {
    return this._balanceOf(owner);
  }

  /**
   * Transfers tokens
   *
   * @param to The destination of the transfer
   * @param value Amount of tokens to transfer
   * @returns Success
   */
  @arc4.abimethod()
  public arc200_transfer(to: Address, value: arc4.UintN256): arc4.Bool {
    return this._transfer(new Address(Txn.sender), to, value);
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
  public arc200_transferFrom(from: Address, to: Address, value: arc4.UintN256): arc4.Bool {
    const spender = new Address(Txn.sender);
    const spender_allowance = this._allowance(from, spender);
    assert(spender_allowance.native >= value.native, 'insufficient approval');
    const new_spender_allowance = new UintN256(spender_allowance.native - value.native);
    this._approve(from, spender, new_spender_allowance);
    return this._transfer(from, to, value);
  }

  /**
   * Approve spender for a token
   *
   * @param spender Who is allowed to take tokens on owner's behalf
   * @param value Amount of tokens to be taken by spender
   * @returns Success
   */
  @arc4.abimethod()
  public arc200_approve(spender: Address, value: arc4.UintN256): Bool {
    const owner = new Address(Txn.sender);
    return this._approve(owner, spender, value);
  }
  /**
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param owner Owner's account
   * @param spender Who is allowed to take tokens on owner's behalf
   * @returns The remaining allowance
   */
  @arc4.abimethod({ readonly: true })
  public arc200_allowance(owner: Address, spender: Address): arc4.UintN256 {
    return this._allowance(owner, spender);
  }

  private _balanceOf(owner: Address): UintN256 {
    if (!this.balances(owner).exists) return new UintN256(0);
    return this.balances(owner).value;
  }

  private _transfer(sender: Address, recipient: Address, amount: UintN256): Bool {
    const sender_balance = this._balanceOf(sender);
    const recipient_balance = this._balanceOf(recipient);
    assert(sender_balance.native >= amount.native, 'Insufficient balance at the sender account');

    if (sender !== recipient) {
      // if sender == recipent, do nothing, just issue event
      this.balances(sender).value = new UintN256(sender_balance.native - amount.native);
      this.balances(recipient).value = recipient_balance;
      // if (this.balances(recipient).exists) {
      //   this.balances(recipient).value = recipient_balance;
      // } else {
      //   this.balances(recipient).create();
      //   this.balances(recipient).value = recipient_balance;
      // }
    }
    emit(new arc200_Transfer({ from: sender, to: recipient, value: amount }));
    return new Bool(true);
  }
  private _approvalKey(owner: Address, spender: Address): StaticBytes<32> {
    return new StaticBytes<32>(op.sha256(op.concat(owner.bytes, spender.bytes)));
  }

  private _allowance(owner: Address, spender: Address): UintN256 {
    const key = this._approvalKey(owner, spender);
    if (!this.approvals(key).exists) return new UintN256(0);
    return this.approvals(key).value.approvalAmount;
  }

  private _approve(owner: Address, spender: Address, amount: UintN256): Bool {
    const key = this._approvalKey(owner, spender);
    const approvalBox: ApprovalStruct = new ApprovalStruct({
      approvalAmount: amount,
      owner: owner,
      spender: spender,
    });
    this.approvals(key).value = approvalBox.copy();
    emit(new arc200_Approval({ owner: owner, spender: spender, value: amount }));
    return new Bool(true);
  }
}
