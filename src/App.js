import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Name from './Name';
import {HashRouter, Route, Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  const [page, setPage] = React.useState(0);

  const nextPage = () => {
    setPage(page + 1);
  }
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/lernen" component={Name}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
