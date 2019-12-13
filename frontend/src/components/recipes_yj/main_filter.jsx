import React from 'react';
import Loupe from '../stylesheets/assets/loupe-2.png';
import Ingredient from '../stylesheets/assets/ginkgo.png';
import FilterSearchContainer from './filter_search_container';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  addIngredient(search) {
    let x = this.state.ingredientList;
    if (!x.join("").includes(search.trim())) {
      x.push(search.trim());
      this.setState({ ingredientList: x }, () => {
        this.setState({ ingredientQuery: "" })
      })
    } else {
      this.setState({ ingredientQuery: "" });
    }
    
  }
  handleInput(type) {
    return (e)=>{
      this.setState({ [type]: e.target.value });
    }
  }
  handleTab(num) {
    return (e) => {
      // this.setState({ tabs: num });
      this.state.tabs !== num ? this.setState({ tabs: num }) : this.setState({ tabs: 0 });
    }
  }
  handleCheck(type) {
    return (e) => {
      this.setState({ [type]: !this.state[type] })
    }
  }
  handleCuisine(type) {
    if(this.state.cuisine === type.cuisine) {
      return (e) => {
        this.setState({ cuisine: "" })
      }
    }
    return (e) => {
      this.setState({ cuisine: type.cuisine })
    }
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      this.handleQuerySubmit();
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
    if (intolerances.length || diet.length || this.state.query || this.state.cuisine || this.state.maxCalories 
      || this.state.maxFat || this.state.maxCarbs || this.state.minProtein) {
      this.props.startLoad("loading");

      setTimeout(() => {
        if(this.props.loading)
          this.props.startLoad("failed")
      }, 10000);
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
      // this.setState({ tabs: 0 });
    }
    
  }
  handleIngredientSubmit() {
    let fridgeContent = [];
    if (this.props.fridge.ingredients) {
      fridgeContent = Object.values(this.props.fridge.ingredients).map((item) => {
        return item.name
      });
    }
    const ingredientList = this.state.includeFridge ? this.state.ingredientList.concat(fridgeContent) : this.state.ingredientList;

    if (ingredientList.length) {
      this.props.startLoad("loading");
      setTimeout(() => {
        if(this.props.loading)
        this.props.startLoad("failed")
      }, 10000)
      this.props.getRecipesByIngredients(ingredientList, 12);
      // this.setState({ tabs: 0, ingredientToggle: false });
    }
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
        {ingredient}
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
            <input type="checkbox" name="glutenFree" 
              className="filter-checkbox"
              checked={this.state.glutenFree} 
              onChange={this.handleCheck("glutenFree")}/>

              <span className="filter-diet-name">
                Gluten Free
              </span>
              {/* <div className="filter-checkmark-cont">
                <img className="filter-checkmark" src={ThickCheck}/>
              </div> */}

          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="ketogenic" 
              className="filter-checkbox"
              checked={this.state.ketogenic} 
              onChange={this.handleCheck("ketogenic")}/>
              <span className="filter-diet-name">
                Ketogenic
              </span>
          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="vegetarian" 
              className="filter-checkbox"
              checked={this.state.vegetarian} 
              onChange={this.handleCheck("vegetarian")}/>
              <span className="filter-diet-name">
                Vegetarian
              </span>
          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="vegan" 
              className="filter-checkbox"
              checked={this.state.vegan} 
              onChange={this.handleCheck("vegan")}/>
              <span className="filter-diet-name">
                Vegan
              </span>
          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="paleo" 
              className="filter-checkbox"
              checked={this.state.paleo} 
              onChange={this.handleCheck("paleo")}/>
              <span className="filter-diet-name">
                Paleo
              </span>
              {this.state.paleo }
          </label>
        </div>)
    } else if (this.state.tabs === 2) {
      return (
        <div className="filter-bot-cuisine" onClick={this.removeCuisine}>
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          {this.state.cuisines.map((cuisine, idx) => {
            return (
            <div key={idx} 
              className="filter-dd-item1" 
              onClick={this.handleCuisine({cuisine})}>
              <input type="radio" name="drone" className="filter-checkbox"
                checked={this.state.cuisine === cuisine} onChange={()=>{}}/>
              <div className="filter-diet-name">
                {cuisine}
              </div>
            </div>)
          })}
        </div>);
    } else if (this.state.tabs === 3) {
      return( 
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <label className="filter-dd-item1">
            <input type="checkbox" name="dairy" 
              checked={this.state.dairy}
              className="filter-checkbox" 
              onChange={this.handleCheck("dairy")} />

              <span className="filter-diet-name">
                Dairy
              </span>
          </label> 
          <label className="filter-dd-item1">
            <input type="checkbox" name="egg" 
              checked={this.state.egg} 
              className="filter-checkbox"
              onChange={this.handleCheck("egg")} />

              <span className="filter-diet-name">
                Egg
              </span>

          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="peanut" 
              checked={this.state.peanut} 
              className="filter-checkbox"
              onChange={this.handleCheck("peanut")} />

              <span className="filter-diet-name">
                Peanut
              </span>

          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="seafood" 
              checked={this.state.seafood} 
              className="filter-checkbox"
              onChange={this.handleCheck("seafood")} />

              <span className="filter-diet-name">
                Seafood
              </span>

          </label>
          <label className="filter-dd-item1" >
            <input type="checkbox" name="shellfish" 
              checked={this.state.shellfish} 
              className="filter-checkbox"
              onChange={this.handleCheck("shellfish")} />

              <span className="filter-diet-name">
                Shellfish
              </span>

          </label>
          <label className="filter-dd-item1">
            <input type="checkbox" name="soy" 
              checked={this.state.soy} 
              className="filter-checkbox"
              onChange={this.handleCheck("soy")} />

              <span className="filter-diet-name">
                Soy
              </span>

          </label>
          {/* <label className="filter-dd-item1" style={this.state.sulfite ? { fontWeight: "bold" } : {}}>
            <input type="checkbox" name="sulfite" 
              checked={this.state.sulfite} 
              className="filter-checkbox"
              onChange={this.handleCheck("sulfite")} />

              <span className="filter-diet-name">
                Sulfite
              </span>
          </label> */}

          <label className="filter-dd-item1">
            <input type="checkbox" name="wheat" 
              checked={this.state.wheat} 
              className="filter-checkbox"
              onChange={this.handleCheck("wheat")} />

              <span className="filter-diet-name">
                Wheat
              </span>

          </label>
        </div>)
    } else if (this.state.tabs === 4) {
      return (
        <div className="filter-bot-allergies">
          <span className="filter-x" onClick={this.handleTab(0)}>&times;</span>
          <div className="filter-slider">
            <div>Max Calories [ 0 - 800 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="800" 
                value={this.state.maxCalories} 
                onChange={this.handleSlider("maxCalories")}/>
            </div>
            <input className="slide"  type="number" min="0" max="800" maxength="3" 
              value={this.state.maxCalories} 
              onChange={this.handleSlider("maxCalories")} />
          </div>
          <div className="filter-slider">
            <div>Max Fat [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" 
                value={this.state.maxFat} 
                onChange={this.handleSlider("maxFat")}/>
            </div>
            <input className="slide"  type="number" min="0" max="100" maxLength="3" 
              value={this.state.maxFat} 
              onChange={this.handleSlider("maxFat")} />
          </div>
          <div className="filter-slider">
            <div>Max Carbs [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" 
                value={this.state.maxCarbs} 
                onChange={this.handleSlider("maxCarbs")}/>
            </div>
            <input className="slide" type="number" min="0" max="100" maxLength="3" 
              value={this.state.maxCarbs} 
              onChange={this.handleSlider("maxCarbs")} />
          </div>
          <div className="filter-slider">
            <div>Min Protein [ 0 - 100 ]</div>
            <div className="slider-second">
              <input className="filter-nutr-slider" type="range" min="0" max="100" 
                value={this.state.minProtein} 
                onChange={this.handleSlider("minProtein")}/>
            </div>
            <input className="slide" type="number" min="0" max="100" pattern="\d" maxLength="3" 
              value={this.state.minProtein} 
              onChange={this.handleSlider("minProtein")} />
          </div>

        </div>)
    }
  }     

  render() {

    let includeFridge;

    this.state.includeFridge ? includeFridge = "include-fridge" : includeFridge = "";


    return(
      <div>
      {this.state.ingredientToggle ? (
        <form className="filter-cont">
          <span className="filter-x" onClick={this.toggleIngredients}>&times;</span>
          <div className="filter-top">
          <div className="filter-header">
            <div className="filter-text-cont">
              <FilterSearchContainer addIngredient={this.addIngredient}/>
              <div className="filter-query-search"  
                onClick={this.handleIngredientSubmit}>
                  <img src={Loupe} alt=""/>
              </div>
            </div>
          </div>
            <div className="fridge-add">
              <div className="filter-switch" onClick={this.handleCheck("includeFridge")}>
                <input type="radio" id="yes" name="switch"
                  defaultChecked={this.state.includeFridge}
                  className="switch-btn radio-yes"/>
                <input type="radio" id="no" name="switch"
                  className="switch-btn radio-no"/>

                <label htmlFor="yes" className="switch-btn-label radio-yes-label">
                  <span className="switch-btn-text">yes</span>
                </label>
                <label htmlFor="no" className="switch-btn-label radio-no-label">
                  <span className="switch-btn-text">no</span>
                </label>
              </div>
              <div className="include-fridge">
                Include Fridge
              </div>
              {/* <div className={`include-fridge-toggle ${includeFridge}`} 
                onClick={this.handleCheck("includeFridge")}>
                Include Fridge
              </div> */}
                {/* <label className="filter-dd-item1">
                    <Toggle className="toggle" 
                    defaultChecked={this.state.includeFridge} 
                    onChange={this.handleCheck("includeFridge")} />
                    <p>Include Fridge</p>
                </label>  */}
            </div>
          </div>
          <div className="filter-bot-ingredients">
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
                value={this.state.query}
                onKeyDown={this.handleKeyDown} 
                />
                <div className="filter-query-search" onClick={this.handleQuerySubmit} >
                  <img src={Loupe} alt=""/>
                  {/* <input type="submit" className="filter-query-search" value=""/> */}
                </div>
            </div>
            <div className="filter-text-button" onClick={this.toggleIngredients}>
              <img src={Ingredient} alt="" className="ingredient-search-img" />
              <span className="toggle-span">Ingredient Search</span>
            </div>
          </div>
          <div className="filter-param-cont">
            <div className="filter-param-text" 
              onClick={this.handleTab(1)} 
              style={this.state.tabs === 1 ? { color: "#a8a8a8", fontWeight: "bold", textDecoration: "underline" } : {}}>
              Diets
            </div>
            <div  className="filter-param-text" 
              onClick={this.handleTab(2)} 
              style={this.state.tabs === 2  ? { color: "#a8a8a8", fontWeight: "bold", textDecoration: "underline" } : {}}>
              Cuisines
            </div>
            <div  className="filter-param-text" 
              onClick={this.handleTab(3)} 
              style={this.state.tabs === 3  ? {color: "#a8a8a8", fontWeight: "bold", textDecoration: "underline" } : {}}>
              Allergies
            </div>
            <div  className="filter-param-text" 
              onClick={this.handleTab(4)} 
              style={this.state.tabs === 4 ? { color: "#a8a8a8", fontWeight: "bold", textDecoration: "underline" } : {}}>
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



