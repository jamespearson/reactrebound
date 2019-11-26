import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';

const HomePage = () => {
  return (
    <div>
      <h1>ReactRebound - Coming Soon</h1>
    </div>
  )
}

export default () => (
  <App>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </App>
);
