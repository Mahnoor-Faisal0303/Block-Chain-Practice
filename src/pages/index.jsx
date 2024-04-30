'use client';
import { useEffect } from "react";
import useContractData from "../app/hooks/useContractData";
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
    <ConnectButton />
    </>
  );
};

export default HomePage;
