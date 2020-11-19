import { Button, Form } from "semantic-ui-react";

function App() {
  return (
    <div>
      <div id="container">
        <h1 className="text-centered">Port Scanner</h1>
        <Form>
          <Form.Field>
            <label>Choose you ip address:</label>
            <input placeholder="FIp address" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
