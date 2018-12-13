import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

class InputForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="GIVEN NAME"
            placeholder="First name"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            label="SURNAME"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-email"
            label="EMAIL"
            placeholder="First name"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-phone"
            label="PHONE"
            placeholder="Last name"
          />
        </Form.Group>
        <Button content="Primary" type="submit">
          Upload Avatar
        </Button>
        <Button content="Create hCard" primary />
      </Form>
    );
  }
}

export default InputForm;
