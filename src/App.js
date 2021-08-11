import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ListItem, UnorderedList, StyledLink } from "./styled.js";
import AuthorPage from "./features/author/AuthorPage.js";
import TaskPage from "./features/tasks/TaskPage/index.js"
import TasksPage from "./features/tasks/TasksPage/index.js"

const App = () => (
    <HashRouter>
        <nav>
            <UnorderedList>
                <ListItem>
                    <StyledLink to="/zadania">Zadania</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/autor">O autorze</StyledLink>
                </ListItem>
            </UnorderedList>
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
        </nav>
    </HashRouter>
);

export default App;