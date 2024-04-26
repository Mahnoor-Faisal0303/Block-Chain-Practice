import { useEffect, useState } from "react";
import Head from "next/head";
import { ethers } from "ethers";
import FAMEABI from "../fameABI.json";

const useWallet = () => {
  const [depositAmount, setDepositAmount] = useState("$1000");
  const [gameDuration, setGameDuration] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);

  useEffect(() => {
    async function connectToContract() {
      // change url
      const rpcUrl = "https://polygon-rpc.com";
      //const rpcUrl = 'https://rpc.ankr.com/polygon/8cd6b1cea2d3af26c0e267955e74bc8c41cd053b47d9fc04f3dacbf2c0c8557a';
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

      const contractPolygon = new ethers.Contract(
        "0xE2186402701E73C81Ab9A6778a5bB6a94B51A745",
        FAMEABI,
        provider
      );

      console.log(provider);
      console.log(contractPolygon);

      setEthersProvider(provider);

      const deposit = await contractPolygon.depositAmount();
      setDepositAmount(deposit.toString());

      console.group("Deposit Function"); 
      console.log(deposit);
      console.log(depositAmount);
      console.groupEnd();

      const duration = await contractPolygon.gameDuration();
      setGameDuration(duration.toString());
      console.group("GameDuration Function"); 
      console.log(duration);
      console.log(gameDuration);
      console.groupEnd();       
    }

    connectToContract();
  }, []);

  return <div></div>;
};

export default useWallet;
