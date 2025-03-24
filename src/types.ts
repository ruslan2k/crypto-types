export interface INetwork {
  description: string
  explorer: string
  netType: ENetworkType
}

export enum ENetworkType {
  ETH = 'ETH',
  TRON = 'TRON',
}

export enum ECurrency {
  ETH = 'ETH',
  USDT = 'USDT',
  USDC = 'USDC',
  // BUSD = 'BUSD',
  // DAI = 'DAI',
}

// testnet
export enum ETestNet {
  BSC_TESTNET = 'BSC_TESTNET',
  ETH_SEPOLIA_TESTNET = 'ETH_SEPOLIA_TESTNET',
  TRON_SHASTA_TESTNET = 'TRON_SHASTA_TESTNET',
}

// mainnet
export enum EMainNet {
  BSC_MAINNET = 'BSC_MAINNET',
  ETH_MAINNET = 'ETH_MAINNET',
  TRON_MAINNET = 'TRON_MAINNET',
}

