import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Toppage, StudyingUseState, StudyingUseEffect, StudyingUseRef, StudyingReactMemo, Navbar } from './templates/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Toppage} />
        <Route exact path={"/usestate"} component={StudyingUseState} />
        <Route exact path={"/useeffect"} component={StudyingUseEffect} />
        <Route exact path={"/useref"} component={StudyingUseRef} />
        <Route exact path={"/reactmemo"} component={StudyingReactMemo} />

      </Switch>
    </BrowserRouter>
  )
};

export default Router