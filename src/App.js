import { useEffect, useState } from "react";
import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";

function App(props) {
  const [branches, setBranches] = useState();
  const [tree, setTree] = useState([]);

  useEffect(() => {
    return () => {};
  }, [branches]);

  const makeBranches = () => {};

  const makeTree = (numberOfBranches) => {};

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Tree of Life. Please choose how many branches you would
          like.
        </p>
        <Tree tree={tree} />
        <input
          name="numberOfBranches"
          onChange={(e) => makeTree(e.target.value)}
        />
      </header>
    </div>
  );
}

const Tree = (props) => {
  //
};

export default App;
