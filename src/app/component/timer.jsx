import useContractData from "../hooks/useContractData";
import { useState, useEffect } from "react";
const Timer = () => {
  const { timeStamp } = useContractData();
  console.log(timeStamp);

  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  const calculateCountdown = () => {
    const currentTime = Date.now();
    console.log("current time", currentTime);

    const remainingTime = Math.max(0, timeStamp * 1000 - currentTime);
    console.log("remaining time-->", remainingTime);

    if (remainingTime > 0) {
      const totalSeconds = Math.floor(remainingTime / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const days = Math.floor(totalHours / 24);

      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setCountdownTime({
        countdownDays: days,
        countdownHours: hours,
        countdownMinutes: minutes,
        countdownSeconds: seconds,
      });
    } else {
      setCountdownTime({
        countdownDays: 0,
        countdownHours: 0,
        countdownMinutes: 0,
        countdownSeconds: 0,
      });
    }
  };

  useEffect(() => {
    calculateCountdown();
    const timerInterval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, [timeStamp]);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <h2>Days: {countdownTime.countdownDays}</h2>
      <h2>Hours: {countdownTime.countdownHours}</h2>
      <h2>Minutes: {countdownTime.countdownMinutes}</h2>
      <h2>Seconds: {countdownTime.countdownSeconds}</h2>
    </div>
  );
};
export default Timer;
