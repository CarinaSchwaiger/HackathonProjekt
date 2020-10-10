import React from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from '../node_modules/react-router-dom';
  import Component from './Component';
import Name from './Name.js';

export default function Router() {

    return(<BrowserRouter>
        <div>
        <Link to="/Name">Name</Link>{' '}
        <Route path="/Name" component={Name} />
        <Link to ="/index">Component</Link>
        <Route path ="/index" component={Component} />
          
      </div>
    </BrowserRouter>)
}

