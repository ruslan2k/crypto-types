import { ENetwork, INetwork } from './types';

export const NETWORKS: { [key in ENetwork]: INetwork } = {
  [ENetwork.BSC_TESTNET]: {
    description: 'BNB Smart Chain (BSC) Testnet',
    explorer: 'https://testnet.bscscan.com'
  },

  [ENetwork.SEPOLIA_TESTNET]: {
    description: 'Sepolia Eth Testnet',
    explorer: 'https://sepolia.etherscan.io'
  }
}

