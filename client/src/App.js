import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const App = () => {
  const [array, setArray] = useState(undefined)
  const [formValues, setFormValues] = useState({
    address: undefined,
    startPort: 0,
    endPort: 1048,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("passage function callback");
    axios
      .get("http://localhost:8000/api/portscannerdocker")
      .then(res => {
        setArray(res.data)
      })
  };
  return (
    <div>
      <div id="container">
        <h1 className="text-centered">Port Scanner</h1>
        <div className="m-auto">
          <Form onSubmit={handleSubmit}>
            <label>Choose your host</label>
            <Form.Field>
              <input
                placeholder="github.com"
                value={formValues.address}
                name="address"
                onChange={handleChange}
              />
            </Form.Field>
            <label>Choose your ports (65535 maximum)</label>
            <Form.Group>
              <Form.Input
                className="button-port"
                placeholder="0"
                name="startPort"
                value={formValues.startPort}
                onChange={handleChange}
              />
              <Form.Input
                className="button-port"
                placeholder="1048"
                name="endPort"
                value={formValues.endPort}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="mt-2">
              <Button fluid className="red" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div></div>
        <p className=" mt-2 text-centered">Port scanner v.1.0</p>
      </div>
    </div>
  );
};

export default App;
