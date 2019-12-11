import React from 'react';
import '../stylesheets/recipes_index/recipe_show.scss'
import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart, VictoryLegend, VictoryContainer } from 'victory';
import { calorieCalc } from '../../util/calorie_util';

export default class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: [
        { y: 100, label: "" },
        { y: 0, label: "" },
        { y: 0, label: "" }
      ],
      legendData: [
        { name: "Carbs" }, { name: "Protein" }, { name: "Fat" }
      ],
      label: false,
      pieChart: true,
      instructions: false,
    };
    this.toggleChart = this.toggleChart.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
  }
  componentDidMount() {
    const { recipe, fridge } = this.props;
    let calories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let protein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let fat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let carbohydrates = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;
    let calorieAc = (carbohydrates * 4) + (protein * 4)+ (fat * 9);
    let carbPer = Math.round(carbohydrates * 4 / calorieAc * 1000) / 10;
    let proteinPer = Math.round(protein * 4 / calorieAc * 1000) / 10;
    let fatPer = Math.round(fat * 9 / calorieAc * 1000) / 10;
    setTimeout(() => {
      this.setState({
        pieData: [
          { x: "Carbs", y: carbPer, label: "Carbs" },
          { x: "Protein", y: proteinPer, label: "Protein" },
          { x: "Fat", y: fatPer, label: "Fat" }
        ],
        label: true
      })}, 1000)
  }
  toggleChart() {
    this.setState({pieChart: !this.state.pieChart});
  }
  toggleRight(n) {
    debugger;
    this.setState({instructions: n === "instructions" ? true : false});
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
    let fridgeList = fridge.ingredients ? Object.values(fridge.ingredients).map((el) => el.name) : [];
    let calorieReq = calorieCalc(user) || 2000;
    let nutritionReq =  {
      "Calories": calorieReq ? calorieReq : 2000,
      "Carbohydrates": calorieReq ? 250 * calorieReq/2000 : 250,
      "Protein": calorieReq ? 80 * calorieReq/2000 : 80,
      "Fat": calorieReq ? 75 * calorieReq/2000 : 75,
      };
    let timeC = recipe.readyInMinutes < 60 ? (recipe.readyInMinutes).toString() + "m" : 
    recipe.readyInMinutes < 180 ? Math.floor(recipe.readyInMinutes/60).toString() + "h" : "3h+"

    let chartDisp = this.state.pieChart ? (
      <div className="chart-cont" onClick={this.toggleChart}>
        <div>Calorie Distribution</div>
        <VictoryPie
          animate={{
            duration: 2000
          }}
          colorScale={["lightblue", "#F1EAF7", "#E0EECF"]}
          data={this.state.pieData}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "labels",
                      mutation: ({ text, datum }) => {
                        return { text: `${datum.y}%`};
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "labels",
                      mutation: ({ text, datum }) => {
                        return { text: datum.label };
                      }
                    }
                  ];
                }
              }
            }
          ]}
          labelComponent={<VictoryLabel />}
          labelRadius={70}
          style={{
            parent: { maxWidth: "90%" },
            labels: {
              fill: "black",
              fontSize: 24
            }
          }}
        />
      </div>
    ) : (
      <div className="bar-chart-cont" onClick={this.toggleChart}>
        {recipe.nutrition.map((nutrient, idx) => {
          if (
            ["Calories", "Protein", "Carbohydrates", "Fat"].includes(
              nutrient.title
            )
          ) {
            let title = nutrient.title;
            let percent = Math.floor(
              (nutrient.amount / nutritionReq[title]) * 100
            );
            return (
              <div
                className="bar-graph-cont"
                key={idx}
                onMouseEnter={this.handleBarOn(title)}
                onMouseLeave={this.handleBarOff(title)}
              >
                <div> {title} </div>
                <div
                  className="chart-test"
                  style={{
                    background: `linear-gradient(90deg, black ${percent}%, tomato ${percent}%)`
                  }}
                >
                  {this.state[title] ? (
                    <div className="bar-text">
                      {Math.floor(nutrient.amount)} {nutrient.unit}
                    </div>
                  ) : (
                    <div className="bar-text">{percent}%</div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    );

    let rightPanel;
    if (this.state.instructions) {
      if (recipe.instructions && recipe.instructions[0])
        rightPanel = (
          <ol className="recipe-show-inst-list">
            {recipe.instructions[0].steps.map((step, idx) => {
              let number = step.number;
              let instr = step.step;
              return (
                <li className="rs-li-item" key={idx}>
                  {instr}
                </li>)
            })}
          </ol>
        )
      else
        rightPanel = (
          <div className="recipe-no-instructions">
            Instructions can be found at: &nbsp;
            <a href={recipe.sourceUrl} target="_blank">{recipe.sourceName}</a>
          </div>
        )
    }
    else {
      rightPanel = (
        <ul className="recipe-show-ing-list">
          {recipe.ingredients.map((ingredient, idx) => {
            let ingrName = ingredient.name.split(" ");
            let subName = ingrName[ingrName.length - 1];
            // let listStyle = { color: fridgeList.includes(ingredient.name) ? "black" : fridgeList.includes(subName) ? "blue" : "red" };
            return (
              <li className="rs-li-item" key={idx} >
                <div className="rs-li-item-pic-cont" >
                  {ingredient.image ? <img className="rs-l-i-p" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} /> : null}
                </div>
                {ingredient.amount % 1 === 0 ? ingredient.amount : ingredient.amount.toFixed(2)} {ingredient.unit} {ingredient.name}
              </li>)
          })}
        </ul>)
    }

    return(
      <div className="cont-cont">
        <div className="recipe-show-cont">
          <div className="recipe-show-ls">
            <div className="recipe-show-photo-cont">
              <img className="recipe-show-photo" src={recipe.image} />
            </div>
            {chartDisp}
          </div>
            
          <div className="rs-main-cont">
            <div className="modal-text-contain">
              <h4 className="rs-title">{recipe.title}</h4>
              <div className="rs-link">
                <a href={recipe.sourceUrl} target="_blank">Source: {recipe.sourceName}</a>
              </div>
            </div>
            <div className="rs-list-cont">
              
              <div className="recipe-show-toggle">
                <div className="list-title" 
                  onClick={this.toggleRight}
                  style={this.state.instructions ? {} : { textDecoration: "underline", fontWeight: "bold" }}>
                  Ingredient List
                </div>
                <div className="list-title" 
                  onClick={()=>{this.toggleRight("instructions")}}
                  style={this.state.instructions ? { textDecoration: "underline", fontWeight: "bold" } : {}}>
                  Instructions
                </div>
              </div>
              {rightPanel}
            </div>

          </div>
        </div>
      </div>

     
    )
  }

}