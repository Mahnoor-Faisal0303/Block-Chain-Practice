'use client';
import { useEffect } from "react";
import useContractData from "../app/hooks/useContractData";
import {ConnectWalletButton} from '../app/component/connectWalletButton';

const HomePage =()=> {
  const { depositAmount, gameDuration } = useContractData();

  useEffect(() => {
    console.group("Deposit Function"); 
    console.log("Deposit Amount:", depositAmount);
    console.groupEnd();

    console.group("GameDuration Function"); 
    console.log("Game Duration:", gameDuration);
    console.groupEnd();
  }, []);

  return (
    <>
    <h1>DepositAmount: {depositAmount}</h1>
    <h1>GameDuration: {gameDuration}</h1>
    <ConnectWalletButton/>
    </>
  );
};

export default HomePage;
