import React, { Component } from "react";
import "./BusinessCard.scss";
import BusinessCardTextGroup from "../common/BusinessCardTextGroup";
import { Grid, Divider, Card, Icon, Container } from "semantic-ui-react";
import CardPreviewTextGroup from "../common/CardPreviewTextGroup";

class BusinessCard extends Component {
  render() {
    return (
      <Container>
        <section className="business-card">
          <h4 className="text-preview">HCARD PREVIEW</h4>
          <div className="whole-card">
            <div className="name">
              <h2>Arthur Truong</h2>
            </div>
          </div>
        </section>
        <section className="business-input">
          <div className="whole-body">
            <Container className="name-input">
              <Grid columns={1} divided>
                <Grid.Row>
                  <Grid.Column>
                    <h4>NAME</h4>
                    <Divider />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h4>NAME</h4>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h4>NAME</h4>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        </section>
      </Container>
    );
  }
}

export default BusinessCard;
