import React, { Component } from "react";
import "./BusinessCard.scss";
import BusinessCardTextGroup from "../common/BusinessCardTextGroup";
import { Grid, Divider, Card, Icon } from "semantic-ui-react";

class BusinessCard extends Component {
  render() {
    return (
      <section className="business-card">
        <h4 className="text-preview">HCARD PREVIEW</h4>
        <div className="whole-card">
          <div className="name">
            <h2>Arthur Truong</h2>
          </div>
        </div>
        <div className="card-form">
          <div className="card-fill">
            <h4 className="card-text">EMAIL:</h4>
            <div className="card-divider">
              <hr />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BusinessCard;
