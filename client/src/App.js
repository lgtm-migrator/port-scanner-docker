import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const App = () => {
  const [array, setArray] = useState(undefined);
  const [formValues, setFormValues] = useState({
    target: 'github.com',
    startPort: 0,
    endPort: 500,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/portscan", {
        target: formValues.target,
        startPort: parseInt(formValues.startPort),
        endPort: parseInt(formValues.endPort),
      })
      .then((res) => {
        setArray(res.data);
      });
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
                type='text'
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
                type='tel'
                placeholder="0"
                name="startPort"
                value={formValues.startPort}
                onChange={handleChange}
              />
              <Form.Input
                type='tel'
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
