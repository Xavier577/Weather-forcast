import { useEffect } from "react";
import useTimeout from "./useTimeout";

const useDebounce = (
  callback: Function,
  delay: number,
  dependencies: any[]
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);
};

export default useDebounce;
