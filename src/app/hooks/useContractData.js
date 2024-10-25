import { useQuery } from "@tanstack/react-query";
import {
  getendGameTimestamp,
  getDepositAmount,
  getGameDuration,
  getTopFame,
  getGamesLength
} from "../../api/functions";

const useContractData = () => {
  const { data: timeStamp } = useQuery({
    queryKey: ["timeStamp"],
    queryFn: getendGameTimestamp,
  });
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
  const { data: gameLength } = useQuery({
    queryKey: ["gamelength"],
    queryFn: getGamesLength,
  });

  return {
    timeStamp,
    depositAmount,
    gameDuration,
    topValue,
    gameLength
  };
};

export default useContractData;
