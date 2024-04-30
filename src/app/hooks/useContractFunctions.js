import useContractData from "../hooks/useContractData";

import { ethers } from "ethers";
import FAMEABI from "../../abi/fameABI.json"
import { rpcUrl, FAMECONTRACTADDRESS } from "../../config/config";
import { useState } from "react";

const useContractFunctions = () => {
    //const [ethersProvider, setEthersProvider] = useState(null);

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

      const contractPolygon = new ethers.Contract(
        FAMECONTRACTADDRESS,
        FAMEABI,
        provider
      );

    //   console.log(provider);
    //   console.log(contractPolygon);

      //setEthersProvider(provider);


  const getDepositAmount = async () => {
      const deposit = await contractPolygon.depositAmount();
      return deposit.toString();
};

  const getGameDuration = async () => {
        const duration = await contractPolygon.gameDuration();
        return duration.toString();
  };

    return {getGameDuration,getDepositAmount};
};

export default useContractFunctions;
