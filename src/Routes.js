import React from "react";
import {Switch, Route} from "react-router-dom";
import Game from "./containers/Game";

export default () =>
  <Switch>
    <Route path="/" exact component={Game}/>
  </Switch>
