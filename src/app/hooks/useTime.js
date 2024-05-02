import {
    useEffect,
    useState,
    useRef,
    useCallback,
    DependencyList,
  } from "react";
  
  const useTimer = () => {
    const {
      remainingMinutes = 0,
      remainingSeconds = 0,
      remainingHours = 0,
      remainingDays = 0,
      onComplete = () => {},
      setInitialAfterFinish = true,
      deps = [],
    } = props;
    const [days, setDays] = useState<number>(remainingDays);
    const [hours, setHours] = useState<number>(remainingHours);
    const [minutes, setMinutes] = useState<number>(remainingMinutes);
    const [seconds, setSeconds] = useState<number>(remainingSeconds);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timer | null>(null);
  
    useEffect(() => {
      remainingDays && setDays(remainingDays);
      remainingHours && setHours(remainingHours);
      remainingMinutes && setMinutes(remainingMinutes);
      remainingSeconds && setSeconds(remainingSeconds);
    }, [remainingDays, remainingSeconds, remainingMinutes, remainingHours]);
  
    useEffect(() => {
      if (timerStarted) {
        if (timerRef.current) clearInterval(timerRef.current);
  
        timerRef.current = setInterval(() => {
          if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
            stopTimer();
            return;
          }
  
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
            return;
          }
  
          if (minutes > 0 && seconds === 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
            return;
          }
  
          if (hours > 0 && minutes === 0 && seconds === 0) {
            setHours((prev) => prev - 1);
            setMinutes(59);
            setSeconds(59);
            return;
          }
  
          if (days > 0 && hours === 0 && minutes === 0 && seconds === 0) {
            setDays((prev) => prev - 1);
            setHours(23);
            setMinutes(59);
            setSeconds(59);
          }
        }, 1000);
      }
  
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        timerRef.current = null;
      };
    }, [timerStarted, seconds, minutes, hours, days]);
  
    const stopTimer = useCallback(() => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = null;
      setTimerStarted(false);
      onComplete();
  
      if (setInitialAfterFinish) {
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
        setHours(remainingHours);
        setDays(remainingDays);
      }
    }, [
      onComplete,
      remainingMinutes,
      remainingSeconds,
      remainingHours,
      remainingDays,
    ]);
  
    const startTimer = useCallback(() => {
      setTimerStarted(true);
    }, [setTimerStarted]);
  
    return {
      days,
      minutes,
      seconds,
      hours,
      stopTimer,
      startTimer,
      timerStarted,
      setMinutes,
      onComplete,
    };
  };
  
  export { useTimer };
  