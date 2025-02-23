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
  USDC = 'USDC'
}
