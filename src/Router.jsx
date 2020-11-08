import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Toppage, StudyingUseState, StudyingUseEffect, Cleanup, Navbar } from './templates/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Toppage} />
        <Route exact path={"/usestate"} component={StudyingUseState} />
        <Route exact path={"/useeffect"} component={StudyingUseEffect} />
        <Route exact path={"/useeffect2"} component={Cleanup} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router
