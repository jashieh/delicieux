import React from 'react';
import MainFilterDropdown from './main_filter_dropdown';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
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
      dairy: false,
      egg: false, 
      gluten: false, 
      peanut: false, 
      seafood: false, 
      shellfish: false, 
      soy: false, 
      sulfite: false, 
      wheat: false,
      maxCalories: 0,
      maxCarbs: 0,
      maxFat: 0,
      minProtein: 0,
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
            <Toggle className="toggle" defaultChecked={this.state.glutenFree} onChange={this.handleCheck("glutenFree")} />
            Gluten Free
          </label>
          <label className="filter-dd-item1" style={this.state.ketogenic ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.ketogenic} onChange={this.handleCheck("ketogenic")} />
            Ketogenic
          </label>
          <label className="filter-dd-item1" style={this.state.vegetarian? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.vegetarian} onChange={this.handleCheck("vegetarian")} />
            Vegetarian
          </label>
          <label className="filter-dd-item1" style={this.state.vegan ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.vegan} onChange={this.handleCheck("vegan")} />
            Vegan
          </label>
          <label className="filter-dd-item1" style={this.state.paleo ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.paleo} onChange={this.handleCheck("paleo")} />
            Paleo
          </label>
        </div>)
    } else if (this.state.tabs === 2) {
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
    } else if (this.state.tabs === 3) {
      return( 
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <label className="filter-dd-item1" style={this.state.dairy ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.dairy} onChange={this.handleCheck("dairy")} />
            Dairy
          </label> 
          <label className="filter-dd-item1" style={this.state.egg ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.egg} onChange={this.handleCheck("egg")} />
            Egg
          </label>
          <label className="filter-dd-item1" style={this.state.peanut ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.peanut} onChange={this.handleCheck("peanut")} />
            Peanut
          </label>
          <label className="filter-dd-item1" style={this.state.seafood ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.seafood} onChange={this.handleCheck("seafood")} />
            Seafood
          </label>
          <label className="filter-dd-item1" style={this.state.shellfish ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.shellfish} onChange={this.handleCheck("shellfish")} />
            Shellfish
          </label>
          <label className="filter-dd-item1" style={this.state.soy ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.soy} onChange={this.handleCheck("soy")} />
            Soy
          </label>
          <label className="filter-dd-item1" style={this.state.sulfite ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.sulfite} onChange={this.handleCheck("sulfite")} />
            Sulfite
          </label>
          <label className="filter-dd-item1" style={this.state.wheat ? { backgroundColor: "black" } : {}}>
            <Toggle className="toggle" defaultChecked={this.state.wheat} onChange={this.handleCheck("wheat")} />
            Wheat
          </label>
        </div>)
    } else if (this.state.tabs === 4) {
      return (
        <div className="filter-bot-allergies">
          <div class="filter-slider">
            Max Calories
            <input type="range" min="1" max="800" value={this.state.maxCalories} class="slider"/>
          </div>
          <div class="filter-slider">
            Max Fat
            <input type="range" min="1" max="100" value={this.state.maxFat} class="slider"/>
          </div>
          <div class="filter-slider">
            Max Carbs
            <input type="range" min="1" max="100" value={this.state.maxCarbs} class="slider"/>
          </div>
          <div class="filter-slider">
            Min Protein
            <input type="range" min="1" max="100" value={this.state.minProtein} class="slider"/>
          </div>
        </div>)
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
            <div onClick={this.handleTab(1)}>
              Diets
            </div>
            <div onClick={this.handleTab(2)}>
              Cuisines
            </div>
            <div onClick={this.handleTab(3)}>
              Allergies
            </div>
            <div onClick={this.handleTab(4)}>
              Nutrition
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