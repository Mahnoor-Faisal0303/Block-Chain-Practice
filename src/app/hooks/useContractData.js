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


import { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { getDepositAmount } from "../../api/functions";

const useContractData = () => {
  const [depositAmount, setDepositAmount] = useState(null);

  const { data: depositData, isLoading: depositLoading, isError: depositError } = useQuery({queryKey: ['deposit'],queryFn: getDepositAmount});

  useEffect(() => {
    if (depositData) {
      setDepositAmount(depositData);
    }
  }, [depositData]);

  return { depositAmount, depositLoading, depositError };
};

export default useContractData;
