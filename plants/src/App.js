import React from 'react';
import './App.css';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import Header from './Components/header';
import plantFacts from './Components/plantFacts';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PlantInfo from './Components/plantInfo';

function App(props) {
  return (
    <div className='container'>
      <Header />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/' component={SignUp} />
      <PrivateRoute exact path='/facts' component={plantFacts} />
      <Route exact path='/plants' component={PlantInfo} />
    </div>
  );
}

export default App;
