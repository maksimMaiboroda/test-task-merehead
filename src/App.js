import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

import classes from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
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
              <Switch>
                <Route
                  exact
                  path="/create-user"
                  component={CreateUserContainer}
                  className={classes.content}
                />
                <Route
                  path="/"
                  component={UsersContainer}
                  className={classes.content}
                />

                <Route
                  path="/users"
                  component={UsersContainer}
                  className={classes.content}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
