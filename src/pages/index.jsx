"use client";
import { useState, useEffect } from "react";
import useContractData from "../app/hooks/useContractData";
import { ConnectWalletButton } from "../app/component/connectWalletButton";
import Timer from "../app/component/timer";

const HomePage = () => {
  const { depositAmount, gameDuration,topValue,gameLength } = useContractData();
 console.log("Top Fame Values",topValue);

  return (
    <>
      <h1>Deposit Amount: {depositAmount}</h1>
      <h1>Game Duration: {gameDuration}</h1>
      <h1>Top Fame: {topValue}</h1>
      <h1>Games Length: {gameLength}</h1>
      <Timer />
      <ConnectWalletButton />
    </>
  );
};

export default HomePage;
