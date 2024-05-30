import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  
  return <h1 onClick={clickHandler}>counter:{counter}</h1>;
}
