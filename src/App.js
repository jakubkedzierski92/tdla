import React from "react";
import TasksPage from "./features/TasksPage";
import TaskPage  from "./TaskPage.js";
import Author from "./features/Author";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">o autorze</Link>
        </li>
      </ul>
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
            <Redirect to ="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
