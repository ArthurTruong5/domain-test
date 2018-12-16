import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import InputForm from "./components/form/InputForm";
import BusinessCard from "./components/card/BusinessCard";
import { Grid, Image, Container, Segment } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InputForm />
      </Provider>
    );
  }
}

export default App;
