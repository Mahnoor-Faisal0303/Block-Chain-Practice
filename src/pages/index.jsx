// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { ethers } from "ethers";
// import FAMEABI from "../../fameABI.json";
// import { rpcUrl,FAMECONTRACTADDRESS } from "../config/config";

// export default function useWallet() {
//   const [depositAmount, setDepositAmount] = useState("$1000");
//   const [gameDuration, setGameDuration] = useState(null);
//   const [ethersProvider, setEthersProvider] = useState(null);

//   useEffect(() => {
//     async function connectToContract() {
      
//       const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

//       const contractPolygon = new ethers.Contract(
//         FAMECONTRACTADDRESS,
//         FAMEABI,
//         provider
//       );

//       console.log(provider);
//       console.log(contractPolygon);

//       setEthersProvider(provider);

//       const deposit = await contractPolygon.depositAmount();
//       setDepositAmount(deposit.toString());

//       console.group("Deposit Function"); 
//       console.log(deposit);
//       console.log(depositAmount);
//       console.groupEnd();

//       const duration = await contractPolygon.gameDuration();
//       setGameDuration(duration.toString());
//       console.group("GameDuration Function"); 
//       console.log(duration);
//       console.log(gameDuration);
//       console.groupEnd();       
//     }

//     connectToContract();
//   }, []);

//   return (
//   <>
//     <input title="in"></input>
//     <button>Deposit</button>
//   </>
  
// );
// };

// //export default useWallet;


import { useEffect } from "react";
import useContractData from "../app/hooks/useContractData";

export default function homePage() {
  const { depositAmount, gameDuration } = useContractData();

  useEffect(() => {
    console.group("Deposit Function"); 
    console.log("Deposit Amount:", depositAmount);
    console.groupEnd();

    console.group("GameDuration Function"); 
    console.log("Game Duration:", gameDuration);
    console.groupEnd();
  }, [depositAmount, gameDuration]);

  return (
    <>
     <h1>contractData</h1>
    </>
  );
};
