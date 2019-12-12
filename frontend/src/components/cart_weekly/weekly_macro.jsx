import React from 'react';
import { VictoryLegend, VictoryPie, VictoryLabel } from 'victory';
import "../stylesheets/weekly_cart/weekly_macro.scss";
import { calorieCalc } from '../../util/calorie_util';

export default class WeeklyMacro extends React.Component {
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
      weeklyNutrition: {},
      pieData: [
        { y: 100, label: "" },
        { y: 0, label: "" },
        { y: 0, label: "" }
      ],
      legendData: [
        { name: "Carbs" }, { name: "Protein" }, { name: "Fat" }
      ],
      calories: false,
      protein: false,
      fat: false,
      carbs: false,
      fiber: false,

    }
    this.handleBarOn = this.handleBarOn.bind(this);
    this.handleBarOff = this.handleBarOff.bind(this);
  }
  componentDidMount() {
    let { calories, carbs, protein, fat } = this.props;
    this.state.nutritionReq = Object.assign({}, this.props);
    let calorieAc = (carbs * 4) + (protein * 4) + (fat * 9);
    let carbPer = Math.round(carbs * 4 / calorieAc * 1000) / 10;
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
      })
    }, 2000)
  }
  // static getDerivedStateFromProps(props, state) {
  //   if (props.calories !== state.weeklyNutrition.calories) {
  //     return { 
  //       weeklyNutrition: {
  //         calories: props.calories,
  //         carbs: props.carbs,
  //         protein: props.protein,
  //         fat: props.fat,
  //         fiber: props.fiber
  //       }
  //     }
  //   }
  //   return null;
  // }
 
  handleBarOn(type) {
    return (e) => {
      this.setState({ [type]: true })
    }
  }
  handleBarOff(type) {
    return (e) => {
      this.setState({ [type]: false })
    }
  }
  render() {
    let { calories, carbs, protein, fat, fiber, user } = this.props;
    let pieCalorie = (carbs * 4) + (protein * 4) + (fat * 9);
    let pieCarb = Math.round(carbs * 4 / pieCalorie * 1000) / 10 || 33;
    let pieProtein = Math.round(protein * 4 / pieCalorie * 1000) / 10 || 33;
    let pieFat = Math.round(fat * 9 / pieCalorie * 1000) / 10 || 33;

    let calorieReq = calorieCalc(user);
    let nutritionReq = {
      calories: calorieReq ? calorieReq * 7 : 2000*7,
      carbs: calorieReq ? 250 * calorieReq / 2000 * 7: 250*7,
      protein: calorieReq ? 80 * calorieReq / 2000 * 7 : 80*7,
      fat: calorieReq ? 75 * calorieReq / 2000 * 7 : 75*7,
      fiber: 210,
    };
    let caloriePer = Math.floor(calories / nutritionReq.calories * 100);
    let carbsPer = Math.floor(carbs / nutritionReq.carbs * 100);
    let proteinPer = Math.floor(protein / nutritionReq.protein * 100);
    let fatPer = Math.floor(fat / nutritionReq.fat * 100);
    let fiberPer = Math.floor(fiber / nutritionReq.fiber * 100);

    return(
      <div className="weekly-macro-cont">
        <div className="weekly-macro-pie">
          <div className="chart-cont">
            <VictoryPie
                colorScale={["lightblue", "#F1EAF7", "#E0EECF"]}
                data={[
                  { x: "Carbs", y: pieCarb, label: "Carbs" },
                  { x: "Protein", y: pieProtein, label: "Protein" },
                  { x: "Fat", y: pieFat, label: "Fat" }
                ]}
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onMouseOver: () => {
                        return [
                          {
                            target: "labels",
                            mutation: ({ text, datum }) => {
                              return { text: `${datum.y}%` };
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
                labelComponent={<VictoryLabel/>}
                labelRadius={70}
                style={{
                  parent: { maxWidth: "90%" },
                  labels: {
                    fill: "black", fontSize: 24
                  }, data: {
                    fillOpacity: 0.9, stroke: "black", strokeWidth: 2
                  },
                }}
              />
          </div>
        </div>
        <div className="weekly-macro-bar">
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("calories")} onMouseLeave={this.handleBarOff("calories")}>
            <div> Calories </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, black ${caloriePer}%, tomato ${caloriePer}%)` }}>
              {this.state.calories ? <div className="bar-text">{Math.floor(calories)} cal</div> : <div className="bar-text">{caloriePer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("protein")} onMouseLeave={this.handleBarOff("protein")}>
            <div> Protein </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, black ${proteinPer}%, tomato ${proteinPer}%)` }}>
              {this.state.protein ? <div className="bar-text">{Math.floor(protein)} g</div> : <div className="bar-text">{proteinPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("fat")} onMouseLeave={this.handleBarOff("fat")}>
            <div> Fat </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, black ${fatPer}%, tomato ${fatPer}%)` }}>
              {this.state.fat ? <div className="bar-text">{Math.floor(fat)} g</div> : <div className="bar-text">{fatPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("carbs")} onMouseLeave={this.handleBarOff("carbs")}>
            <div> Carbohydrates </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, black ${carbsPer}%, tomato ${carbsPer}%)` }}>
              {this.state.carbs ? <div className="bar-text">{Math.floor(carbs)} g</div> : <div className="bar-text">{carbsPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("fiber")} onMouseLeave={this.handleBarOff("fiber")}>
            <div> Fiber </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, black ${fiberPer}%, tomato ${fiberPer}%)` }}>
              {this.state.fiber ? <div className="bar-text">{Math.floor(fiber)} g</div> : <div className="bar-text">{fiberPer}%</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}