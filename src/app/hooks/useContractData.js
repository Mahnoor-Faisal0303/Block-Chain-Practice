import { useEffect, useState } from "react";
import useContractFunctions from "../hooks/useContractFunctions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState("$100");
  const [gameDuration, setGameDuration] = useState("$0");
  return { depositAmount, gameDuration };
};

export default useContractData;
