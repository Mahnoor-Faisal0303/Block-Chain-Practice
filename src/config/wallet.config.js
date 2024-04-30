import { projectId } from "./config";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
const config = getDefaultConfig({
  appName: "My App",
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
});
export { config };
