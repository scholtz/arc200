import * as _algorandfoundation_algokit_utils_types_composer from '@algorandfoundation/algokit-utils/types/composer';
import { AppCallMethodCall, TransactionComposer, SkipSignaturesSimulateOptions, RawSimulateOptions } from '@algorandfoundation/algokit-utils/types/composer';
import * as _algorandfoundation_algokit_utils_types_app_manager from '@algorandfoundation/algokit-utils/types/app-manager';
import * as _algorandfoundation_algokit_utils_types_account from '@algorandfoundation/algokit-utils/types/account';
import * as _algorandfoundation_algokit_utils_types_amount from '@algorandfoundation/algokit-utils/types/amount';
import * as _algorandfoundation_algokit_utils_types_transaction from '@algorandfoundation/algokit-utils/types/transaction';
import { SendParams, SendAtomicTransactionComposerResults } from '@algorandfoundation/algokit-utils/types/transaction';
import * as _algorandfoundation_algokit_utils_types_app from '@algorandfoundation/algokit-utils/types/app';
import { ABIReturn } from '@algorandfoundation/algokit-utils/types/app';
import * as _algorandfoundation_algokit_utils_types_app_arc56 from '@algorandfoundation/algokit-utils/types/app-arc56';
import { Arc56Contract } from '@algorandfoundation/algokit-utils/types/app-arc56';
import * as algosdk from 'algosdk';
import { Address, OnApplicationComplete, Transaction, TransactionSigner, modelsv2, ProgramSourceMap } from 'algosdk';
import { AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client';
import { AppClient, AppClientParams, ResolveAppClientByCreatorAndName, ResolveAppClientByNetwork, AppClientBareCallParams, AppClientMethodCallParams, CloneAppClientParams, AppClientCompilationParams } from '@algorandfoundation/algokit-utils/types/app-client';
import { AppFactory, AppFactoryParams, AppFactoryAppClientParams, AppFactoryResolveAppClientByCreatorAndNameParams, AppFactoryDeployParams, CreateSchema } from '@algorandfoundation/algokit-utils/types/app-factory';
import { AlgorandClient as AlgorandClient$1 } from '@algorandfoundation/algokit-utils';

/**
 * Expands types for IntelliSense so they are more human readable
 * See https://stackoverflow.com/a/69288824
 */
type Expand<T> = T extends (...args: infer A) => infer R ? (...args: Expand<A>) => Expand<R> : T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
type ApprovalStruct = {
    approvalAmount: bigint;
    owner: string;
    spender: string;
};
/**
 * The argument types for the Arc200 contract
 */
type Arc200Args = {
    /**
     * The object representation of the arguments for each method
     */
    obj: {
        'bootstrap(byte[],byte[],uint8,uint256)bool': {
            name: Uint8Array;
            symbol: Uint8Array;
            decimals: bigint | number;
            totalSupply: bigint | number;
        };
        'arc200_name()byte[32]': Record<string, never>;
        'arc200_symbol()byte[8]': Record<string, never>;
        'arc200_decimals()uint8': Record<string, never>;
        'arc200_totalSupply()uint256': Record<string, never>;
        'arc200_balanceOf(address)uint256': {
            /**
             * The address of the owner of the token
             */
            owner: string;
        };
        'arc200_transfer(address,uint256)bool': {
            /**
             * The destination of the transfer
             */
            to: string;
            /**
             * Amount of tokens to transfer
             */
            value: bigint | number;
        };
        'arc200_transferFrom(address,address,uint256)bool': {
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
        'arc200_approve(address,uint256)bool': {
            /**
             * Who is allowed to take tokens on owner's behalf
             */
            spender: string;
            /**
             * Amount of tokens to be taken by spender
             */
            value: bigint | number;
        };
        'arc200_allowance(address,address)uint256': {
            /**
             * Owner's account
             */
            owner: string;
            /**
             * Who is allowed to take tokens on owner's behalf
             */
            spender: string;
        };
    };
    /**
     * The tuple representation of the arguments for each method
     */
    tuple: {
        'bootstrap(byte[],byte[],uint8,uint256)bool': [
            name: Uint8Array,
            symbol: Uint8Array,
            decimals: bigint | number,
            totalSupply: bigint | number
        ];
        'arc200_name()byte[32]': [];
        'arc200_symbol()byte[8]': [];
        'arc200_decimals()uint8': [];
        'arc200_totalSupply()uint256': [];
        'arc200_balanceOf(address)uint256': [owner: string];
        'arc200_transfer(address,uint256)bool': [to: string, value: bigint | number];
        'arc200_transferFrom(address,address,uint256)bool': [from: string, to: string, value: bigint | number];
        'arc200_approve(address,uint256)bool': [spender: string, value: bigint | number];
        'arc200_allowance(address,address)uint256': [owner: string, spender: string];
    };
};
/**
 * The return type for each method
 */
type Arc200Returns = {
    'bootstrap(byte[],byte[],uint8,uint256)bool': boolean;
    'arc200_name()byte[32]': Uint8Array;
    'arc200_symbol()byte[8]': Uint8Array;
    'arc200_decimals()uint8': number;
    'arc200_totalSupply()uint256': bigint;
    'arc200_balanceOf(address)uint256': bigint;
    'arc200_transfer(address,uint256)bool': boolean;
    'arc200_transferFrom(address,address,uint256)bool': boolean;
    'arc200_approve(address,uint256)bool': boolean;
    'arc200_allowance(address,address)uint256': bigint;
};
/**
 * Defines the types of available calls and state of the Arc200 smart contract.
 */
type Arc200Types = {
    /**
     * Maps method signatures / names to their argument and return types.
     */
    methods: Record<'bootstrap(byte[],byte[],uint8,uint256)bool' | 'bootstrap', {
        argsObj: Arc200Args['obj']['bootstrap(byte[],byte[],uint8,uint256)bool'];
        argsTuple: Arc200Args['tuple']['bootstrap(byte[],byte[],uint8,uint256)bool'];
        returns: Arc200Returns['bootstrap(byte[],byte[],uint8,uint256)bool'];
    }> & Record<'arc200_name()byte[32]' | 'arc200_name', {
        argsObj: Arc200Args['obj']['arc200_name()byte[32]'];
        argsTuple: Arc200Args['tuple']['arc200_name()byte[32]'];
        /**
         * The name of the token
         */
        returns: Arc200Returns['arc200_name()byte[32]'];
    }> & Record<'arc200_symbol()byte[8]' | 'arc200_symbol', {
        argsObj: Arc200Args['obj']['arc200_symbol()byte[8]'];
        argsTuple: Arc200Args['tuple']['arc200_symbol()byte[8]'];
        /**
         * The symbol of the token
         */
        returns: Arc200Returns['arc200_symbol()byte[8]'];
    }> & Record<'arc200_decimals()uint8' | 'arc200_decimals', {
        argsObj: Arc200Args['obj']['arc200_decimals()uint8'];
        argsTuple: Arc200Args['tuple']['arc200_decimals()uint8'];
        /**
         * The decimals of the token
         */
        returns: Arc200Returns['arc200_decimals()uint8'];
    }> & Record<'arc200_totalSupply()uint256' | 'arc200_totalSupply', {
        argsObj: Arc200Args['obj']['arc200_totalSupply()uint256'];
        argsTuple: Arc200Args['tuple']['arc200_totalSupply()uint256'];
        /**
         * The total supply of the token
         */
        returns: Arc200Returns['arc200_totalSupply()uint256'];
    }> & Record<'arc200_balanceOf(address)uint256' | 'arc200_balanceOf', {
        argsObj: Arc200Args['obj']['arc200_balanceOf(address)uint256'];
        argsTuple: Arc200Args['tuple']['arc200_balanceOf(address)uint256'];
        /**
         * The current balance of the holder of the token
         */
        returns: Arc200Returns['arc200_balanceOf(address)uint256'];
    }> & Record<'arc200_transfer(address,uint256)bool' | 'arc200_transfer', {
        argsObj: Arc200Args['obj']['arc200_transfer(address,uint256)bool'];
        argsTuple: Arc200Args['tuple']['arc200_transfer(address,uint256)bool'];
        /**
         * Success
         */
        returns: Arc200Returns['arc200_transfer(address,uint256)bool'];
    }> & Record<'arc200_transferFrom(address,address,uint256)bool' | 'arc200_transferFrom', {
        argsObj: Arc200Args['obj']['arc200_transferFrom(address,address,uint256)bool'];
        argsTuple: Arc200Args['tuple']['arc200_transferFrom(address,address,uint256)bool'];
        /**
         * Success
         */
        returns: Arc200Returns['arc200_transferFrom(address,address,uint256)bool'];
    }> & Record<'arc200_approve(address,uint256)bool' | 'arc200_approve', {
        argsObj: Arc200Args['obj']['arc200_approve(address,uint256)bool'];
        argsTuple: Arc200Args['tuple']['arc200_approve(address,uint256)bool'];
        /**
         * Success
         */
        returns: Arc200Returns['arc200_approve(address,uint256)bool'];
    }> & Record<'arc200_allowance(address,address)uint256' | 'arc200_allowance', {
        argsObj: Arc200Args['obj']['arc200_allowance(address,address)uint256'];
        argsTuple: Arc200Args['tuple']['arc200_allowance(address,address)uint256'];
        /**
         * The remaining allowance
         */
        returns: Arc200Returns['arc200_allowance(address,address)uint256'];
    }>;
    /**
     * Defines the shape of the state of the application.
     */
    state: {
        global: {
            keys: {
                /**
                 * Name of the asset. Max 32 bytes
                 */
                name: Uint8Array;
                /**
                 * Symbol of the asset. Max 8 bytes
                 */
                symbol: Uint8Array;
                /**
                 * Decimals of the asset. Recommended is 6 decimal places.
                 */
                decimals: number;
                /**
                 * Minted supply
                 */
                totalSupply: bigint;
            };
            maps: {};
        };
        box: {
            keys: {};
            maps: {
                balances: Map<string, bigint>;
                approvals: Map<Uint8Array, ApprovalStruct>;
            };
        };
    };
};
/**
 * Defines the possible abi call signatures.
 */
type Arc200Signatures = keyof Arc200Types['methods'];
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
type Arc200NonVoidMethodSignatures = keyof Arc200Types['methods'] extends infer T ? T extends keyof Arc200Types['methods'] ? MethodReturn<T> extends void ? never : T : never : never;
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
type CallParams<TArgs> = Expand<Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> & {
    /** The args for the ABI method call, either as an ordered array or an object */
    args: Expand<TArgs>;
}>;
/**
 * Maps a method signature from the Arc200 smart contract to the method's return type
 */
type MethodReturn<TSignature extends Arc200Signatures> = Arc200Types['methods'][TSignature]['returns'];
/**
 * Defines the shape of the keyed global state of the application.
 */
type GlobalKeysState = Arc200Types['state']['global']['keys'];
/**
 * Defines the shape of the keyed box state of the application.
 */
type BoxKeysState = Arc200Types['state']['box']['keys'];
/**
 * Defines supported create method params for this smart contract
 */
type Arc200CreateCallParams = Expand<AppClientBareCallParams & {
    method?: never;
} & {
    onComplete?: OnApplicationComplete.NoOpOC;
} & CreateSchema>;
/**
 * Defines arguments required for the deploy method.
 */
type Arc200DeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
    /**
     * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
     */
    createParams?: Arc200CreateCallParams;
}>;
/**
 * A factory to create and deploy one or more instance of the Arc200 smart contract and to create one or more app clients to interact with those (or other) app instances
 */
declare class Arc200Factory {
    /**
     * The underlying `AppFactory` for when you want to have more flexibility
     */
    readonly appFactory: AppFactory;
    /**
     * Creates a new instance of `Arc200Factory`
     *
     * @param params The parameters to initialise the app factory with
     */
    constructor(params: Omit<AppFactoryParams, 'appSpec'>);
    /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
    get appName(): string;
    /** The ARC-56 app spec being used */
    get appSpec(): Arc56Contract;
    /** A reference to the underlying `AlgorandClient` this app factory is using. */
    get algorand(): AlgorandClient;
    /**
     * Returns a new `AppClient` client for an app instance of the given ID.
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    getAppClientById(params: AppFactoryAppClientParams): Arc200Client;
    /**
     * Returns a new `AppClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    getAppClientByCreatorAndName(params: AppFactoryResolveAppClientByCreatorAndNameParams): Promise<Arc200Client>;
    /**
     * Idempotently deploys the Arc200 smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    deploy(params?: Arc200DeployParams): Promise<{
        result: {
            return: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            deleteReturn: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            operationPerformed: "create";
            version: string;
            name: string;
            createdRound: bigint;
            updatedRound: bigint;
            createdMetadata: _algorandfoundation_algokit_utils_types_app.AppDeployMetadata;
            deleted: boolean;
            deletable?: boolean | undefined;
            updatable?: boolean | undefined;
            groupId: string;
            txIds: string[];
            returns?: _algorandfoundation_algokit_utils_types_app.ABIReturn[] | undefined;
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
            appId: bigint;
            appAddress: Address;
        } | {
            return: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            deleteReturn: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            operationPerformed: "update";
            appId: bigint;
            appAddress: Address;
            createdRound: bigint;
            updatedRound: bigint;
            createdMetadata: _algorandfoundation_algokit_utils_types_app.AppDeployMetadata;
            deleted: boolean;
            name: string;
            version: string;
            deletable?: boolean | undefined;
            updatable?: boolean | undefined;
            groupId: string;
            txIds: string[];
            returns?: _algorandfoundation_algokit_utils_types_app.ABIReturn[] | undefined;
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        } | {
            return: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            deleteReturn: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            operationPerformed: "replace";
            version: string;
            name: string;
            createdRound: bigint;
            updatedRound: bigint;
            createdMetadata: _algorandfoundation_algokit_utils_types_app.AppDeployMetadata;
            deleted: boolean;
            deletable?: boolean | undefined;
            updatable?: boolean | undefined;
            groupId: string;
            txIds: string[];
            returns?: _algorandfoundation_algokit_utils_types_app.ABIReturn[] | undefined;
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
            appId: bigint;
            appAddress: Address;
            deleteResult: _algorandfoundation_algokit_utils_types_transaction.ConfirmedTransactionResult;
        } | {
            return: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            deleteReturn: algosdk.ABIValue | _algorandfoundation_algokit_utils_types_app_arc56.ABIStruct | undefined;
            compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
            operationPerformed: "nothing";
            appId: bigint;
            appAddress: Address;
            createdRound: bigint;
            updatedRound: bigint;
            createdMetadata: _algorandfoundation_algokit_utils_types_app.AppDeployMetadata;
            deleted: boolean;
            name: string;
            version: string;
            deletable?: boolean | undefined;
            updatable?: boolean | undefined;
        };
        appClient: Arc200Client;
    }>;
    /**
     * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    readonly params: {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Arc200 smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The params for a create call
             */
            bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {
                onComplete?: OnApplicationComplete.NoOpOC;
            }>) => Promise<{
                approvalProgram: Uint8Array;
                clearStateProgram: Uint8Array;
                compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
                compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
                deployTimeParams: _algorandfoundation_algokit_utils_types_app.TealTemplateParams | undefined;
                schema: {
                    globalInts: number;
                    globalByteSlices: number;
                    localInts: number;
                    localByteSlices: number;
                };
                maxFee?: _algorandfoundation_algokit_utils_types_amount.AlgoAmount | undefined;
                note?: string | Uint8Array | undefined;
                args?: Uint8Array[] | undefined;
                signer?: TransactionSigner | _algorandfoundation_algokit_utils_types_account.TransactionSignerAccount | undefined;
                lease?: string | Uint8Array | undefined;
                rekeyTo?: string | Address | undefined;
                staticFee?: _algorandfoundation_algokit_utils_types_amount.AlgoAmount | undefined;
                extraFee?: _algorandfoundation_algokit_utils_types_amount.AlgoAmount | undefined;
                validityWindow?: number | bigint | undefined;
                firstValidRound?: bigint | undefined;
                lastValidRound?: bigint | undefined;
                accountReferences?: (string | Address)[] | undefined;
                appReferences?: bigint[] | undefined;
                assetReferences?: bigint[] | undefined;
                boxReferences?: (_algorandfoundation_algokit_utils_types_app_manager.BoxIdentifier | _algorandfoundation_algokit_utils_types_app_manager.BoxReference)[] | undefined;
                sender?: string | Address | undefined;
                updatable?: boolean | undefined;
                deletable?: boolean | undefined;
                onComplete?: OnApplicationComplete.NoOpOC | OnApplicationComplete.OptInOC | OnApplicationComplete.CloseOutOC | OnApplicationComplete.UpdateApplicationOC | OnApplicationComplete.DeleteApplicationOC | undefined;
                extraProgramPages?: number | undefined;
            } & {
                sender: Address;
                signer: TransactionSigner | _algorandfoundation_algokit_utils_types_account.TransactionSignerAccount | undefined;
                onComplete: OnApplicationComplete.NoOpOC | OnApplicationComplete.OptInOC | OnApplicationComplete.CloseOutOC | OnApplicationComplete.UpdateApplicationOC | OnApplicationComplete.DeleteApplicationOC;
            }>;
        };
    };
    /**
     * Create transactions for the current app
     */
    readonly createTransaction: {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Arc200 smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The transaction for a create call
             */
            bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {
                onComplete?: OnApplicationComplete.NoOpOC;
            }>) => Promise<Transaction>;
        };
    };
    /**
     * Send calls to the current app
     */
    readonly send: {
        /**
         * Gets available create methods
         */
        create: {
            /**
             * Creates a new instance of the Arc200 smart contract using a bare call.
             *
             * @param params The params for the bare (raw) call
             * @returns The create result
             */
            bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & SendParams & {
                onComplete?: OnApplicationComplete.NoOpOC;
            }>) => Promise<{
                result: {
                    compiledApproval?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
                    compiledClear?: _algorandfoundation_algokit_utils_types_app.CompiledTeal | undefined;
                    return: undefined;
                    groupId: string;
                    txIds: string[];
                    returns?: _algorandfoundation_algokit_utils_types_app.ABIReturn[] | undefined;
                    confirmations: modelsv2.PendingTransactionResponse[];
                    transactions: Transaction[];
                    confirmation: modelsv2.PendingTransactionResponse;
                    transaction: Transaction;
                    appId: bigint;
                    appAddress: Address;
                };
                appClient: Arc200Client;
            }>;
        };
    };
}
/**
 * A client to make calls to the Arc200 smart contract
 */
