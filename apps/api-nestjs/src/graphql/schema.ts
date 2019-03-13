/* tslint:disable */
export enum BalanceType {
    TX_FEE = "TX_FEE",
    REWARD = "REWARD",
    ETHER = "ETHER",
    ERC20 = "ERC20",
    ERC721 = "ERC721"
}

export enum ContractTypeEnum {
    GENERIC = "GENERIC",
    ERC20 = "ERC20",
    ERC721 = "ERC721"
}

export enum TokenExchangeRateFilter {
    price_high = "price_high",
    price_low = "price_low",
    volume_high = "volume_high",
    volume_low = "volume_low",
    market_cap_high = "market_cap_high",
    market_cap_low = "market_cap_low",
    market_cap_rank = "market_cap_rank"
}

export class AccountMetadata {
    id?: string;
    inTxCount?: number;
    isContractCreator?: boolean;
    isMiner?: boolean;
    outTxCount?: number;
    totalTxCount?: number;
}

export class Action {
    TraceCallActionRecord?: TraceCallActionRecord;
    TraceCreateActionRecord?: TraceCreateActionRecord;
    TraceDestroyActionRecord?: TraceDestroyActionRecord;
    TraceRewardActionRecord?: TraceRewardActionRecord;
}

export class Balance {
    id?: BalanceKey;
    address?: string;
    amount?: string;
    balanceType?: BalanceType;
}

export class BalanceKey {
    balanceType?: BalanceType;
    address?: string;
}

export class Block {
    id?: Decimal;
    totalDifficulty?: string;
    header?: Header;
    rewards?: Reward[];
    transactions?: Transaction[];
    uncles?: Uncle[];
}

export class BlockMetric {
    id?: Decimal;
    avgGasLimit?: string;
    avgGasPrice?: string;
    avgTxFees?: string;
    blockTime?: string;
    difficulty?: string;
    hash?: string;
    number?: number;
    numFailedTxs?: number;
    numPendingTxs?: number;
    numSuccessfulTxs?: number;
    numUncles?: number;
    timestamp?: number;
    totalDifficulty?: string;
    totalTxs?: number;
}

export class Contract {
    id?: string;
    address?: string;
    creator?: string;
    data?: Buffer;
    destructed?: ContractDestructed;
    metadata?: ContractMetadata;
    type?: ContractType;
}

export class ContractDestructed {
    address?: string;
    balance?: Buffer;
    refundAddress?: Buffer;
}

export class ContractMetadata {
    decimals?: number;
    ens_address?: string;
    name?: string;
    symbol?: string;
    website?: string;
    logo?: Logo;
    social?: Social;
    support?: Support;
}

export class ContractType {
    string?: ContractTypeEnum;
}

export class Header {
    author?: string;
    difficulty?: string;
    extraData?: string;
    gasLimit?: string;
    gasUsed?: string;
    hash?: string;
    logsBloom?: string;
    nonce?: string;
    number?: number;
    parentHash?: string;
    receiptsRoot?: string;
    sha3Uncles?: string;
    size?: number;
    stateRoot?: string;
    timestamp?: number;
    transactionsRoot?: string;
}

export class Log {
    address?: string;
    data?: string;
    topics?: string[];
}

export class Logo {
    src?: string;
}

export abstract class IQuery {
    abstract accountMetadataByHash(hash: string): AccountMetadata | Promise<AccountMetadata>;

    abstract balanceByHash(hash: string): Balance | Promise<Balance>;

    abstract blockMetricByHash(hash?: string): BlockMetric | Promise<BlockMetric>;

    abstract blockMetrics(limit?: number, page?: number): BlockMetric[] | Promise<BlockMetric[]>;

    abstract blocks(limit?: number, page?: number): Block[] | Promise<Block[]>;

    abstract blockByHash(hash?: string): Block | Promise<Block>;

    abstract blockByNumber(number?: number): Block | Promise<Block>;

    abstract minedBlocksByAddress(address?: string, limit?: number, page?: number): Block[] | Promise<Block[]>;

    abstract totalNumberOfBlocks(): number | Promise<number>;

    abstract contractByHash(hash?: string): Contract | Promise<Contract>;

