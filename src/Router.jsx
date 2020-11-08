import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Toppage, StudyingState } from './templates/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Toppage} />
        <Route exact path={"/usestate"} component={StudyingState} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router
