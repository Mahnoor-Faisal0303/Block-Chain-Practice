// import { useState, useEffect } from "react";
// import useContractFunctions from "../hooks/useContractFunctions";

// const useContractData = () => {
//   const [depositAmount, setDepositAmount] = useState(null);
//   const [gameDuration, setGameDuration] = useState(null);
//   const [timeStamp, setTimeStamp] = useState(null);
//   const [topValue,setTopValue] = useState(null);
//   const { getendGameTimestamp, getDepositAmount, getGameDuration, getTopFame } =
//     useContractFunctions();

//   useEffect(() => {
//     getendGameTimestamp().then((time) => {
//       setTimeStamp(time);
//     });

//     getDepositAmount().then((deposit) => {
//       setDepositAmount(deposit);
//     });

//     getGameDuration().then((duration) => {
//       setGameDuration(duration);
//     });

//     getTopFame().then((fame) => {
//       setTopValue(fame);
//     });
//   }, []);

//   return { depositAmount, gameDuration, timeStamp,topValue };
// };

// export default useContractData;

import { useQuery } from "@tanstack/react-query";
import {
  getDepositAmount,
  getGameDuration,
  getTopFame,
} from "../../api/functions";

const useContractData = () => {
  const { data: depositAmount } = useQuery({
    queryKey: ["deposit"],
    queryFn: getDepositAmount,
  });
  const { data: gameDuration } = useQuery({
    queryKey: ["game"],
    queryFn: getGameDuration,
  });
  const { data: topValue } = useQuery({
    queryKey: ["topfame"],
    queryFn: getTopFame,
  });

  return {
    depositAmount,
    gameDuration,
    topValue,
  };
};

export default useContractData;
