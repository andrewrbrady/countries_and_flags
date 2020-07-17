import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Header from "./Header";
import PortfolioItems from "./PortfolioItems";
import LoadMoreButton from "./LoadMoreButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <div className="container">
          <PortfolioItems />
        </div>
      </Container>
    </div>
  );
}

export default App;
