import React from "react";
import {Route, Switch} from "react-router-dom";
import {EventDetail} from "../eventDetail/eventDetail";
import {EventList} from "../eventList/eventList";
import {Contact} from "../contact/contact";
import {Store} from "../store/store";

const Main = () => (
    <Switch>
        <Route exact path="/" component={EventList} />
        <Route exact path="/eventDetail" component={EventDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/store" component={Store} />
    </Switch>
);

export default Main;
