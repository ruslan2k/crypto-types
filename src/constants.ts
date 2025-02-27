import { ETestNet, EMainNet, INetwork, ECurrency } from './types';

export const CurrencyDescription: {
  [currency in ECurrency]: string;
} = {
  [ECurrency.USDT]: 'Tether (USDT)',
  [ECurrency.USDC]: 'USD Coin (USDC)',
};

export const TESTNETS: { [key in ETestNet]: INetwork } = {
  [ETestNet.BSC_TESTNET]: {
    description: 'BNB Smart Chain (BSC) Testnet',
    explorer: 'https://testnet.bscscan.com',
  },
  [ETestNet.SEPOLIA_TESTNET]: {
    description: 'Sepolia Eth Testnet',
    explorer: 'https://sepolia.etherscan.io',
  },
};

export const MAINNETS: { [key in EMainNet]: INetwork } = {
  [EMainNet.BSC_MAINNET]: {
    description: 'BNB Smart Chain (BSC) Mainnet',
    explorer: 'https://bscscan.com',
  },
  [EMainNet.ETH_MAINNET]: {
    description: 'Ethereum Mainnet',
    explorer: 'https://etherscan.io',
  },
};


