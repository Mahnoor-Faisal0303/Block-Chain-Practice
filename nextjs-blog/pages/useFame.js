import { useEffect, useState } from 'react';
import useWallet from './index.js';

const useFame = () => {
  const { contract } = useWallet();

    const getGameDuration = async () => {   
          const info = await contract.gameDuration();
          return info.toString();
    };

    console.log("mahnoor",getGameDuration);

    const getDepositAmount = async () => {
          const info = await contract.depositAmount();
          return info.toString();
    };

  return {
    getGameDuration,
    getDepositAmount,
  };
};

export default useFame;
