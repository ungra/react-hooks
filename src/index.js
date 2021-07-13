import { getElementError } from "@testing-library/react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios/useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json",
  });
  console.log(
    `loading: ${loading}\n error: ${error}\n data: ${JSON.stringify(
      data
    )}\n`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
