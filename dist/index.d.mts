import * as algosdk from 'algosdk';
import { Algodv2, TransactionWithSigner, Transaction, AtomicTransactionComposer, modelsv2, ABIResult, OnApplicationComplete } from 'algosdk';
import * as _algorandfoundation_algokit_utils_types_transaction from '@algorandfoundation/algokit-utils/types/transaction';
import { TransactionToSign, SendTransactionResult, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction';
import * as _algorandfoundation_algokit_utils_types_app from '@algorandfoundation/algokit-utils/types/app';
import { AppCallTransactionResult, AppCallTransactionResultOfType, AppCompilationResult, AppReference, CoreAppCallArgs, ABIAppCallArg, RawAppCallArgs, TealTemplateParams } from '@algorandfoundation/algokit-utils/types/app';
import { ApplicationClient, AppDetails, AppClientDeployCoreParams, AppClientCallCoreParams, AppClientCompilationParams } from '@algorandfoundation/algokit-utils/types/app-client';

/**
 * Defines an onCompletionAction of 'no_op'
 */
type OnCompleteNoOp = {
    onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC;
};
/**
 * Defines the types of available calls and state of the Arc200 smart contract.
 */
type Arc200 = {
    /**
     * Maps method signatures / names to their argument and return types.
     */
    methods: Record<'arc200_name()string' | 'arc200_name', {
        argsObj: {};
        argsTuple: [];
        /**
         * The name of the token
         */
        returns: string;
    }> & Record<'arc200_symbol()string' | 'arc200_symbol', {
        argsObj: {};
        argsTuple: [];
        /**
         * The symbol of the token
         */
        returns: string;
    }> & Record<'arc200_decimals()uint8' | 'arc200_decimals', {
        argsObj: {};
        argsTuple: [];
        /**
         * The decimals of the token
         */
        returns: number;
    }> & Record<'arc200_totalSupply()uint256' | 'arc200_totalSupply', {
        argsObj: {};
        argsTuple: [];
        /**
         * The total supply of the token
         */
        returns: bigint;
    }> & Record<'arc200_balanceOf(address)uint256' | 'arc200_balanceOf', {
        argsObj: {
            /**
             * The address of the owner of the token
             */
            owner: string;
        };
        argsTuple: [owner: string];
        /**
         * The current balance of the holder of the token
         */
        returns: bigint;
    }> & Record<'arc200_transfer(address,uint256)bool' | 'arc200_transfer', {
        argsObj: {
            /**
             * The destination of the transfer
             */
            to: string;
            /**
             * Amount of tokens to transfer
             */
            value: bigint | number;
        };
        argsTuple: [to: string, value: bigint | number];
        /**
         * Success
         */
        returns: boolean;
    }> & Record<'arc200_transferFrom(address,address,uint256)bool' | 'arc200_transferFrom', {
        argsObj: {
            /**
             * The source of the transfer
             */
            from: string;
            /**
             * The destination of the transfer
             */
            to: string;
            /**
             * Amount of tokens to transfer
             */
            value: bigint | number;
        };
        argsTuple: [from: string, to: string, value: bigint | number];
        /**
         * Success
         */
        returns: boolean;
    }> & Record<'arc200_approve(address,uint256)bool' | 'arc200_approve', {
        argsObj: {
            /**
             * Who is allowed to take tokens on owner's behalf
             */
            spender: string;
            /**
             * Amount of tokens to be taken by spender
             */
            value: bigint | number;
        };
        argsTuple: [spender: string, value: bigint | number];
        /**
         * Success
         */
        returns: boolean;
    }> & Record<'arc200_allowance(address,address)uint256' | 'arc200_allowance', {
        argsObj: {
            /**
             * Owner's account
             */
            owner: string;
            /**
             * Who is allowed to take tokens on owner's behalf
             */
            spender: string;
        };
        argsTuple: [owner: string, spender: string];
        /**
         * The remaining allowance
         */
        returns: bigint;
    }> & Record<'createApplication()void' | 'createApplication', {
        argsObj: {};
        argsTuple: [];
        returns: void;
    }>;
};
/**
 * Defines the possible abi call signatures
 */
type Arc200Sig = keyof Arc200['methods'];
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
type TypedCallParams<TSignature extends Arc200Sig | undefined> = {
    method: TSignature;
    methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>;
} & AppClientCallCoreParams & CoreAppCallArgs;
/**
 * Defines the arguments required for a bare call
 */
type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>;
/**
 * Maps a method signature from the Arc200 smart contract to the method's arguments in either tuple of struct form
 */
type MethodArgs<TSignature extends Arc200Sig> = Arc200['methods'][TSignature]['argsObj' | 'argsTuple'];
/**
 * Maps a method signature from the Arc200 smart contract to the method's return type
 */
type MethodReturn<TSignature extends Arc200Sig> = Arc200['methods'][TSignature]['returns'];
/**
 * A factory for available 'create' calls
 */
type Arc200CreateCalls = (typeof Arc200CallFactory)['create'];
/**
 * Defines supported create methods for this smart contract
 */
type Arc200CreateCallParams = (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp));
/**
 * Defines arguments required for the deploy method.
 */
