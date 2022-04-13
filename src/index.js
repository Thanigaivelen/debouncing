import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import "./styles.css";
const sendQuery = query => console.log(`Querying for ${query}`);

const SearchBroken = () => {
  const [userQuery, setUserQuery] = useState("");
  const delayedQuery = _.debounce(q => sendQuery(q), 500);
  const onChange = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div>
      <label>Search:</label>
      <input onChange={onChange} value={userQuery} />
    </div>
  );
};
const SearchFixed = () => {
  const [userQuery, setUserQuery] = useState("");
  const delayedQuery = useRef(_.debounce(q => sendQuery(q), 500)).current;
  const onChange = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div>
      <label>Search Fixed:</label>
      <input onChange={onChange} value={userQuery} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h4>search box</h4>
      <SearchFixed />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
