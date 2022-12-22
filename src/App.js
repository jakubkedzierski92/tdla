import React from "react";
import TasksPage from "./features/TasksPage";
import TaskPage from "./TaskPage.js";
import Author from "./features/Author";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./features/Navigation";

export const App = () => (
  <HashRouter>
    <Navigation />
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
  </HashRouter>
);
