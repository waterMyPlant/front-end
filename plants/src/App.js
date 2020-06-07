import React from 'react';
import './App.css';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import Header from './Components/header';
import plantFacts from './Components/plantFacts';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className='container'>
      <Header />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/' component={SignUp} />
      <PrivateRoute exact path='/facts' component={plantFacts} />
    </div>
  );
}

export default App;
