import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

import classes from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import CreateUserContainer from "./components/CreateUser/CreateUserContainer"; 

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header className={classes.header} />
      <Container maxWidth="lg">
        <div className={classes.page}>
          <Navbar className={classes.navbar} />
          <div className={classes.wrapper}>
            <div className={classes.contentWrapper}>
              <Route
                path="/create-user"
                component={CreateUserContainer}
                className={classes.content}
              />
              <Route
                path="/users"
                component={UsersContainer}
                className={classes.content}
              />
            </div>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
