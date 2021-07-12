import { getElementError } from "@testing-library/react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (
      typeof duration !== "number" ||
      typeof delay !== "number"
    ) {
      console.log("return");
      return;
    }
    if (element.current) {
      console.log(element.current.style);
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(4, 4);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>alsdkfj;lsadj fl;kasjd lf;</p>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
