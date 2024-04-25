import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import FAMEABI from '../public/src/fameABI.json';
import { useFame } from './useFame.js';

const useWallet = () => {

  const [depositAmount, setDepositAmount] = useState(null);
  const [gameDuration, setGameDuration] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [contract, setcontract] = useState();

  useEffect(() => {
        const rpcUrl = 'https://rpc.ankr.com/polygon/8cd6b1cea2d3af26c0e267955e74bc8c41cd053b47d9fc04f3dacbf2c0c8557a';
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

        const contractpolygon = new ethers.Contract(
                    "0xE2186402701E73C81Ab9A6778a5bB6a94B51A745",
                    FAMEABI,
                    provider
        );
        console.log(provider);
        console.log(contractpolygon);
        setcontract(contractpolygon)
        setEthersProvider(provider);
   }, []);

  return (
    <div>
      <h1>Smart Contract Functions</h1>
    </div>
  );
}

export default useWallet;