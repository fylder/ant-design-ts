import * as React from 'react';
import Pager from "./layout/Pager";
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <HashRouter children={(
        <Switch>
          <Route path="/" component={Pager} />
        </Switch>)} />
    );
  }
}

export default App;
