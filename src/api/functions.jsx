import { ethers } from "ethers";
import FAMEABI from "../abi/fameABI.json";
import { rpcUrl, FAMECONTRACTADDRESS } from "../config/config";

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  const contractPolygon = new ethers.Contract(
    FAMECONTRACTADDRESS,
    FAMEABI,
    provider
  );
  console.log(contractPolygon);

export async function getendGameTimestamp() {
    const GameTimestamp = await contractPolygon.endGameTimestamp();
    return GameTimestamp.toString();
}
export async function getDepositAmount() {
    const deposit = await contractPolygon.depositAmount();
    return deposit.toString();
  };

export async function getGameDuration() {
    const duration = await contractPolygon.gameDuration();
    return duration.toString();
  };
export async function getTopFame() {
    const topFame = await contractPolygon.topFameValues(0);
    return topFame.toString();
  };

