import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import IngredientsList from '../cart/cart_container';
import RecipeIndexContainer from '../recipe_index/recipe_index_container'
import MainFilterContainer from '../recipes_yj/main_filter_container';
class MainIndex extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
      this.props.fetchFridge(this.props.userId);
      this.props.fetchUser(this.props.userId);
    }
    render () {
      const { fridge } = this.props;
        return (
          <div className="contain-all">
            <div className="top">
              <NavBarContainer />
            </div>
           
            <div className="right-left-contain">
              <div className="left">
                <div className="left-contain">
                    <MainFilterContainer fridge={fridge}/>
                  <div className="left-recipe-contain">
                    <div className="boxes-contain">
                      <RecipeIndexContainer fridge={fridge}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-contain">
                  <div className="ingredient-contain">
                    <IngredientsList fridge={fridge}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MainIndex;