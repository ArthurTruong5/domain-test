import React from "react";
import "./BusinessCard.scss";
import BusinessCardTextGroup from "../common/BusinessCardTextGroup";
import { Grid, Divider, Card, Icon, Container } from "semantic-ui-react";
import CardPreviewTextGroup from "../common/CardPreviewTextGroup";
import InputForm from "../form/InputForm";

function BusinessCard(props) {
  console.log(props.givenName);
  console.log(props.lastName);
  return (
    <Container className="business-container">
      <section className="business-card">
        <h4 className="text-preview">HCARD PREVIEW</h4>
        <figure className="photo-image">
          <img src={require("../../img/photo.png")} className="photo-image" />
        </figure>
        <div className="whole-card">
          <Grid reversed="computer tablet" columns="equal">
            <Grid.Row>
              <Grid.Column className="input-text">
                <div className="name">
                  <h2>
                    {props.givenName} {props.lastName}
                  </h2>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
      <section className="business-input">
        <div className="whole-body">
          <Container className="name-input">
            <br />
            <Grid columns={1} divided>
              <Grid.Row>
                <Grid.Column className="input-text">
                  <h4>NAME</h4>
                  <p>{props.email}</p>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="input-text">
                  <h4>PHONE</h4>
                  <p>{props.phone}</p>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column className="input-text">
                  <h4>ADDRESS</h4>
                  <p>
                    {props.houseOrNumber} {props.street}
                  </p>
                  <Divider />
                </Grid.Column>
                <Grid.Column className="input-text">
                  <p>
                    {props.suburb} {props.state}
                  </p>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid reversed="computer tablet" columns="equal">
              <Grid.Row>
                <Grid.Column className="input-text">
                  <h4>COUNTRY</h4>
                  <p>{props.country}</p>
                  <Divider />
                </Grid.Column>
                <Grid.Column className="input-text">
                  <h4>POSTCODE</h4>
                  <p>{props.postCode}</p>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </section>
    </Container>
  );
}

export default BusinessCard;
