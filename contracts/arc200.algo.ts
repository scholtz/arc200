import { Contract } from '@algorandfoundation/tealscript';

/**
 * Smart Contract Token Base Interface
 */
// eslint-disable-next-line no-unused-vars
class Arc200 extends Contract {
  /**
   * Returns the name of the token
   *
   * @returns The name of the token
   */
  @abi.readonly
  arc200_name(): string[32] {
    return 'Arc200';
  }

  /**
   * Returns the symbol of the token
   *
   * @returns The symbol of the token
   */
  @abi.readonly
  arc200_symbol(): string[8] {
    return 'Arc200';
  }

  /**
   * Returns the decimals of the token
   *
   * @returns The decimals of the token
   */
  @abi.readonly
  arc200_decimals(): uint8 {
    return 6 as uint8;
  }

  /**
   * Returns the total supply of the token
   *
   * @returns The total supply of the token
   */
  @abi.readonly
  arc200_totalSupply(): uint256 {
    return 1_000_000_000_000_000 as uint256;
  }

  /**
   * Returns the current balance of the owner of the token
   *
   * @param owner The address of the owner of the token
   * @returns The current balance of the holder of the token
   */
  @abi.readonly
  arc200_balanceOf(owner: Address): uint256 {
    return 0 as uint256;
  }

  /**
   * Transfers tokens
   *
   * @param to The destination of the transfer
   * @param value Amount of tokens to transfer
   * @returns Success
   */
  arc200_transfer(to: Address, value: uint256): boolean {
    return false;
  }

  /**
   * Transfers tokens from source to destination as approved spender
   *
   * @param from The source of the transfer
   * @param to The destination of the transfer
   * @param value Amount of tokens to transfer
   * @returns Success
   */
  arc200_transferFrom(from: Address, to: Address, value: uint256): boolean {
    return false;
  }

  /**
   * Approve spender for a token
   *
   * @param spender Who is allowed to take tokens on owner's behalf
   * @param value Amount of tokens to be taken by spender
   * @returns Success
   */
  arc200_approve(spender: Address, value: uint256): boolean {
    return false;
  }

  /**
   * Returns the current allowance of the spender of the tokens of the owner
   *
   * @param owner Owner's account
   * @param spender Who is allowed to take tokens on owner's behalf
   * @returns The remaining allowance
   */
  @abi.readonly
  arc200_allowance(owner: Address, spender: Address): uint256 {
    return 0 as uint256;
  }
}
