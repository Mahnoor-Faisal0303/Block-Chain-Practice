"use client";
import { useState, useEffect } from "react";
import useContractData from "../app/hooks/useContractData";
import { ConnectWalletButton } from "../app/component/connectWalletButton";
import Timer from "../app/component/timer";

const HomePage = () => {
  const { depositAmount, gameDuration } = useContractData();

  return (
    <>
      <h1>Deposit Amount: {depositAmount}</h1>
      <h1>Game Duration: {gameDuration}</h1>
      <Timer/>
      <ConnectWalletButton />
    </>
  );
};

export default HomePage;
