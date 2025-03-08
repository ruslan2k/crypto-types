export interface INetwork {
  description: string
  explorer: string
}

export enum ECurrency {
  ETH = 'ETH',
  USDT = 'USDT',
  USDC = 'USDC',
}

// testnet
export enum ETestNet {
  BSC_TESTNET = 'BSC_TESTNET',
  ETH_SEPOLIA_TESTNET = 'ETH_SEPOLIA_TESTNET',
  TRON_SHASTA_TESTNET = "TRON_SHASTA_TESTNET",
}

// mainnet
export enum EMainNet {
  BSC_MAINNET = 'BSC_MAINNET',
  ETH_MAINNET = 'ETH_MAINNET',
}

