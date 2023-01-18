import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chains, wagmiClient } from "../config/walletConfig"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
    </WagmiConfig>
  )
}