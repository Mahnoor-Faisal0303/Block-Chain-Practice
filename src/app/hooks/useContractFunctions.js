import useContractData from "../hooks/useContractData";

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

  const deposit = contractPolygon.depositAmount();

  const duration = contractPolygon.gameDuration();

  return { duration, deposit };
};

export default useContractFunctions;
