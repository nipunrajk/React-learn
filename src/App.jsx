import React from "react";
import useFetch from "./useFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</div>
  );
}

export default App;
