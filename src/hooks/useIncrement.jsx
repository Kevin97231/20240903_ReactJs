import { useState } from "react";

export const useIncrement = ({
  initialValue = 0,
  max = Infinity,
  min = -Infinity,
}) => {
  const [state, setState] = useState(initialValue);

  const increment = () =>
    setState((prevState) => (prevState < max ? prevState + 1 : prevState));
  const decrement = () =>
    setState((prevState) => (prevState > min ? prevState - 1 : prevState));

  return {
    count: state,
    incrementFunction: increment,
    decrement,
  };
};
