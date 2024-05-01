import { useState, useEffect } from "react";
import useContractFunctions from "../hooks/useContractFunctions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState(null);
  const [gameDuration, setGameDuration] = useState(null);
  const { getDepositAmount, getGameDuration } = useContractFunctions();

  useEffect(() => {
    getDepositAmount().then((deposit) => {
      setDepositAmount(deposit);
    });

    getGameDuration().then((duration) => {
      setGameDuration(duration);
    });
  }, []);

  return { depositAmount, gameDuration };
};

export default useContractData;
