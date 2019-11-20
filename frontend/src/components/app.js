import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import RecipeShowContainer from './recipes_yj/recipe_show';
import Modal from './modal/modal';
import MainPage from './main/main';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';
import SummaryContainer from './index_page/summary';
import FridgeContainer from './fridge/fridge_container';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/recipeshow" component={RecipeShowContainer} />
      <Route exact path="/fridge" component={FridgeContainer} />



      <Route exact path="/" component={ MainPage } />
      <AuthRoute exact path="/signup" component={ UserForm } />
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <Route exact path="/summary" component={SummaryContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-uiy