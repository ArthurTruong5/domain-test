import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import InputForm from "../form/InputForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <InputForm />
            </Grid.Column>
            <Grid.Column width={8}>test</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
