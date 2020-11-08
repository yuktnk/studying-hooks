import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Toppage, StudyingUseState, StudyingUseEffect } from './templates/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Toppage} />
        <Route exact path={"/usestate"} component={StudyingUseState} />
        <Route exact path={"/useeffect"} component={StudyingUseEffect} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router
