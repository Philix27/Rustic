"use client";
import { useState, useEffect } from "react";

export function useThrottle(value: string, delay: number) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    // This function updates the throttled value after the delay
    const updateThrottledValue = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(updateThrottledValue);
    };
  }, [value, delay]);

  return throttledValue;
}
