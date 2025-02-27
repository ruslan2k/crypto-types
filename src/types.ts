export enum ENetwork {
  BSC_TESTNET = 'BSC_TESTNET',
  SEPOLIA_TESTNET = 'SEPOLIA_TESTNET'
}

export interface INetwork {
  description: string
  explorer: string
}

export enum ECurrency {
  USDT = 'USDT',
  USDC = 'USDC',
}

// testnet
export enum ETestNet {
  BSC_TESTNET = 'BSC_TESTNET',
  SEPOLIA_TESTNET = 'SEPOLIA_TESTNET',
}

// mainnet
export enum EMainNet {
  BSC_MAINNET = 'BSC_MAINNET',
  ETH_MAINNET = 'ETH_MAINNET',
}

