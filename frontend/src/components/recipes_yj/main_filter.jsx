import React from 'react';
import MainFilterDropdown from './main_filter_dropdown';
import '../stylesheets/recipes_index/main_filter.scss';

export default class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientToggle: false,
      query: "",
      tabs: 0,
      cuisines: ["American", "Chinese", "French", "German", "Indian", "Italian", "Japanese", "Korean", "Mexican", "Thai"],
      allergies: ["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Shellfish", "Soy", "Sulfite", "Wheat"],
      cuisine: "",
      vegan: false,
      vegetarian: false,
      paleo: false,
      glutenFree: false,
      ketogenic: false,
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
    this.removeCuisine = this.removeCuisine.bind(this);
  }
  handleInput(e) {
    this.setState({ query: e.target.value });
  }
  handleTab(num) {
    return (e) => {
      this.setState({tabs: num})
    }
  }
  handleCheck(type) {
    return (e) => {
      this.setState({ [type]: !this.state[type] })
    }
  }
  handleCuisine(type) {
    return (e) => {
      this.setState({ cuisine: type.cuisine })
    }
  }
  removeCuisine(e) {
    e.stopPropagation();
    if (e.target.classList.value === "filter-bot-cuisine") {
      this.setState({cuisine: ""});
    }
  }
  // ["Gluten free", "Ketogenic", "Vegetarian", "Vegan", "Paleo"],
  renderTab() {
    if (this.state.tabs === 0) return null;
    else if (this.state.tabs === 1) {
      return (
        <div className="filter-bot-diet">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <label className="filter-dd-item1" style={this.state.glutenFree ? { backgroundColor: "black" } : {}}>
            <input type="checkbox" name="glutenFree" checked={this.state.glutenFree} onChange={this.handleCheck("glutenFree")} />
            Gluten Free
          </label>
          <label className="filter-dd-item1" style={this.state.ketogenic ? { backgroundColor: "black" } : {}}>
            <input type="checkbox" name="ketogenic" checked={this.state.ketogenic} onChange={this.handleCheck("ketogenic")} />
            Ketogenic
          </label>
          <label className="filter-dd-item1" style={this.state.vegetarian? { backgroundColor: "black" } : {}}>
            <input type="checkbox" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleCheck("vegetarian")} />
            Vegetarian
          </label>
          <label className="filter-dd-item1" style={this.state.vegan ? { backgroundColor: "black" } : {}}>
            <input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.handleCheck("vegan")} />
            Vegan
          </label>
          <label className="filter-dd-item1" style={this.state.paleo ? { backgroundColor: "black" } : {}}>
            <input type="checkbox" name="paleo" checked={this.state.paleo} onChange={this.handleCheck("paleo")} />
            Paleo
          </label>
        </div>
      )
    }
    else if (this.state.tabs === 2) {
      return (
        <div className="filter-bot-cuisine" onClick={this.removeCuisine}>
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          {this.state.cuisines.map((cuisine, idx) => {
            return (
            <div key={idx} 
              className="filter-dd-item2" 
              onClick={this.handleCuisine({cuisine})}
              style={ this.state.cuisine === cuisine ? {backgroundColor: "black" } : {}}>
              {cuisine}
            </div>)
          })}
        </div>);
    }
    else if (this.state.tabs === 3) {
      return( 
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <div>
            
          </div>
        </div>
      )
    } 
  }     
    
  render() {
    return(
      <div className="filter-cont">
        <div className="filter-top">
          <div className="filter-header">
            <h4 className="filter-h4">
              délicieux
          </h4>
            <div className="filter-text-cont">
              <input type="text"
                className="filter-text-input"
                placeholder="Find a recipe"
                onChange={this.handleInput}
                value={this.state.query}
                onKeyDown={this.handleKeyDown} />
              <div className="filter-text-button">
                Ingr
              </div>
            </div>
          </div>
          <div className="filter-param-cont">
            <div>
              <div onClick={this.handleTab(1)}>
                Diets
              </div>
            </div>
            <div>
              <div onClick={this.handleTab(2)}>
                Cuisines
              </div>
            </div>
            <div>
              <div onClick={this.handleTab(3)}>
                Allergies
              </div>
            </div>
            <div>
              <div onClick={this.handleTab(4)}>
                Nutrition
              </div>
            </div>
          </div>
        </div>
        {this.renderTab()}
      </div>
    );
  }
}
// cuisines: ["American", "Chinese", "French", "German", "Greek", "Indian", "Italian", "Japanese", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Thai", "Vietnamese"],
// diets: ["Gluten free", "Ketogenic", "Vegetarian", "Vegan", "Paleo"],
// nutrition: [
//   "maxCalorie"
//   "maxCarb"
//   "maxFat"
//   "minProtein"
// ]