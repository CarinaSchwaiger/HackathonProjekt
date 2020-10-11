import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Name from './Name';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import VideoComponent from './VideoComponent';
import FinalScreen from './FinalScreen';

const lektionen = [{name : 'Ich bin Anna',
                        url : process.env.PUBLIC_URL + '/anna.mp4'},
    {name : 'Ich bin ... und wohne in Pforzheim',
        url : process.env.PUBLIC_URL + '/pforzheim.mp4'},
    {name : 'Vielen Dank',
        url: process.env.PUBLIC_URL + '/danke.mp4'},
    {name: 'Willkommen',
        url: process.env.PUBLIC_URL + '/willkommen.mp4'}]

function App() {
  var counter = 0;

  const incrementCounter = () => {
    counter++
  }

  const resetCounter = () => {
    counter = 0;
  }
  return (
    <div className="App">
      <Router>
        <Switch>
  <Route exact path="/" render={(props) => { return <Dashboard onChange={resetCounter()} /> } }/>
      <Route path="/lernen" component={Name}/>
      { counter >= 4 && <Route path="/lektion" component={FinalScreen}/> }
      <Route path="/lektion" render={(props) => {
          return counter <= 3 ?  <VideoComponent videoUrl={lektionen[counter].url} word={lektionen[counter].name}
                               counter_img={counter} onChange={incrementCounter()}/> : <FinalScreen/>
      }
      }/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;