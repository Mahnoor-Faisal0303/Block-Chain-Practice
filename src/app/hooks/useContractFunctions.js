import { ethers } from "ethers";
import FAMEABI from "../../abi/fameABI.json";
import { rpcUrl, FAMECONTRACTADDRESS } from "../../config/config";

const useContractFunctions = () => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  const contractPolygon = new ethers.Contract(
    FAMECONTRACTADDRESS,
    FAMEABI,
    provider
  );

  const getendGameTimestamp = async () => {
    const GameTimestamp = await contractPolygon.endGameTimestamp();
    return GameTimestamp.toString();
  };

  const getDepositAmount = async () => {
    const deposit = await contractPolygon.depositAmount();
    return deposit.toString();
  };

  const getGameDuration = async () => {
    const duration = await contractPolygon.gameDuration();
    return duration.toString();
  };

  return { getendGameTimestamp, getDepositAmount, getGameDuration };
};

export default useContractFunctions;
