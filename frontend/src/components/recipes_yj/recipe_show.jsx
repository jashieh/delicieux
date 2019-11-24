import React from 'react';
import '../stylesheets/recipes_index/recipe_show.scss'
import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart } from 'victory';
import { calorieCalc } from '../../util/calorie_util';

export default class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritionReq: {
        "Calories": 2000,
        "Carbohydrates": 250,
        "Protein": 80,
        "Fat": 75,
        "Fiber": 30,
      },
      pieData: [
        { x: "", y: 100, label: "" },
        { x: "", y: 0, label: "" },
        { x: "", y: 0, label: "" }
      ],
      label: false,
      pieChart: true,
    };
    this.toggleChart = this.toggleChart.bind(this);
  }
  componentDidMount() {
    const { recipe, fridge } = this.props;
    // ["Calories", "Protein", "Carbohydrates", "Fat"]
    let calories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let protein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let fat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let carbohydrates = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;

    setTimeout(() => {
      this.setState({
        pieData: [
          { x: "Carbs", y: (carbohydrates * 4/calories * 100), label: "Carbs" },
          { x: "Protein", y: (protein * 4/calories * 100), label: "Protein" },
          { x: "Fat", y: (fat * 9/calories * 100), label: "Fat"}
        ],
        label: true
      })}, 1000)
    
  }
  toggleChart() {
    this.setState({pieChart: !this.state.pieChart});
  }
  handleBarOn(type) {
    return (e) => {
      this.setState({[type]: true})
    }
  }
  handleBarOff(type) {
    return (e) => {
      this.setState({[type]: false})
    }
  }
  render() {
    const { recipe, fridge, user } = this.props;
    let fridgeList = Object.values(fridge.ingredients).map((el) => el.name);
    let calorieReq = calorieCalc(user);
    let nutritionReq =  {
      "Calories": calorieReq,
      "Carbohydrates": 250 * calorieReq/2000,
      "Protein": 80 * calorieReq/2000,
      "Fat": 75 * calorieReq/2000,
      "Fiber": 30,
      };
    let chartDisp = this.state.pieChart ? (
    <div className="chart-cont" onClick={this.toggleChart}>
      Calorie Distribution
      <VictoryPie
        animate={{
          duration: 2000
        }}
        colorScale={["#3a9691", "skyblue", "lightblue"]}
        data={this.state.pieData}
        events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "labels",
                    mutation: ({ text, datum }) => {
                return text === "data" ? null : { text: datum.label };
                  }}]
                }, 
                onMouseOut: () => {
                  return [
                    {
                      target: "labels",
                      mutation: ({ text }) => {
                        return text === "data" ? { text: "x" } : null;
                      }
                    }]
                }
              }
        }]}
        // labelComponent={<VictoryTooltip />}
        labelComponent={<VictoryLabel 
          />}
        // innerRadius={200}
        labelRadius={70}
        // padAngle={1}
        style={{ 
          labels:{ 
          fill: "black", fontSize: 20, fontWeight: "bold" 
        }, data: {
          fillOpacity: 0.9, stroke: "black", strokeWidth: 3
        }, }} 
      />
    </div>) : (
      <div className="bar-chart-cont" onClick={this.toggleChart}>
          {recipe.nutrition.map((nutrient, idx) => {
            if( ["Calories", "Protein", "Carbohydrates", "Fat", "Fiber"].includes(nutrient.title)) {
              let title = nutrient.title
              let percent = Math.floor(nutrient.amount / nutritionReq[title] * 100)
              return (
                <div className="bar-graph-cont" key={idx} onMouseEnter={this.handleBarOn(title)} onMouseLeave={this.handleBarOff(title)}>
                  <div> {title} </div>
                  <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${percent}%, darkgrey ${percent}%)`}}>
                     { this.state[title] ? <div>{Math.floor(nutrient.amount)} {nutrient.unit}</div> : <div>{percent}%</div>}
                  </div>
                </div>
              )
            }
          })}
      </div>

    );
    return(
      <div className="cont-cont">
        <div className="recipe-show-cont">
          <div className="recipe-show-ls">
            <div className="recipe-show-photo-cont">
              <img className="recipe-show-photo" src={recipe.image} />
            </div>
            <div className="rs-icon-cont">
              <div className="rs-icon">
                <p>{recipe.cookingMinute}m</p>
              </div>
              {recipe.vegetarian ?
              <div className="rs-icon">
                <p>Veg</p>
              </div> : null}
              {recipe.ketogenic ?
              <div className="rs-icon">
                <p>Keto</p>
              </div> : null}
            </div>
            {chartDisp}
          </div>
            
          <div className="rs-main-cont">
            <h4 className="rs-title">{recipe.title}</h4>
            <a href={recipe.sourceUrl} target="_blank">Source: {recipe.sourceName}</a>
            <ul className="recipe-show-ing-list">
              {recipe.ingredients.map((ingredient, idx) => {
                let ingrName = ingredient.name.split(" ");
                let subName = ingrName[ingrName.length -1];
                let listStyle = {color: fridgeList.includes(ingredient.name) ? "black" : fridgeList.includes(subName) ? "blue" : "red"};
                return (
                <li className="rs-li-item" key={idx} style={listStyle}>
                  <div className="rs-li-item-pic-cont" >
                    <img className="rs-l-i-p" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}/>
                  </div>
                  {ingredient.amount%1 === 0 ? ingredient.amount : ingredient.amount.toFixed(2)} {ingredient.unit} {ingredient.name}
                </li>)
              })}

            </ul>
          </div>
        </div>
      </div>

     
    )
  }

}