declare class Arc200Client {
    /**
     * The underlying `AppClient` for when you want to have more flexibility
     */
    readonly appClient: AppClient;
    /**
     * Creates a new instance of `Arc200Client`
     *
     * @param appClient An `AppClient` instance which has been created with the Arc200 app spec
     */
    constructor(appClient: AppClient);
    /**
     * Creates a new instance of `Arc200Client`
     *
     * @param params The parameters to initialise the app client with
     */
    constructor(params: Omit<AppClientParams, 'appSpec'>);
    /**
     * Checks for decode errors on the given return value and maps the return value to the return type for the given method
     * @returns The typed return value or undefined if there was no value
     */
    decodeReturnValue<TSignature extends Arc200NonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined): MethodReturn<TSignature> | undefined;
    /**
     * Returns a new `Arc200Client` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    static fromCreatorAndName(params: Omit<ResolveAppClientByCreatorAndName, 'appSpec'>): Promise<Arc200Client>;
    /**
     * Returns an `Arc200Client` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    static fromNetwork(params: Omit<ResolveAppClientByNetwork, 'appSpec'>): Promise<Arc200Client>;
    /** The ID of the app instance this client is linked to. */
    get appId(): bigint;
    /** The app address of the app instance this client is linked to. */
    get appAddress(): Address;
    /** The name of the app. */
    get appName(): string;
    /** The ARC-56 app spec being used */
    get appSpec(): Arc56Contract;
    /** A reference to the underlying `AlgorandClient` this app client is using. */
    get algorand(): AlgorandClient;
    /**
     * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
     */
    readonly params: {
        /**
         * Makes a clear_state call to an existing instance of the Arc200 smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params?: Expand<AppClientBareCallParams>) => _algorandfoundation_algokit_utils_types_composer.AppCallParams;
        /**
         * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call params
         */
        bootstrap: (params: CallParams<Arc200Args["obj"]["bootstrap(byte[],byte[],uint8,uint256)bool"] | Arc200Args["tuple"]["bootstrap(byte[],byte[],uint8,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the name of the token
         *
         * @param params The params for the smart contract call
         * @returns The call params: The name of the token
         */
        arc200Name: (params?: CallParams<Arc200Args["obj"]["arc200_name()byte[32]"] | Arc200Args["tuple"]["arc200_name()byte[32]"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the symbol of the token
         *
         * @param params The params for the smart contract call
         * @returns The call params: The symbol of the token
         */
        arc200Symbol: (params?: CallParams<Arc200Args["obj"]["arc200_symbol()byte[8]"] | Arc200Args["tuple"]["arc200_symbol()byte[8]"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the decimals of the token
         *
         * @param params The params for the smart contract call
         * @returns The call params: The decimals of the token
         */
        arc200Decimals: (params?: CallParams<Arc200Args["obj"]["arc200_decimals()uint8"] | Arc200Args["tuple"]["arc200_decimals()uint8"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the total supply of the token
         *
         * @param params The params for the smart contract call
         * @returns The call params: The total supply of the token
         */
        arc200TotalSupply: (params?: CallParams<Arc200Args["obj"]["arc200_totalSupply()uint256"] | Arc200Args["tuple"]["arc200_totalSupply()uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current balance of the owner of the token
         *
         * @param params The params for the smart contract call
         * @returns The call params: The current balance of the holder of the token
         */
        arc200BalanceOf: (params: CallParams<Arc200Args["obj"]["arc200_balanceOf(address)uint256"] | Arc200Args["tuple"]["arc200_balanceOf(address)uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
         *
         * Transfers tokens
         *
         * @param params The params for the smart contract call
         * @returns The call params: Success
         */
        arc200Transfer: (params: CallParams<Arc200Args["obj"]["arc200_transfer(address,uint256)bool"] | Arc200Args["tuple"]["arc200_transfer(address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
         *
         * Transfers tokens from source to destination as approved spender
         *
         * @param params The params for the smart contract call
         * @returns The call params: Success
         */
        arc200TransferFrom: (params: CallParams<Arc200Args["obj"]["arc200_transferFrom(address,address,uint256)bool"] | Arc200Args["tuple"]["arc200_transferFrom(address,address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
         *
         * Approve spender for a token
         *
         * @param params The params for the smart contract call
         * @returns The call params: Success
         */
        arc200Approve: (params: CallParams<Arc200Args["obj"]["arc200_approve(address,uint256)bool"] | Arc200Args["tuple"]["arc200_approve(address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current allowance of the spender of the tokens of the owner
         *
         * @param params The params for the smart contract call
         * @returns The call params: The remaining allowance
         */
        arc200Allowance: (params: CallParams<Arc200Args["obj"]["arc200_allowance(address,address)uint256"] | Arc200Args["tuple"]["arc200_allowance(address,address)uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<AppCallMethodCall>;
    };
    /**
     * Create transactions for the current app
     */
    readonly createTransaction: {
        /**
         * Makes a clear_state call to an existing instance of the Arc200 smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params?: Expand<AppClientBareCallParams>) => Promise<Transaction>;
        /**
         * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call transaction
         */
        bootstrap: (params: CallParams<Arc200Args["obj"]["bootstrap(byte[],byte[],uint8,uint256)bool"] | Arc200Args["tuple"]["bootstrap(byte[],byte[],uint8,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the name of the token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The name of the token
         */
        arc200Name: (params?: CallParams<Arc200Args["obj"]["arc200_name()byte[32]"] | Arc200Args["tuple"]["arc200_name()byte[32]"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the symbol of the token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The symbol of the token
         */
        arc200Symbol: (params?: CallParams<Arc200Args["obj"]["arc200_symbol()byte[8]"] | Arc200Args["tuple"]["arc200_symbol()byte[8]"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the decimals of the token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The decimals of the token
         */
        arc200Decimals: (params?: CallParams<Arc200Args["obj"]["arc200_decimals()uint8"] | Arc200Args["tuple"]["arc200_decimals()uint8"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the total supply of the token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The total supply of the token
         */
        arc200TotalSupply: (params?: CallParams<Arc200Args["obj"]["arc200_totalSupply()uint256"] | Arc200Args["tuple"]["arc200_totalSupply()uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current balance of the owner of the token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The current balance of the holder of the token
         */
        arc200BalanceOf: (params: CallParams<Arc200Args["obj"]["arc200_balanceOf(address)uint256"] | Arc200Args["tuple"]["arc200_balanceOf(address)uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
         *
         * Transfers tokens
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: Success
         */
        arc200Transfer: (params: CallParams<Arc200Args["obj"]["arc200_transfer(address,uint256)bool"] | Arc200Args["tuple"]["arc200_transfer(address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
         *
         * Transfers tokens from source to destination as approved spender
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: Success
         */
        arc200TransferFrom: (params: CallParams<Arc200Args["obj"]["arc200_transferFrom(address,address,uint256)bool"] | Arc200Args["tuple"]["arc200_transferFrom(address,address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
         *
         * Approve spender for a token
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: Success
         */
        arc200Approve: (params: CallParams<Arc200Args["obj"]["arc200_approve(address,uint256)bool"] | Arc200Args["tuple"]["arc200_approve(address,uint256)bool"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current allowance of the spender of the tokens of the owner
         *
         * @param params The params for the smart contract call
         * @returns The call transaction: The remaining allowance
         */
        arc200Allowance: (params: CallParams<Arc200Args["obj"]["arc200_allowance(address,address)uint256"] | Arc200Args["tuple"]["arc200_allowance(address,address)uint256"]> & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            transactions: Transaction[];
            methodCalls: Map<number, algosdk.ABIMethod>;
            signers: Map<number, TransactionSigner>;
        }>;
    };
    /**
     * Send calls to the current app
     */
    readonly send: {
        /**
         * Makes a clear_state call to an existing instance of the Arc200 smart contract.
         *
         * @param params The params for the bare (raw) call
         * @returns The clearState result
         */
        clearState: (params?: Expand<AppClientBareCallParams & SendParams>) => Promise<{
            groupId: string;
            txIds: string[];
            returns?: ABIReturn[] | undefined;
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
            return?: ABIReturn | undefined;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `bootstrap(byte[],byte[],uint8,uint256)bool` ABI method.
         *
         * @param params The params for the smart contract call
         * @returns The call result
         */
        bootstrap: (params: CallParams<Arc200Args["obj"]["bootstrap(byte[],byte[],uint8,uint256)bool"] | Arc200Args["tuple"]["bootstrap(byte[],byte[],uint8,uint256)bool"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["bootstrap(byte[],byte[],uint8,uint256)bool"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the name of the token
         *
         * @param params The params for the smart contract call
         * @returns The call result: The name of the token
         */
        arc200Name: (params?: CallParams<Arc200Args["obj"]["arc200_name()byte[32]"] | Arc200Args["tuple"]["arc200_name()byte[32]"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_name()byte[32]"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the symbol of the token
         *
         * @param params The params for the smart contract call
         * @returns The call result: The symbol of the token
         */
        arc200Symbol: (params?: CallParams<Arc200Args["obj"]["arc200_symbol()byte[8]"] | Arc200Args["tuple"]["arc200_symbol()byte[8]"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_symbol()byte[8]"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the decimals of the token
         *
         * @param params The params for the smart contract call
         * @returns The call result: The decimals of the token
         */
        arc200Decimals: (params?: CallParams<Arc200Args["obj"]["arc200_decimals()uint8"] | Arc200Args["tuple"]["arc200_decimals()uint8"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_decimals()uint8"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the total supply of the token
         *
         * @param params The params for the smart contract call
         * @returns The call result: The total supply of the token
         */
        arc200TotalSupply: (params?: CallParams<Arc200Args["obj"]["arc200_totalSupply()uint256"] | Arc200Args["tuple"]["arc200_totalSupply()uint256"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_totalSupply()uint256"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current balance of the owner of the token
         *
         * @param params The params for the smart contract call
         * @returns The call result: The current balance of the holder of the token
         */
        arc200BalanceOf: (params: CallParams<Arc200Args["obj"]["arc200_balanceOf(address)uint256"] | Arc200Args["tuple"]["arc200_balanceOf(address)uint256"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_balanceOf(address)uint256"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transfer(address,uint256)bool` ABI method.
         *
         * Transfers tokens
         *
         * @param params The params for the smart contract call
         * @returns The call result: Success
         */
        arc200Transfer: (params: CallParams<Arc200Args["obj"]["arc200_transfer(address,uint256)bool"] | Arc200Args["tuple"]["arc200_transfer(address,uint256)bool"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_transfer(address,uint256)bool"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_transferFrom(address,address,uint256)bool` ABI method.
         *
         * Transfers tokens from source to destination as approved spender
         *
         * @param params The params for the smart contract call
         * @returns The call result: Success
         */
        arc200TransferFrom: (params: CallParams<Arc200Args["obj"]["arc200_transferFrom(address,address,uint256)bool"] | Arc200Args["tuple"]["arc200_transferFrom(address,address,uint256)bool"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_transferFrom(address,address,uint256)bool"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_approve(address,uint256)bool` ABI method.
         *
         * Approve spender for a token
         *
         * @param params The params for the smart contract call
         * @returns The call result: Success
         */
        arc200Approve: (params: CallParams<Arc200Args["obj"]["arc200_approve(address,uint256)bool"] | Arc200Args["tuple"]["arc200_approve(address,uint256)bool"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_approve(address,uint256)bool"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
        /**
         * Makes a call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
         *
         * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
         *
         * Returns the current allowance of the spender of the tokens of the owner
         *
         * @param params The params for the smart contract call
         * @returns The call result: The remaining allowance
         */
        arc200Allowance: (params: CallParams<Arc200Args["obj"]["arc200_allowance(address,address)uint256"] | Arc200Args["tuple"]["arc200_allowance(address,address)uint256"]> & SendParams & {
            onComplete?: OnApplicationComplete.NoOpOC;
        }) => Promise<{
            return: undefined | Arc200Returns["arc200_allowance(address,address)uint256"];
            returns?: ABIReturn[] | undefined | undefined;
            groupId: string;
            txIds: string[];
            confirmations: modelsv2.PendingTransactionResponse[];
            transactions: Transaction[];
            confirmation: modelsv2.PendingTransactionResponse;
            transaction: Transaction;
        }>;
    };
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    clone(params: CloneAppClientParams): Arc200Client;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_name()byte[32]` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the name of the token
     *
     * @param params The params for the smart contract call
     * @returns The call result: The name of the token
     */
    arc200Name(params?: CallParams<Arc200Args['obj']['arc200_name()byte[32]'] | Arc200Args['tuple']['arc200_name()byte[32]']>): Promise<Uint8Array<ArrayBufferLike>>;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_symbol()byte[8]` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the symbol of the token
     *
     * @param params The params for the smart contract call
     * @returns The call result: The symbol of the token
     */
    arc200Symbol(params?: CallParams<Arc200Args['obj']['arc200_symbol()byte[8]'] | Arc200Args['tuple']['arc200_symbol()byte[8]']>): Promise<Uint8Array<ArrayBufferLike>>;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_decimals()uint8` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the decimals of the token
     *
     * @param params The params for the smart contract call
     * @returns The call result: The decimals of the token
     */
    arc200Decimals(params?: CallParams<Arc200Args['obj']['arc200_decimals()uint8'] | Arc200Args['tuple']['arc200_decimals()uint8']>): Promise<number>;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_totalSupply()uint256` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the total supply of the token
     *
     * @param params The params for the smart contract call
     * @returns The call result: The total supply of the token
     */
    arc200TotalSupply(params?: CallParams<Arc200Args['obj']['arc200_totalSupply()uint256'] | Arc200Args['tuple']['arc200_totalSupply()uint256']>): Promise<bigint>;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_balanceOf(address)uint256` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the current balance of the owner of the token
     *
     * @param params The params for the smart contract call
     * @returns The call result: The current balance of the holder of the token
     */
    arc200BalanceOf(params: CallParams<Arc200Args['obj']['arc200_balanceOf(address)uint256'] | Arc200Args['tuple']['arc200_balanceOf(address)uint256']>): Promise<bigint>;
    /**
     * Makes a readonly (simulated) call to the Arc200 smart contract using the `arc200_allowance(address,address)uint256` ABI method.
     *
     * This method is a readonly method; calling it with onComplete of NoOp will result in a simulated transaction rather than a real transaction.
     *
     * Returns the current allowance of the spender of the tokens of the owner
     *
     * @param params The params for the smart contract call
     * @returns The call result: The remaining allowance
     */
    arc200Allowance(params: CallParams<Arc200Args['obj']['arc200_allowance(address,address)uint256'] | Arc200Args['tuple']['arc200_allowance(address,address)uint256']>): Promise<bigint>;
    /**
     * Methods to access state for the current Arc200 app
     */
    state: {
        /**
         * Methods to access global state for the current Arc200 app
         */
        global: {
            /**
             * Get all current keyed values from global state
             */
            getAll: () => Promise<Partial<Expand<GlobalKeysState>>>;
            /**
             * Get the current value of the name key in global state
             */
            name: () => Promise<Uint8Array | undefined>;
            /**
             * Get the current value of the symbol key in global state
             */
            symbol: () => Promise<Uint8Array | undefined>;
            /**
             * Get the current value of the decimals key in global state
             */
            decimals: () => Promise<number | undefined>;
            /**
             * Get the current value of the totalSupply key in global state
             */
            totalSupply: () => Promise<bigint | undefined>;
        };
        /**
         * Methods to access box state for the current Arc200 app
         */
        box: {
            /**
             * Get all current keyed values from box state
             */
            getAll: () => Promise<Partial<Expand<BoxKeysState>>>;
            /**
             * Get values from the balances map in box state
             */
            balances: {
                /**
                 * Get all current values of the balances map in box state
                 */
                getMap: () => Promise<Map<string, bigint>>;
                /**
                 * Get a current value of the balances map by key from box state
                 */
                value: (key: string) => Promise<bigint | undefined>;
            };
            /**
             * Get values from the approvals map in box state
             */
            approvals: {
                /**
                 * Get all current values of the approvals map in box state
                 */
                getMap: () => Promise<Map<Uint8Array, ApprovalStruct>>;
                /**
                 * Get a current value of the approvals map by key from box state
                 */
                value: (key: Uint8Array) => Promise<ApprovalStruct | undefined>;
            };
        };
    };
    newGroup(): Arc200Composer;
}
type Arc200Composer<TReturns extends [...any[]] = []> = {
    /**
     * Calls the bootstrap(byte[],byte[],uint8,uint256)bool ABI method.
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    bootstrap(params?: CallParams<Arc200Args['obj']['bootstrap(byte[],byte[],uint8,uint256)bool'] | Arc200Args['tuple']['bootstrap(byte[],byte[],uint8,uint256)bool']>): Arc200Composer<[...TReturns, Arc200Returns['bootstrap(byte[],byte[],uint8,uint256)bool'] | undefined]>;
    /**
     * Calls the arc200_name()byte[32] ABI method.
     *
     * Returns the name of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Name(params?: CallParams<Arc200Args['obj']['arc200_name()byte[32]'] | Arc200Args['tuple']['arc200_name()byte[32]']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_name()byte[32]'] | undefined]>;
    /**
     * Calls the arc200_symbol()byte[8] ABI method.
     *
     * Returns the symbol of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Symbol(params?: CallParams<Arc200Args['obj']['arc200_symbol()byte[8]'] | Arc200Args['tuple']['arc200_symbol()byte[8]']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_symbol()byte[8]'] | undefined]>;
    /**
     * Calls the arc200_decimals()uint8 ABI method.
     *
     * Returns the decimals of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Decimals(params?: CallParams<Arc200Args['obj']['arc200_decimals()uint8'] | Arc200Args['tuple']['arc200_decimals()uint8']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_decimals()uint8'] | undefined]>;
    /**
     * Calls the arc200_totalSupply()uint256 ABI method.
     *
     * Returns the total supply of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200TotalSupply(params?: CallParams<Arc200Args['obj']['arc200_totalSupply()uint256'] | Arc200Args['tuple']['arc200_totalSupply()uint256']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_totalSupply()uint256'] | undefined]>;
    /**
     * Calls the arc200_balanceOf(address)uint256 ABI method.
     *
     * Returns the current balance of the owner of the token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200BalanceOf(params?: CallParams<Arc200Args['obj']['arc200_balanceOf(address)uint256'] | Arc200Args['tuple']['arc200_balanceOf(address)uint256']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_balanceOf(address)uint256'] | undefined]>;
    /**
     * Calls the arc200_transfer(address,uint256)bool ABI method.
     *
     * Transfers tokens
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Transfer(params?: CallParams<Arc200Args['obj']['arc200_transfer(address,uint256)bool'] | Arc200Args['tuple']['arc200_transfer(address,uint256)bool']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_transfer(address,uint256)bool'] | undefined]>;
    /**
     * Calls the arc200_transferFrom(address,address,uint256)bool ABI method.
     *
     * Transfers tokens from source to destination as approved spender
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200TransferFrom(params?: CallParams<Arc200Args['obj']['arc200_transferFrom(address,address,uint256)bool'] | Arc200Args['tuple']['arc200_transferFrom(address,address,uint256)bool']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_transferFrom(address,address,uint256)bool'] | undefined]>;
    /**
     * Calls the arc200_approve(address,uint256)bool ABI method.
     *
     * Approve spender for a token
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Approve(params?: CallParams<Arc200Args['obj']['arc200_approve(address,uint256)bool'] | Arc200Args['tuple']['arc200_approve(address,uint256)bool']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_approve(address,uint256)bool'] | undefined]>;
    /**
     * Calls the arc200_allowance(address,address)uint256 ABI method.
     *
     * Returns the current allowance of the spender of the tokens of the owner
     *
     * @param args The arguments for the contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    arc200Allowance(params?: CallParams<Arc200Args['obj']['arc200_allowance(address,address)uint256'] | Arc200Args['tuple']['arc200_allowance(address,address)uint256']>): Arc200Composer<[...TReturns, Arc200Returns['arc200_allowance(address,address)uint256'] | undefined]>;
    /**
     * Makes a clear_state call to an existing instance of the Arc200 smart contract.
     *
     * @param args The arguments for the bare call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    clearState(params?: AppClientBareCallParams): Arc200Composer<[...TReturns, undefined]>;
    /**
     * Adds a transaction to the composer
     *
     * @param txn A transaction to add to the transaction group
     * @param signer The optional signer to use when signing this transaction.
     */
    addTransaction(txn: Transaction, signer?: TransactionSigner): Arc200Composer<TReturns>;
    /**
     * Returns the underlying AtomicTransactionComposer instance
     */
    composer(): Promise<TransactionComposer>;
    /**
     * Simulates the transaction group and returns the result
     */
    simulate(): Promise<Arc200ComposerResults<TReturns> & {
        simulateResponse: modelsv2.SimulateResponse;
    }>;
    simulate(options: SkipSignaturesSimulateOptions): Promise<Arc200ComposerResults<TReturns> & {
        simulateResponse: modelsv2.SimulateResponse;
    }>;
    simulate(options: RawSimulateOptions): Promise<Arc200ComposerResults<TReturns> & {
        simulateResponse: modelsv2.SimulateResponse;
    }>;
    /**
     * Sends the transaction group to the network and returns the results
     */
    send(params?: SendParams): Promise<Arc200ComposerResults<TReturns>>;
};
type Arc200ComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
    returns: TReturns;
}>;

interface IGetClientInput {
    algorand: AlgorandClient$1;
    appId: bigint;
    appName: string | undefined;
    approvalSourceMap: ProgramSourceMap | undefined;
    clearSourceMap: ProgramSourceMap | undefined;
    defaultSender: string | Address | undefined;
    defaultSigner: TransactionSigner | undefined;
}
declare const getArc200Client: (input: IGetClientInput) => Arc200Client;

export { type ApprovalStruct, Arc200Client, Arc200Factory, getArc200Client };
