import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipeShowContainer from './recipes_yj/recipe_show';
import Modal from './modal/modal';
import Side from './modal/side';
import MainPage from './main/main_container';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';

import FridgeContainer from './fridge/fridge_container';
import MainIndexContainer from './main_index/main_index_container';
import WeeklyCartContainer from './cart_weekly/weekly_cart_container';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Side />
    <Modal />
    <Switch>
      <Route exact path="/recipeshow" component={RecipeShowContainer} />
      <Route exact path="/" component={ MainPage } />
      <AuthRoute exact path="/signup" component={ UserForm } />
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <ProtectedRoute exact path="/fridge" component={FridgeContainer} />
      <ProtectedRoute exact path="/index" component={ MainIndexContainer } />
      <ProtectedRoute exact path="/weeklyCart" component={ WeeklyCartContainer }/>

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-uiy