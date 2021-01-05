import React, { useContext } from "react";
import FormComponent from "../components/FormComponent";
import ResultsComponent from "../components/ResultsComponent";
import { Context } from "../store/Store";

const App = () => {
  const [state] = useContext(Context);
  return (
    <div>
      <div id="container">
        <h1 className="text-centered">Port Scanner</h1>
        <div className="m-auto">
          {!state.results ? <FormComponent /> : <ResultsComponent />}
        </div>
        <p className=" mt-2 text-centered">Port scanner v.1.0</p>
      </div>
    </div>
  );
};

export default App;
