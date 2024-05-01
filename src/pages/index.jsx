'use client';
import useContractData from "../app/hooks/useContractData";
import { ConnectWalletButton } from '../app/component/connectWalletButton';

const HomePage = () => {
  const { depositAmount, gameDuration } = useContractData();
  return (
    <>
      <h1>Deposit Amount: {depositAmount}</h1>
      <h1>Game Duration: {gameDuration}</h1>
      <ConnectWalletButton/>
    </>
  );
};

export default HomePage;
