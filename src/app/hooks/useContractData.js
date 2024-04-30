import { useEffect, useState } from "react";
import useContractFunctions from "../hooks/useContractFunctions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState("$100");
  const [gameDuration, setGameDuration] = useState("$0");

//   const { getDepositAmount, getGameDuration } = useContractFunctions();
//const { deposit, duration } = useContractFunctions();

  //useEffect(() => {
    //setDepositAmount(deposit.toString());
    // console.log("deposit:-->",deposit);
    // console.log("duration:-->",duration);
    //setGameDuration(duration.toString());
 // }, []);

  return { depositAmount, gameDuration };
};

export default useContractData;
