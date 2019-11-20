import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipeShowContainer from './recipes_yj/recipe_show';
import Modal from './modal/modal';
import MainPage from './main/main';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/recipeshow" component={RecipeShowContainer} />
      <Route exact path="/" component={ MainPage } />
      <AuthRoute exact path="/signup" component={ UserForm } />
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-ui