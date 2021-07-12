import { getElementError } from "@testing-library/react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  const handle = (evnet) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () =>
      document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
