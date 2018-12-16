import React, { Component } from "react";
import { Button, Checkbox, Form, Container, Grid } from "semantic-ui-react";
import Header from "../common/Header";
import DividerTextGroup from "../common/DividerTextGroup";
import PropTypes from "prop-types"; // ES6
import BusinessCard from "../card/BusinessCard";
import FormField from "./FormField";
import "./InputForm.scss";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      givenName: "",
      lastName: "",
      email: "",
      phone: "",
      houseOrNumber: "",
      street: "",
      suburb: "",
      state: "",
      postCode: "",
      country: ""
    };
  }

  handleChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    return (
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <section className="input-field">
              <Header />
              <DividerTextGroup name="Personal Details" />
              <Form className="inputForm">
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    id="giveName"
                    label="GIVEN NAME"
                    value={this.props.givenName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    id="lastName"
                    label="LAST NAME"
                    value={this.props.lastName}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    id="email"
                    label="EMAIL"
                    value={this.props.email}
                    onChange={this.handleChange}
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
          </Grid.Column>
          <Grid.Column className="background-color" width={8}>
            <BusinessCard
              givenName={this.state.givenName}
              lastName={this.state.lastName}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

InputForm.propTypes = {
  inpurValue: PropTypes.string.isRequired
};

export default InputForm;
