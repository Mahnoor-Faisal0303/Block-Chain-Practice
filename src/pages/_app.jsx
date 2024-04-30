"use client";
import "@rainbow-me/rainbowkit/styles.css";
import HomePage from "./index.jsx";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../config/wallet.config.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <HomePage />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
