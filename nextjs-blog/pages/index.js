import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import "@rainbow-me/rainbowkit/styles.css";
import { ethers } from "ethers";
// import { CONTRACTS } from "@/config/config";
// import FAMEABI from "@/abi/fameABI.json";

export default function Home() {
  const rpcUrl = "https://rpc.ankr.com/polygon/8cd6b1cea2d3af26c0e267955e74bc8c41cd053b47d9fc04f3dacbf2c0c8557a"; // Replace with your Infura project ID or another RPC URL
        console.log("Using fallback JSON-RPC provider:", rpcUrl);
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        console.log(provider);
        // const contractpolygon = new ethers.Contract(
        //   "0xE2186402701E73C81Ab9A6778a5bB6a94B51A745",
        //   FAMEABI,
        //   provider
        // );
        // setcontract(contractpolygon)
        // setEthersProvider(provider);
        // setSigner(null); // No signer in this case
        // setAddress(null); // No address in this case
  return (
    <div>
      
    </div>
  );
}