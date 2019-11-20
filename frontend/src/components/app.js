import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import Modal from './modal/modal';
import Side from './modal/side';
import MainPage from './main/main';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';
import RecipeIndexContainer from './recipe_index/recipe_index_container';
import MainIndex from './main_index/main_index';
import UserProfileContainer from './profile/user_profile_container';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Side />

    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/signup" component={UserForm} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/recipes" component={RecipeIndexContainer} />
      <Route exact path="/index" component={MainIndex} />
      <ProtectedRoute exact path="/profile/:id" component={UserProfileContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-ui