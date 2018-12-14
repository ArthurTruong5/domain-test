import React, { Component } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import Header from "../common/Header";
import DividerTextGroup from "../common/DividerTextGroup";
import "./inputForm.scss";

class InputForm extends Component {
  render() {
    return (
      <section className="input-field">
        <Header />
        <DividerTextGroup name="Personal Details" />
        <Form className="inputForm">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="GIVEN NAME"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="SURNAME"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="EMAIL"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-phone"
              label="PHONE"
            />
          </Form.Group>
          <DividerTextGroup name="Address" />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-houseornumber"
              label="HOUSE NAME OR #"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-street"
              label="STREET"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-suburb"
              label="SUBURB"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-state"
              label="STATE"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-postcode"
              label="POSTCODE"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-country"
              label="COUNTRY"
            />
          </Form.Group>
          <Button content="Primary" type="submit">
            Upload Avatar
          </Button>
          <Button content="Create hCard" primary />
        </Form>
      </section>
    );
  }
}

export default InputForm;
