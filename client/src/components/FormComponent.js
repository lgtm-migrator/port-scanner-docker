import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Context } from "../store/Store";

const FormComponent = () => {
  const [state, dispatch] = useContext(Context);
  const [formValues, setFormValues] = useState({
    target: "github.com",
    startPort: 0,
    endPort: 500,
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    dispatch({ type: "HOST", payload: formValues.target });
  };
  const handleSubmit = () => {
    dispatch({ type: "LOADING", payload: true });
    axios
      .post("http://localhost:5000/api/portscan", {
        target: formValues.target,
        startPort: parseInt(formValues.startPort),
        endPort: parseInt(formValues.endPort),
      })
      .then((res) => {
        dispatch({
          type: "OPENED_PORTS",
          payload: res.data.data[0].openedPorts,
        });
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "RESULTS", payload: true });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: "an error has occured" });
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>Choose your host</label>
        <Form.Field>
          <input
            type="text"
            placeholder="github.com"
            value={formValues.target}
            name="target"
            onChange={handleChange}
          />
        </Form.Field>
        <label>Choose your ports (65535 maximum)</label>
        <Form.Group>
          <Form.Input
            className="button-port"
            type="tel"
            placeholder="0"
            name="startPort"
            value={formValues.startPort}
            onChange={handleChange}
          />
          <Form.Input
            type="tel"
            className="button-port"
            placeholder="1048"
            name="endPort"
            value={formValues.endPort}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="mt-2">
          <Button
            fluid
            className={state.loading ? "red loading" : "red"}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
