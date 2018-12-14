import React, { Component } from "react";
import { Grid, Image, Container, Segment } from "semantic-ui-react";
import InputForm from "../form/InputForm";
import BusinessCard from "../card/BusinessCard";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <InputForm />
            </Grid.Column>
            <Grid.Column className="background-color" width={8}>
              <BusinessCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
