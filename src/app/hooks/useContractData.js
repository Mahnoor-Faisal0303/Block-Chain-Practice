import { useState, useEffect } from "react";
import useContractFunctions from "../hooks/useContractFunctions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState(null);
  const [gameDuration, setGameDuration] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);
  const { getendGameTimestamp, getDepositAmount, getGameDuration } =
    useContractFunctions();

  useEffect(() => {
    getendGameTimestamp().then((time) => {
      setTimeStamp(time);
    });

    getDepositAmount().then((deposit) => {
      setDepositAmount(deposit);
    });

    getGameDuration().then((duration) => {
      setGameDuration(duration);
    });
  }, []);

  return { depositAmount, gameDuration, timeStamp };
};

export default useContractData;
