import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';
import FAMEABI from '../public/src/fameABI.json';

const useWallet = () => {

  const [depositAmount, setDepositAmount] = useState("$1000");
  const [gameDuration, setGameDuration] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [contract, setContract] = useState();

  useEffect(() => {
    async function connectToContract() {
      try {
        const rpcUrl = 'https://rpc.ankr.com/polygon/8cd6b1cea2d3af26c0e267955e74bc8c41cd053b47d9fc04f3dacbf2c0c8557a';
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

        const contractPolygon = new ethers.Contract(
          "0xE2186402701E73C81Ab9A6778a5bB6a94B51A745",
          FAMEABI,
          provider
        );

        console.log(provider);
        console.log(contractPolygon);

        setContract(contractPolygon);
        setEthersProvider(provider);

        const deposit = await contractPolygon.depositAmount();
        const duration = await contractPolygon.gameDuration();
        setDepositAmount(deposit.toString());
        setGameDuration(duration.toString());
      } catch (error) {
        console.error('Error connecting to contract:', error);
      }
    }

    connectToContract();
  }, []);

  return(
    <div>
      <h1>{depositAmount}</h1>
      <h1>{gameDuration}</h1>
    </div>
  )
};

export default useWallet;
