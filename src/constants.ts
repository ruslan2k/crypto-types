import { ETestNet, EMainNet, INetwork, ECurrency, ENetworkType } from './types';

export const CurrencyDescription: {
  [currency in ECurrency]: string;
} = {
  [ECurrency.ETH]: 'Ethereum (ETH)',
  [ECurrency.USDT]: 'Tether (USDT)',
  [ECurrency.USDC]: 'USD Coin (USDC)',
};

export const TESTNETS: { [key in ETestNet]: INetwork } = {
  [ETestNet.BSC_TESTNET]: {
    description: 'BNB Smart Chain (BSC) Testnet',
    explorer: 'https://testnet.bscscan.com',
    netType: ENetworkType.ETH,
  },
  [ETestNet.ETH_SEPOLIA_TESTNET]: {
    description: 'Eth Sepolia Testnet',
    explorer: 'https://sepolia.etherscan.io',
    netType: ENetworkType.ETH,
  },
  [ETestNet.TRON_SHASTA_TESTNET]: {
    description: 'Tron Shasta Testnet',
    explorer: "https://shasta.tronscan.org",
    netType: ENetworkType.TRON,
  },
};

export const MAINNETS: { [key in EMainNet]: INetwork } = {
  [EMainNet.BSC_MAINNET]: {
    description: 'BNB Smart Chain (BSC) Mainnet',
    explorer: 'https://bscscan.com',
    netType: ENetworkType.ETH,
  },
  [EMainNet.ETH_MAINNET]: {
    description: 'Ethereum Mainnet',
    explorer: 'https://etherscan.io',
    netType: ENetworkType.ETH,
  },
};


