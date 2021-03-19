import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';
import {Welcome} from "./components/Welcome/Welcome";
import {UniverseEng} from "./components/UniverseEng/UniverseEng";

function App() {
  return (
    <div>
      <Route exact path='/'
             render={() => <Welcome/>}/>
      <Route path='/universeeng/home'
             render={() => <UniverseEng/>}/>
      <Route path='/universeeng/contactus'
             render={() => <UniverseEng/>}/>

    </div>
  );
}

export default App;
