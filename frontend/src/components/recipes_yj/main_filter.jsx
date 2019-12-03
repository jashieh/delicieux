import React from 'react';
import MainFilterDropdown from './main_filter_dropdown';
import Toggle from 'react-toggle';
// import "react-toggle/style.css";
import '../stylesheets/recipes_index/main_filter.scss';
import '../stylesheets/recipes_index/toggle.scss';
import Loupe from '../stylesheets/assets/loupe-2.png';
import Ingredient from '../stylesheets/assets/harvest-two.png'

export default class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientToggle: false,
      query: "",
      ingredientQuery: "",
      ingredientList: [],
      includeFridge: true,
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
    this.addIngredient = this.addIngredient.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
    this.removeCuisine = this.removeCuisine.bind(this);
    this.toggleIngredients = this.toggleIngredients.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchFridge(this.props.userId);

    let input = document.getElementsByClassName("filter-text-input")[0];

    this.enterEvent = event => {
      event.stopPropagation();
      if (event.keyCode === 13)
        this.handleQuerySubmit();
    }

    input.addEventListener("keydown", this.enterEvent);
  }

  componentWillUnmount() {
    let input = document.getElementsByClassName("filter-text-input")[0];
    input.removeEventListener("keydown", this.enterEvent);
  }
  addIngredient() {
    let x = this.state.ingredientList;
    x.push(this.state.ingredientQuery.trim());
    this.setState({ingredientList: x}, ()=> {
      this.setState({ingredientQuery: ""})
    })
  }
  handleInput(type) {
    return (e)=>{
      this.setState({ [type]: e.target.value });
    }
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
  handleQuerySubmit() {
    let diet = [];
    if (this.state.vegan) diet.push("vegan");
    if (this.state.vegetarian) diet.push("vegetarian");
    if (this.state.paleo) diet.push("paleo");
    if (this.state.glutenFree) diet.push("gluten free");
    if (this.state.ketogenic ) diet.push("ketogenic");

    let intolerances = [];
    if (this.state.dairy) intolerances.push("dairy");
    if (this.state.egg) intolerances.push("egg"); 
    if (this.state.peanut) intolerances.push("peanut"); 
    if (this.state.seafood) intolerances.push("seafood"); 
    if (this.state.shellfish) intolerances.push("shellfish"); 
    if (this.state.soy) intolerances.push("soy"); 
    if (this.state.sulfite) intolerances.push("sulfite"); 
    if (this.state.wheat) intolerances.push("wheat");
    this.props.startLoad("loading")
    this.props.complexRecipeSearch({
      search: this.state.query, 
      cuisine: this.state.cuisine, 
      diet,  
      intolerances,
      maxCalories: this.state.maxCalories, 
      maxFat: this.state.maxFat, 
      maxCarbs: this.state.maxCarbs, 
      minProtein: this.state.minProtein
    })
    this.setState({tabs: 0});
  }
  handleIngredientSubmit() {
    let fridgeContent = [];
    if (this.props.fridge.ingredients) {
      fridgeContent = Object.values(this.props.fridge.ingredients).map((item) => {
        return item.name
      });
    }
    const ingredientList = this.state.includeFridge ? this.state.ingredientList.concat(fridgeContent) : this.state.ingredientList;
    this.props.startLoad("loading")
    this.props.getRecipesByIngredients(ingredientList)
    this.setState({ tabs: 0 });
  }

  handleSlider(type) {
    const maxc = 800;
    const maxn = 100;
    return (e) => { 
      if (type === "maxCalories") {
        if (parseInt(e.target.value) > maxc) e.target.value = maxc.toString()
      }
      else {
        if (parseInt(e.target.value) > maxn) e.target.value = maxn.toString()
      }
      this.setState({ [type]: e.target.value })
    }
  }
  toggleIngredients() {
    this.setState({ingredientToggle: !this.state.ingredientToggle});
  }
  removeCuisine(e) {
    e.stopPropagation();
    if (e.target.classList.value === "filter-bot-cuisine") {
      this.setState({cuisine: ""});
    }
  }
  removeIngredient(idx) {
    return () => {
      let x = this.state.ingredientList;
      x.splice(idx.idx, 1);
      this.setState({ingredientList: x});
    }
  }
  renderIngredients() {
    if (!this.state.ingredientList) return null;
    return this.state.ingredientList.map((ingredient, idx) => {
      return (
      <div key={idx} className="filter-ing-item">
        <span className="filter-x" onClick={this.removeIngredient({idx})}>&times;</span>
        {ingredient} {idx}
      </div>)
    })
  }

  renderTab() {
    if (this.state.tabs === 0) return null;
    else if (this.state.tabs === 1) {
      return (
        <div className="filter-bot-diet">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <label className="filter-dd-item1">
            <input type="checkbox" name="glutenFree" checked={this.state.glutenFree} onChange={this.handleCheck("glutenFree")} />
              Gluten Free
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="ketogenic" checked={this.state.ketogenic} onChange={this.handleCheck("ketogenic")} />
              Ketogenic
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleCheck("vegetarian")} />
              Vegetarian
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.handleCheck("vegan")} />
              Vegan
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="paleo" checked={this.state.paleo} onChange={this.handleCheck("paleo")} />
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
              onClick={this.handleCuisine({cuisine})}>
              {/* style={ this.state.cuisine === cuisine ? {backgroundColor: "black" } : {}}> */}
              {cuisine}
            </div>)
          })}
        </div>);
    } else if (this.state.tabs === 3) {
      return( 
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="dairy" checked={this.state.dairy} onChange={this.handleCheck("dairy")} />
                Dairy
          </label> 
          <label className="filter-dd-item1" >
            <input type="checkbox" name="egg" checked={this.state.egg} onChange={this.handleCheck("egg")} />
                  Egg
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="peanut" checked={this.state.peanut} onChange={this.handleCheck("peanut")} />
                  Peanut
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="seafood" checked={this.state.seafood} onChange={this.handleCheck("seafood")} />
                  Seafood
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="shellfish" checked={this.state.shellfish} onChange={this.handleCheck("shellfish")} />
                  Shellfish
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="soy" checked={this.state.soy} onChange={this.handleCheck("soy")} />
                  Soy
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="sulfite" checked={this.state.sulfite} onChange={this.handleCheck("sulfite")} />
                  Sulfite
          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="wheat" checked={this.state.wheat} onChange={this.handleCheck("wheat")} />
                  Wheat
          </label>
        </div>)
    } else if (this.state.tabs === 4) {
      return (
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <div className="filter-slider">
            <div>Max Calories [ 0 - 800 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="800" value={this.state.maxCalories} onChange={this.handleSlider("maxCalories")}/>
            </div>
            <input className="slide"  type="number" min="0" max="800" maxength="3" value={this.state.maxCalories} onChange={this.handleSlider("maxCalories")} />
          </div>
          <div className="filter-slider">
            <div>Max Fat [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" value={this.state.maxFat} onChange={this.handleSlider("maxFat")}/>
            </div>
            <input className="slide"  type="number" min="0" max="100" maxLength="3" value={this.state.maxFat} onChange={this.handleSlider("maxFat")} />
          </div>
          <div className="filter-slider">
            <div>Max Carbs [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" value={this.state.maxCarbs} onChange={this.handleSlider("maxCarbs")}/>
            </div>
            <input className="slide" type="number" min="0" max="100" maxLength="3" value={this.state.maxCarbs} onChange={this.handleSlider("maxCarbs")} />
          </div>
          <div className="filter-slider">
            <div>Min Protein [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" value={this.state.minProtein} onChange={this.handleSlider("minProtein")}/>
            </div>
            <input className="slide" type="number" min="0" max="100" pattern="\d" maxLength="3" value={this.state.minProtein} onChange={this.handleSlider("minProtein")} />
          </div>

        </div>)
    }
  }     
  render() {
   
    return(
      <div >
      {this.state.ingredientToggle ? (
        <form className="filter-cont">
          <span className="filter-x" onClick={this.toggleIngredients}>&times;</span>
          <div className="filter-top">
          <div className="filter-header">
            <div className="filter-text-cont">
              <input type="text"
              className="filter-text-input"
              placeholder="Ingredients"
              onChange={this.handleInput("ingredientQuery")}
              value={this.state.ingredientQuery}/>
              <button type="submit" className="filter-query-search" disabled={!this.state.ingredientQuery} onClick={this.addIngredient}>+</button>
              <div className="filter-query-search" onClick={this.handleIngredientSubmit} >
                  <img src={Loupe} alt=""/>
          
              </div>
              {/* <input type="submit" value="Search" className="filter-text-button"/> */}
              {/* <input type="submit" value="Search" className="filter-text-button"/>
              <label className="filter-dd-item1" style={this.state.glutenFree ? { backgroundColor: "black" } : {}}>
                  <input type="checkbox" name="includFridge" checked={this.state.includFridge} onChange={this.handleCheck("includFridge")} />
                  Include Fridge
              </label>   */}

            </div>
          </div>
            <div className="filter-param-cont fridge-add">
                <label className="filter-dd-item1" style={this.state.glutenFree ? { backgroundColor: "black" } : {}}>
                    <Toggle className="toggle" defaultChecked={this.state.includeFridge} onChange={this.handleCheck("includeFridge")} />
                    <p>Include Fridge</p>
                </label>  
            </div>
          </div>
          <div className="filter-bot-allergies">
            {this.renderIngredients()}

          </div>
        </form>
        ) : (
      <form className="filter-cont">
        <div className="filter-top">
          <div className="filter-header">
            <div className="filter-text-cont">
              <input type="text"
                className="filter-text-input"
                placeholder="Find a recipe"
                onChange={this.handleInput("query")}
                value={this.state.query}/>
                <div className="filter-query-search" onClick={this.handleQuerySubmit} >
                  <img src={Loupe} alt=""/>
                  {/* <input type="submit" className="filter-query-search" value=""/> */}
                </div>
            </div>
            <div className="filter-text-button" onClick={this.toggleIngredients}>
               <img src={Ingredient} alt="" className="ingredient-search-img"/>
               <span className="toggle-span">Ingredient Search</span>
            </div>
          </div>
          <div className="filter-param-cont">
            <div className="filter-text" onClick={this.handleTab(1)} style={this.state.tabs === 1 ? { backgroundColor: "inherit", color: "black" } : {}}>
              Diets
            </div>
            <div  className="filter-text" onClick={this.handleTab(2)} style={this.state.tabs === 2  ? { backgroundColor: "inherit", color: "black" } : {}}>
              Cuisines
            </div>
            <div  className="filter-text" onClick={this.handleTab(3)} style={this.state.tabs === 3  ? { backgroundColor: "inherit", color: "black" } : {}}>
              Allergies
            </div>
            <div  className="filter-text" onClick={this.handleTab(4)} style={this.state.tabs === 4 ? { backgroundColor: "inherit", color: "black" } : {}}>
              Nutrition
            </div>
          </div>
        </div>
        {this.renderTab()} 
      </form>
        )}
      </div>
    );
  }
}



