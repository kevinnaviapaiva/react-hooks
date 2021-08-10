import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Exercises } from '../Exercises';
import { Test } from '../Test';
import { Home } from '../Home';

export const Routes = ()=> {
  return (
    <Switch>
      <Route path="/exercises" component={Exercises}/>
      <Route path="/test" component={Test}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}
