import { getElementError } from "@testing-library/react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      console.log("1");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("3");
          new Notification(title, options);
        } else {
          console.log("4");
          return;
        }
      });
    } else {
      console.log("2");
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNotification = useNotification(
    "Can i steal your kimchi?",
    { body: "I love kimchi don't you" }
  );
  return (
    <div className="App">
      <button onClick={triggerNotification}>hello</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
