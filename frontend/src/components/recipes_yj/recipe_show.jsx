import React from 'react';
import '../stylesheets/recipes_index/recipe_show.scss'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart } from 'victory';
export default class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritionReq: {
        "Calories": 2000,
        "Carbohydrates": 300,
        "Protein": 65,
        "Fat": 50,
        "Fiber": 30,
      },
      pieData: [
        { x: "Carbs", y: 100, label: "56.8%" },
        { x: "Protein", y: 0, label: "12.9%" },
        { x: "Fat", y: 0, label: "30.3%" }
      ],
      label: false,
      pieChart: true,
      nutrition: [
        {
          nutrients: [
            {
              "title": "Calories",
              "amount": 584.46,
              "unit": "cal",
              "percentOfDailyNeeds": 29.22
            },
            {
              "title": "Fat",
            "amount": 26.21,
            "unit": "g",
            "percentOfDailyNeeds": 40.32,
            },
            {
              "title": "Carbohydrates",
              "amount": 83.71,
              "unit": "g",
              "percentOfDailyNeeds": 27.9
            },
            {
              "title": "Sugar",
              "amount": 5.36,
              "unit": "g",
              "percentOfDailyNeeds": 5.95
            },
            {
              "title": "Cholesterol",
              "amount": 31.02,
              "unit": "mg",
              "percentOfDailyNeeds": 10.34
            },
            {
              "title": "Sodium",
              "amount": 451.42,
              "unit": "mg",
              "percentOfDailyNeeds": 19.63
            },
            {
              "title": "Alcohol",
              "amount": 1.55,
              "unit": "g",
              "percentOfDailyNeeds": 8.58
            },
            {
              "title": "Protein",
              "amount": 18.98,
              "unit": "g",
              "percentOfDailyNeeds": 37.97
            },
            {
              "title": "Selenium",
              "amount": 57.72,
              "unit": "µg",
              "percentOfDailyNeeds": 82.45
            },
            {
              "title": "Vitamin C",
              "amount": 56.62,
              "unit": "mg",
              "percentOfDailyNeeds": 68.64
            },
            {
              "title": "Manganese",
              "amount": 1.11,
              "unit": "mg",
              "percentOfDailyNeeds": 55.52
            },
            {
              "title": "Vitamin K",
              "amount": 58.27,
              "unit": "µg",
              "percentOfDailyNeeds": 55.49
            },
            {
              "title": "Phosphorus",
              "amount": 304.38,
              "unit": "mg",
              "percentOfDailyNeeds": 30.44
            },
            {
              "title": "Fiber",
              "amount": 6.73,
              "unit": "g",
              "percentOfDailyNeeds": 26.92
            },
            {
              "title": "Folate",
              "amount": 87.14,
              "unit": "µg",
              "percentOfDailyNeeds": 21.79
            },
            {
              "title": "Vitamin B6",
              "amount": 0.43,
              "unit": "mg",
              "percentOfDailyNeeds": 21.46
            },
            {
              "title": "Magnesium",
              "amount": 71.55,
              "unit": "mg",
              "percentOfDailyNeeds": 17.89
            },
            {
              "title": "Calcium",
              "amount": 178.12,
              "unit": "mg",
              "percentOfDailyNeeds": 17.81
            },
            {
              "title": "Potassium",
              "amount": 597.53,
              "unit": "mg",
              "percentOfDailyNeeds": 17.07
            },
            {
              "title": "Iron",
              "amount": 3.07,
              "unit": "mg",
              "percentOfDailyNeeds": 17.04
            },
            {
              "title": "Copper",
              "amount": 0.33,
              "unit": "mg",
              "percentOfDailyNeeds": 16.43
            },
            {
              "title": "Zinc",
              "amount": 2.12,
              "unit": "mg",
              "percentOfDailyNeeds": 14.15
            },
            {
              "title": "Vitamin B5",
              "amount": 1.17,
              "unit": "mg",
              "percentOfDailyNeeds": 11.69
            },
            {
              "title": "Vitamin B2",
              "amount": 0.2,
              "unit": "mg",
              "percentOfDailyNeeds": 11.5
            },
            {
              "title": "Vitamin A",
              "amount": 537.51,
              "unit": "IU",
              "percentOfDailyNeeds": 10.75
            },
            {
              "title": "Vitamin B3",
              "amount": 2.14,
              "unit": "mg",
              "percentOfDailyNeeds": 10.71
            },
            {
              "title": "Vitamin B1",
              "amount": 0.16,
              "unit": "mg",
              "percentOfDailyNeeds": 10.46
            },
            {
              "title": "Vitamin E",
              "amount": 1.53,
              "unit": "mg",
              "percentOfDailyNeeds": 10.2
            },
            {
              "title": "Vitamin B12",
              "amount": 0.14,
              "unit": "µg",
              "percentOfDailyNeeds": 2.28
            },
            {
              "title": "Vitamin D",
              "amount": 0.2,
              "unit": "µg",
              "percentOfDailyNeeds": 1.31
            }
          ],
          "ingredients": [],
          "caloricBreakdown": {
            "percentProtein": 12.89,
            "percentFat": 30.29,
            "percentCarbs": 56.82
          },
          "weightPerServing": {
            "amount": 269,
            "unit": "g"
          }
        }
      ],
      "cuisines": [],
      "cookingMinute": 10,
      "diets": [],
      "_id": "5dd46d9f661ec599e6804620",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryPopular": false,
      "ketogenic": true,
      "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
      "spoonacularScore": 83,
      "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      "servings": 2,
      "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
      "ingredients": [
        {
          "_id": "5dd47356526ea09bbca4b2c6",
          "id": 1001,
          "image": "butter-sliced.jpg",
          "name": "butter",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c5",
          "id": 10011135,
          "image": "cauliflower.jpg",
          "name": "cauliflower florets",
          "amount": 2,
          "unit": "cups"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c4",
          "id": 1041009,
          "image": "cheddar-cheese.png",
          "name": "cheese",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c3",
          "id": 1034053,
          "image": "olive-oil.jpg",
          "name": "extra virgin olive oil",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c2",
          "id": 11215,
          "image": "garlic.jpg",
          "name": "garlic",
          "amount": 5,
          "unit": "cloves"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c1",
          "id": 20420,
          "image": "fusilli.jpg",
          "name": "pasta",
          "amount": 6,
          "unit": "ounces"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c0",
          "id": 1032009,
          "image": "red-pepper-flakes.jpg",
          "name": "red pepper flakes",
          "amount": 2,
          "unit": "pinches"
        },
        {
          "_id": "5dd47356526ea09bbca4b2bf",
          "id": 1102047,
          "image": "salt-and-pepper.jpg",
          "name": "salt and pepper",
          "amount": 2,
          "unit": "servings"
        },
        {
          "_id": "5dd47356526ea09bbca4b2be",
          "id": 11291,
          "image": "spring-onions.jpg",
          "name": "scallions",
          "amount": 3,
          "unit": ""
        },
        {
          "_id": "5dd47356526ea09bbca4b2bd",
          "id": 14106,
          "image": "white-wine.jpg",
          "name": "white wine",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2bc",
          "id": 99025,
          "image": "breadcrumbs.jpg",
          "name": "whole wheat bread crumbs",
          "amount": 0.25,
          "unit": "cup"
        }
      ]
    };
    this.nutrition = Object.values(this.state.nutrition[0].nutrients);
    this.toggleChart = this.toggleChart.bind(this);
  }
  componentDidMount() {
    // fetchRecipe(this.props.recipeId)
    setTimeout(() => {
      this.setState({
        pieData: [
          { x: "Carbs", y: 56.8, label: "56.8%" },
          { x: "Protein", y: 12.9, label: "12.9%" },
          { x: "Fat", y: 30.3, label: "30.3%" }
        ],
        labeL: true
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
    let chartDisp = this.state.pieChart ? (
    <div className="chart-cont" onClick={this.toggleChart}>
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
                    mutation: ({ text }) => {
                return text === "data" ? null : { text: "clicked" };
                  }}]
                }
          }}]}
        labelComponent={<VictoryTooltip />}
        labelComponent={<VictoryLabel 
          active={false}/>}
        // innerRadius={200}
        labelRadius={80}
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
        {/* COOL CHART HERE */}
       
          {this.nutrition.map((nutrient, idx) => {
            if( ["Calories", "Protein", "Carbohydrates", "Fat", "Fiber"].includes(nutrient.title)) {
              let title = nutrient.title
              let percent = Math.floor(nutrient.amount / this.state.nutritionReq[title] * 100)
              return (
                <div className="bar-graph-cont" key={idx} onMouseEnter={this.handleBarOn(title)} onMouseLeave={this.handleBarOff(title)}>
                  <div> {title} </div>
                  <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${percent}%, darkgrey ${percent}%)`}}>
                     { this.state[title] ? <div>{Math.floor(nutrient.amount)}</div> : <div>{percent}%</div>}
                  </div>
                </div>
              )
            }
          })}
       
        {/* <VictoryChart 
          animate= {{duration: 2000}}
          colorScale={["#3a9691", "skyblue", "lightblue"]}
          data={[
              { x: 1, y: 10, label: "56.8%" },
              { x: 2, y: 15, label: "12.9%" },
              { x: 3, y: 13, label: "30.3%" }
            ]}
        /> */}
      </div>

    );
    return(
      <div className="cont-cont">
        <div className="recipe-show-cont">
          <div className="recipe-show-ls">
            <div className="recipe-show-photo-cont">
              <img className="recipe-show-photo" src={this.state.image} />
            </div>
            <div className="rs-icon-cont">
              <div className="rs-icon">
                <p>{this.state.cookingMinute}m</p>
              </div>
              {this.state.vegetarian ?
              <div className="rs-icon">
                <p>Veg</p>
              </div> : null}
              {this.state.ketogenic ?
              <div className="rs-icon">
                <p>Keto</p>
              </div> : null}
            </div>
            {chartDisp}
          </div>
            
          <div className="rs-main-cont">
            <h4 className="rs-title">{this.state.title}</h4>
            <ul className="recipe-show-ing-list">
              {this.state.ingredients.map((ingredient, idx) => (
                <li className="rs-li-item" key={idx}>
                  <div className="rs-li-item-pic-cont">
                    <img className="rs-l-i-p" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}/>
                  </div>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>

     
    )
  }

}