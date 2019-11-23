import React from 'react';
import { Link } from "react-router-dom";
import NavBarContainer from '../nav/navbar_container';
// import RecipeIndexContainer from '../recipe_index/recipe_index_container';
import IngredientIndex from './ingredient/ingredient_index';
import IngredientsList from '../cart/cart_container';
import RecipeIndexContainer from '../recipe_index/recipe_index_container'
import MainFilterContainer from '../recipes_yj/main_filter_container';
class MainIndex extends React.Component {

    constructor(props) {
        super(props);

    }
    render () {
        return (
          <div className="contain-all">
            <div className="top">
              <NavBarContainer />
            </div>
           <MainFilterContainer />
            <div className="right-left-contain">
              <div className="left">
                <div className="left-contain">
                  {/* <div className="left-ingredients">
                    <IngredientIndex />
                    <div>
                      <nav>
                        <ul>
                          <h2>Sweets</h2>
                          <li>Chocolate</li>
                          <li>Chocolate</li>
                          <li>Chocolate</li>
                          <li>Chocolate</li>
                          <li>Chocolate</li>
                        </ul>

                        <ul>
                          <h2>Fruits</h2>
                          <li>Apple</li>
                          <li>Apple</li>
                          <li>Apple</li>
                          <li>Apple</li>
                          <li>Apple</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <input type="checkbox" id="menuToggle"></input>
                  <label for="menuToggle" className="menu-icon">
                    Hi
                  </label>
                  <div className="menu"></div> */}
                  <div className="left-filter">Filters</div>

                  <div className="left-recipe-contain">
                    <div className="boxes-contain">
                      <RecipeIndexContainer />
                      {/* <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a>
                      <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a>
                      <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a>
                      <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a>
                      <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a>
                      <a href="#">
                        <div className="index-boxlink-square">
                          <h3>Recipe Index</h3>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-contain">
                  <div className="ingredient-contain">
                    <IngredientsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MainIndex;