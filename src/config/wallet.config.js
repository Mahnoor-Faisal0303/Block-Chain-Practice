import { projectId } from "./config";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {polygon} from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My App",
  projectId,
  chains: [polygon],
});
export { config };
