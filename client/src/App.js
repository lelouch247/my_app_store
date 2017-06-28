import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Apps from './components/Apps';
import FetchApps from './components/FetchApps';
import AppView from './components/AppView';
import AppForm from './components/AppForm';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apps" component={Apps} />
    <Route exact path="/apps/:id" component={AppView} />
    <Route path="/apps" component={FetchApps} />
    <Route exact path="/apps" component={AppForm} />
    <Route component={NoMatch} />
  </Switch>
)

export default App;
