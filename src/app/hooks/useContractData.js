import { useEffect, useState } from "react";
import useContractFunctions from "../hooks/useContractFunctions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState("$100");
  const [gameDuration, setGameDuration] = useState(null);

  const { getDepositAmount, getGameDuration } = useContractFunctions();

  useEffect(() => {
    setDepositAmount(getDepositAmount().toString());
    setGameDuration(getGameDuration().toString());
  }, []);

  return { depositAmount, gameDuration };
};

export default useContractData;