type Arc200DeployArgs = {
    deployTimeParams?: TealTemplateParams;
    /**
     * A delegate which takes a create call factory and returns the create call params for this smart contract
     */
    createCall?: (callFactory: Arc200CreateCalls) => Arc200CreateCallParams;
};
/**
 * Exposes methods for constructing all available smart contract calls
 */
declare abstract class Arc200CallFactory {
    /**
     * Gets available create call factories
     */
    static get create(): {
        /**
         * Constructs a create call for the Arc200 smart contract using the createApplication()void ABI method
         *
         * @param args Any args for the contract call
         * @param params Any additional parameters for the call
         * @returns A TypedCallParams object for the call
         */
        createApplication(args: MethodArgs<'createApplication()void'>, params?: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp)): {
            sender?: SendTransactionFrom | undefined;
            note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
            sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
            lease?: string | Uint8Array | undefined;
            boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
            accounts?: (string | algosdk.Address)[] | undefined;
            apps?: number[] | undefined;
            assets?: number[] | undefined;
            deployTimeParams?: TealTemplateParams | undefined;
            updatable?: boolean | undefined;
            deletable?: boolean | undefined;
            onCompleteAction?: OnApplicationComplete.NoOpOC | "no_op" | undefined;
            method: "createApplication()void";
            methodArgs: any[];
        };
    };
    /**
     * Constructs a no op call for the arc200_name()string ABI method
     *
     * Returns the name of the token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Name(args: MethodArgs<'arc200_name()string'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_name()string";
        methodArgs: any[];
    };
    /**
     * Constructs a no op call for the arc200_symbol()string ABI method
     *
     * Returns the symbol of the token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Symbol(args: MethodArgs<'arc200_symbol()string'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_symbol()string";
        methodArgs: any[];
    };
    /**
     * Constructs a no op call for the arc200_decimals()uint8 ABI method
     *
     * Returns the decimals of the token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Decimals(args: MethodArgs<'arc200_decimals()uint8'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_decimals()uint8";
        methodArgs: any[];
    };
    /**
     * Constructs a no op call for the arc200_totalSupply()uint256 ABI method
     *
     * Returns the total supply of the token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200TotalSupply(args: MethodArgs<'arc200_totalSupply()uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_totalSupply()uint256";
        methodArgs: any[];
    };
    /**
     * Constructs a no op call for the arc200_balanceOf(address)uint256 ABI method
     *
     * Returns the current balance of the owner of the token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200BalanceOf(args: MethodArgs<'arc200_balanceOf(address)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_balanceOf(address)uint256";
        methodArgs: string[];
    };
    /**
     * Constructs a no op call for the arc200_transfer(address,uint256)bool ABI method
     *
     * Transfers tokens
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Transfer(args: MethodArgs<'arc200_transfer(address,uint256)bool'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_transfer(address,uint256)bool";
        methodArgs: (string | number | bigint)[];
    };
    /**
     * Constructs a no op call for the arc200_transferFrom(address,address,uint256)bool ABI method
     *
     * Transfers tokens from source to destination as approved spender
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200TransferFrom(args: MethodArgs<'arc200_transferFrom(address,address,uint256)bool'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_transferFrom(address,address,uint256)bool";
        methodArgs: (string | number | bigint)[];
    };
    /**
     * Constructs a no op call for the arc200_approve(address,uint256)bool ABI method
     *
     * Approve spender for a token
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Approve(args: MethodArgs<'arc200_approve(address,uint256)bool'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_approve(address,uint256)bool";
        methodArgs: (string | number | bigint)[];
    };
    /**
     * Constructs a no op call for the arc200_allowance(address,address)uint256 ABI method
     *
     * Returns the current allowance of the spender of the tokens of the owner
     *
     * @param args Any args for the contract call
     * @param params Any additional parameters for the call
     * @returns A TypedCallParams object for the call
     */
    static arc200Allowance(args: MethodArgs<'arc200_allowance(address,address)uint256'>, params: AppClientCallCoreParams & CoreAppCallArgs): {
        sender?: SendTransactionFrom | undefined;
        note?: _algorandfoundation_algokit_utils_types_transaction.TransactionNote;
        sendParams?: _algorandfoundation_algokit_utils_types_transaction.SendTransactionParams | undefined;
        lease?: string | Uint8Array | undefined;
        boxes?: (algosdk.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxReference | _algorandfoundation_algokit_utils_types_app.BoxIdentifier)[] | undefined;
        accounts?: (string | algosdk.Address)[] | undefined;
        apps?: number[] | undefined;
        assets?: number[] | undefined;
        method: "arc200_allowance(address,address)uint256";
        methodArgs: string[];
    };
}
/**
 * A client to make calls to the Arc200 smart contract
 */
