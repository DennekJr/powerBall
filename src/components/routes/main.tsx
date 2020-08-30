import React from "react";
import {Route, Switch} from "react-router-dom";
import {EventDetail} from "../eventDetail/eventDetail";
import {EventList} from "../eventList/eventList";

const Main = () => (
    <Switch>
        <Route exact path="/eventList" component={EventList} />
        <Route exact path="/eventDetail" component={EventDetail} />
    </Switch>
);

export default Main;
