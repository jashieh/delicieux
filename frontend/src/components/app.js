import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipeShowContainer from './recipes_yj/recipe_show';
import Modal from './modal/modal';
import Side from './modal/side';
import MainPage from './main/main';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';

import MainFilterContainer from './recipes_yj/main_filter_container';
import SummaryContainer from './index_page/summary';
import FridgeContainer from './fridge/fridge_container';
import RecipeIndexContainer from './recipe_index/recipe_index_container';
import MainIndexContainer from './main_index/main_index_container';
import UserProfileContainer from './profile/user_profile_container';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Side />
    <Modal />
    <Switch>
      <Route exact path="/recipeshow" component={RecipeShowContainer} />
      <Route exact path="/fridge" component={FridgeContainer} />
      <Route exact path="/filter" component={MainFilterContainer}/>
      <Route exact path="/" component={ MainPage } />
      <AuthRoute exact path="/signup" component={ UserForm } />
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <ProtectedRoute exact path="/summary" component={SummaryContainer} />
      <ProtectedRoute exact path="/index" component={MainIndexContainer} />
      <ProtectedRoute exact path="/profile/" component={UserProfileContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-uiy