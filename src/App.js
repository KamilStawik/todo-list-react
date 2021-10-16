import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation"
import AuthorPage from "./features/author/AuthorPage.js";
import TaskPage from "./features/tasks/TaskPage/index.js"
import TasksPage from "./features/tasks/TasksPage/index.js"

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route exact path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="zadania" />
            </Route>
        </Switch>

    </HashRouter>
);

export default App;