    abstract contractsCreatedBy(creator?: string, limit?: number, page?: number): Contract[] | Promise<Contract[]>;

    abstract quote(token: string, to: string): Quote | Promise<Quote>;

    abstract tokenExchangeRates(filter: TokenExchangeRateFilter, limit?: number, page?: number): TokenExchangeRate[] | Promise<TokenExchangeRate[]>;

    abstract totalNumTokenExchangeRates(): number | Promise<number>;

    abstract tokenExchangeRateBySymbol(symbol: string): TokenExchangeRate | Promise<TokenExchangeRate>;

    abstract tokenExchangeRateByAddress(address: string): TokenExchangeRate | Promise<TokenExchangeRate>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Quote {
    to?: string;
    price?: string;
    last_update?: Decimal;
    vol_24h?: string;
}

export class Receipt {
    blockHash?: string;
    blockNumber?: number;
    contractAddress?: string;
    cumulativeGasUsed?: string;
    gasUsed?: string;
    logsBloom?: string;
    numInternalTxs?: number;
    root?: string;
    transactionHash?: string;
    transactionIndex?: string;
    logs?: Log[];
    traces?: Trace[];
}

export class Result {
    address?: string;
    code?: string;
    gasUsed?: string;
    output?: string;
}

export class Reward {
    author?: string;
    rewardType?: string;
    value?: string;
}

export class Social {
    blog?: string;
    chat?: string;
    facebook?: string;
    forum?: string;
    github?: string;
    gitter?: string;
    instagram?: string;
    linkedin?: string;
    reddit?: string;
    slack?: string;
    telegram?: string;
    twitter?: string;
    youtube?: string;
}

export abstract class ISubscription {
    abstract newBlock(): Block[] | Promise<Block[]>;
}

export class Support {
    email?: string;
    url?: string;
}

export class TokenExchangeRate {
    id?: string;
    address?: string;
    circulatingSupply?: string;
    currentPrice?: Decimal;
    high24h?: Decimal;
    image?: string;
    lastUpdated?: string;
    low24h?: Decimal;
    marketCap?: Decimal;
    marketCapChange24h?: Decimal;
    marketCapChangePercentage24h?: Decimal;
    marketCapRank?: number;
    name?: string;
    priceChange24h?: Decimal;
    priceChangePercentage24h?: Decimal;
    symbol?: string;
    totalSupply?: number;
    totalVolume?: Decimal;
}

export class Trace {
    blockHash?: string;
    blockNumber?: number;
    error?: string;
    subtraces?: number;
    traceAddress?: number[];
    transactionHash?: string;
    transactionPosition?: number;
    type?: string;
    action?: Action;
    result?: Result;
}

export class TraceCallActionRecord {
    callType?: string;
    from?: string;
    gas?: string;
    input?: string;
    to?: string;
    value?: string;
}

export class TraceCreateActionRecord {
    from?: string;
    gas?: string;
    init?: string;
    value?: string;
}

export class TraceDestroyActionRecord {
    address?: string;
    balance?: string;
    refundAddress?: string;
}

export class TraceRewardActionRecord {
    author?: string;
    value?: string;
    rewardType?: string;
}

export class Transaction {
    blockHash?: string;
    blockNumber?: number;
    creates?: string;
    from?: string;
    gas?: string;
    gasPrice?: string;
    hash?: string;
    input?: string;
    nonce?: string;
    r?: string;
    s?: string;
    timestamp?: number;
    to?: string;
    transactionIndex?: number;
    v?: number;
    value?: string;
    receipt?: Receipt;
}

export class Uncle {
    id?: string;
    author?: string;
    blockNumber?: number;
    difficulty?: string;
    extraData?: string;
    gasLimit?: string;
    gasUsed?: string;
    hash?: string;
    logsBloom?: string;
    nonce?: string;
    number?: number;
    parentHash?: string;
    receiptsRoot?: string;
    sha3Uncles?: string;
    size?: number;
    stateRoot?: string;
    timestamp?: number;
    transactionsRoot?: string;
    uncleIndex?: number;
    uncleReward?: string;
}

export type Buffer = any;
export type Date = any;
export type Decimal = any;
export type JSON = any;
