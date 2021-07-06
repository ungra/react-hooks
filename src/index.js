import { getElementError } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current && typeof onClick === "function") {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current && typeof onClick === "function") {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