declare class Arc200Client {
    private algod;
    /**
     * The underlying `ApplicationClient` for when you want to have more flexibility
     */
    readonly appClient: ApplicationClient;
    private readonly sender;
    /**
     * Creates a new instance of `Arc200Client`
     *
     * @param appDetails appDetails The details to identify the app to deploy
     * @param algod An algod client instance
     */
    constructor(appDetails: AppDetails, algod: Algodv2);
    /**
     * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
     *
     * @param result The AppCallTransactionResult to be mapped
     * @param returnValueFormatter An optional delegate to format the return value if required
     * @returns The smart contract response with an updated return value
     */
    protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult;
    /**
     * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
     *
     * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
     * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
     * @returns The result of the smart contract call
     */
    call<TSignature extends keyof Arc200['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>): Promise<AppCallTransactionResultOfType<MethodReturn<TSignature>> & AppCallTransactionResult>;
    /**
     * Idempotently deploys the Arc200 smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    deploy(params?: Arc200DeployArgs & AppClientDeployCoreParams): ReturnType<ApplicationClient['deploy']>;
    /**
     * Gets available create methods
     */
    get create(): {
        /**
         * Creates a new instance of the Arc200 smart contract using the createApplication()void ABI method.
         *
         * @param args The arguments for the smart contract call
         * @param params Any additional parameters for the call
         * @returns The create result
         */
        createApplication(args: MethodArgs<'createApplication()void'>, params?: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp)): Promise<AppCallTransactionResultOfType<void> & AppCallTransactionResult & Partial<AppCompilationResult> & AppReference>;
    };
    /**
     * Makes a clear_state call to an existing instance of the Arc200 smart contract.
     *
     * @param args The arguments for the bare call
     * @returns The clear_state result
     */
    clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResult>;
    /**
     * Calls the arc200_name()string ABI method.
     *
     * Returns the name of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The name of the token
     */
    arc200Name(args: MethodArgs<'arc200_name()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<string> & AppCallTransactionResult>;
    /**
     * Calls the arc200_symbol()string ABI method.
     *
     * Returns the symbol of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The symbol of the token
     */
    arc200Symbol(args: MethodArgs<'arc200_symbol()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<string> & AppCallTransactionResult>;
    /**
     * Calls the arc200_decimals()uint8 ABI method.
     *
     * Returns the decimals of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The decimals of the token
     */
    arc200Decimals(args: MethodArgs<'arc200_decimals()uint8'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<number> & AppCallTransactionResult>;
    /**
     * Calls the arc200_totalSupply()uint256 ABI method.
     *
     * Returns the total supply of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The total supply of the token
     */
    arc200TotalSupply(args: MethodArgs<'arc200_totalSupply()uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<bigint> & AppCallTransactionResult>;
    /**
     * Calls the arc200_balanceOf(address)uint256 ABI method.
     *
     * Returns the current balance of the owner of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The current balance of the holder of the token
     */
    arc200BalanceOf(args: MethodArgs<'arc200_balanceOf(address)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<bigint> & AppCallTransactionResult>;
    /**
     * Calls the arc200_transfer(address,uint256)bool ABI method.
     *
     * Transfers tokens
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: Success
     */
    arc200Transfer(args: MethodArgs<'arc200_transfer(address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<boolean> & AppCallTransactionResult>;
    /**
     * Calls the arc200_transferFrom(address,address,uint256)bool ABI method.
     *
     * Transfers tokens from source to destination as approved spender
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: Success
     */
    arc200TransferFrom(args: MethodArgs<'arc200_transferFrom(address,address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<boolean> & AppCallTransactionResult>;
    /**
     * Calls the arc200_approve(address,uint256)bool ABI method.
     *
     * Approve spender for a token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: Success
     */
    arc200Approve(args: MethodArgs<'arc200_approve(address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<boolean> & AppCallTransactionResult>;
    /**
     * Calls the arc200_allowance(address,address)uint256 ABI method.
     *
     * Returns the current allowance of the spender of the tokens of the owner
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The result of the call: The remaining allowance
     */
    arc200Allowance(args: MethodArgs<'arc200_allowance(address,address)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Promise<AppCallTransactionResultOfType<bigint> & AppCallTransactionResult>;
    compose(): Arc200Composer;
}
type Arc200Composer<TReturns extends [...any[]] = []> = {
    /**
     * Calls the arc200_name()string ABI method.
     *
     * Returns the name of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Name(args: MethodArgs<'arc200_name()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_name()string'>]>;
    /**
     * Calls the arc200_symbol()string ABI method.
     *
     * Returns the symbol of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Symbol(args: MethodArgs<'arc200_symbol()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_symbol()string'>]>;
    /**
     * Calls the arc200_decimals()uint8 ABI method.
     *
     * Returns the decimals of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Decimals(args: MethodArgs<'arc200_decimals()uint8'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_decimals()uint8'>]>;
    /**
     * Calls the arc200_totalSupply()uint256 ABI method.
     *
     * Returns the total supply of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200TotalSupply(args: MethodArgs<'arc200_totalSupply()uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_totalSupply()uint256'>]>;
    /**
     * Calls the arc200_balanceOf(address)uint256 ABI method.
     *
     * Returns the current balance of the owner of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200BalanceOf(args: MethodArgs<'arc200_balanceOf(address)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_balanceOf(address)uint256'>]>;
    /**
     * Calls the arc200_transfer(address,uint256)bool ABI method.
     *
     * Transfers tokens
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Transfer(args: MethodArgs<'arc200_transfer(address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_transfer(address,uint256)bool'>]>;
    /**
     * Calls the arc200_transferFrom(address,address,uint256)bool ABI method.
     *
     * Transfers tokens from source to destination as approved spender
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200TransferFrom(args: MethodArgs<'arc200_transferFrom(address,address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_transferFrom(address,address,uint256)bool'>]>;
    /**
     * Calls the arc200_approve(address,uint256)bool ABI method.
     *
     * Approve spender for a token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Approve(args: MethodArgs<'arc200_approve(address,uint256)bool'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_approve(address,uint256)bool'>]>;
    /**
     * Calls the arc200_allowance(address,address)uint256 ABI method.
     *
     * Returns the current allowance of the spender of the tokens of the owner
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Allowance(args: MethodArgs<'arc200_allowance(address,address)uint256'>, params?: AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, MethodReturn<'arc200_allowance(address,address)uint256'>]>;
    /**
     * Makes a clear_state call to an existing instance of the Arc200 smart contract.
     *
     * @param args The arguments for the bare call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): Arc200Composer<[...TReturns, undefined]>;
    /**
     * Adds a transaction to the composer
     *
     * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
     * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
     */
    addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): Arc200Composer<TReturns>;
    /**
     * Returns the underlying AtomicTransactionComposer instance
     */
    atc(): Promise<AtomicTransactionComposer>;
    /**
     * Simulates the transaction group and returns the result
     */
    simulate(options?: SimulateOptions): Promise<Arc200ComposerSimulateResult<TReturns>>;
    /**
     * Executes the transaction group and returns the results
     */
    execute(): Promise<Arc200ComposerResults<TReturns>>;
};
type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>;
type Arc200ComposerSimulateResult<TReturns extends [...any[]]> = {
    returns: TReturns;
    methodResults: ABIResult[];
    simulateResponse: modelsv2.SimulateResponse;
};
type Arc200ComposerResults<TReturns extends [...any[]]> = {
    returns: TReturns;
    groupId: string;
    txIds: string[];
    transactions: Transaction[];
};

interface IGetClientInput {
    appId: number | bigint;
    sender: SendTransactionFrom | undefined;
    algod: Algodv2;
}
declare const getArc200Client: (input: IGetClientInput) => Arc200Client;

export { getArc200Client };
