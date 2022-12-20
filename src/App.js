import React from "react";
import TasksPage from "./features/TasksPage";
import TaskPage from "./TaskPage.js";
import Author from "./features/Author";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { StyledItem, StyledNavigation, StyledNavLink } from "./styled";

export const App = () => (
  <HashRouter>
    <nav>
        <StyledNavigation>
          <StyledItem>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </StyledItem>
          <StyledItem>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </StyledItem>
        </StyledNavigation>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <TasksPage />
          </Route>
          <Route path="/autor">
            <Author />
          </Route>
          <Route path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
    </nav>
  </HashRouter>
);
