import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    publicProvider()
  ]
);


const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: '71d8c3310f0fb3c0788d5a4b6582820e',
    chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
        <App />
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
