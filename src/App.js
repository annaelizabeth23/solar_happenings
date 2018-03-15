import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Solar_search from './components/Solar_search';
import Picture from './components/Picture';
import Horizontal from './components/Horizontal';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
        <div className="app">
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise" rel="stylesheet" />
          <div className="centered-page">
            <header className="app-header">
              <div className="primary-header">
              <h1>Solar Happenings</h1>
              <h3 className="sub-header">An Online Sunset/Sunrise Journal</h3>
              </div>
            </header>
            <main>
              <p>
                
              </p>
            <Picture />
            <Solar_search />
            <Horizontal />
            <p className="thank-you">The sunrise/sunset times API provided by <a href="https://sunrise-sunset.org/">Sunrise Sunset</a></p>
            </main>
          </div>
        </div> 
      
    );
  }
}

export default App;