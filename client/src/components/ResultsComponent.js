import React, { useContext, useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Context } from "../store/Store";

const ResultsComponent = () => {
  const [state, dispatch] = useContext(Context);
  const [ports, setPorts] = useState([]);
  const returnFunction = () => {
    dispatch({ type: "RESULTS", payload: false });
    dispatch({ type: "OPEN_PORTS", payload: null });
  };
  useEffect(() => {
    if (state) {
      let ports = []
      state.openedPorts.forEach((port) => {
        state.portsDesc.forEach((portDesc) => {
          if (portDesc.port === port) {
            ports.push(portDesc);
          }
        });
      });
      setPorts(ports)
    }
  }, []);
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Host</th>
            <th>Port</th>
            <th>Port desc</th>
            <th>Status</th>
          </tr>
        </thead>
        {ports.length
          ? ports.map((port) => (
              <tbody key={port.port}>
                <tr>
                  <td key={port.port} data-label="Host">{state.host}</td>
                  <td data-label="Port">{port.port}</td>
                  <td data-label="Port desc">{port.portDesc}</td>
                  <td data-label="Status">Open</td>
                </tr>
              </tbody>
            ))
          : null}
      </table>
      <div className="mt-2">
        <Button
          onClick={returnFunction}
          fluid
          className="grey"
          type="Return"
        >
          Return
        </Button>
      </div>
    </div>
  );
};

export default ResultsComponent;
