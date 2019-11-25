import React from 'react';
import { VictoryLegend, VictoryPie, VictoryLabel } from 'victory';
import "../stylesheets/weekly_cart/weekly_cart_day.scss";
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
      pieData: [
        { y: 100, label: "" },
        { y: 0, label: "" },
        { y: 0, label: "" }
      ],
      legendData: [
        { name: "Carbs" }, { name: "Protein" }, { name: "Fat" }
      ],
    }
  }
  componentDidMount() {
    
    let { calories, carbs, protein, fat } = this.props;
    let calorieAc = (carbs * 4) + (protein * 4) + (fat * 9);
    let carbPer = Math.round(carbs * 4 / calorieAc * 1000) / 10;
    let proteinPer = Math.round(protein * 4 / calorieAc * 1000) / 10;
    let fatPer = Math.round(fat * 9 / calorieAc * 1000) / 10;
    debugger;
    setTimeout(() => {
      this.setState({
        pieData: [
          { x: "Carbs", y: carbPer, label: `${carbPer}%` },
          { x: "Protein", y: proteinPer, label: `${proteinPer}%` },
          { x: "Fat", y: fatPer, label: `${fatPer}%` }
        ],
        label: true
      })
    }, 1000)
  }
  
  render() {
    let calorieReq = calorieCalc(user);
    let nutritionReq = {
      "Calories": calorieReq ? calorieReq : 2000,
      "Carbohydrates": calorieReq ? 250 * calorieReq / 2000 : 250,
      "Protein": calorieReq ? 80 * calorieReq / 2000 : 80,
      "Fat": calorieReq ? 75 * calorieReq / 2000 : 75,
      "Fiber": 30,
    };
    return(
      <div className="weekly-macro-cont">
        <div className="weekly-macro-pie">
          <div className="chart-cont">
            <svg width={300} height={200}
              style={{ border: "1px solid #ccc" }}>
              <VictoryLegend
                standalone={false}
                colorScale={["#3a9691", "skyblue", "lightblue"]}
                x={20} y={40}
                gutter={10}
                rowGutter={-5}
                data={this.state.legendData}
                style={{
                  data: { fontSize: 12, lineHeight: 1 },
                  border: { stroke: "black" },
                  title: { fontSize: 14 }
                }}
              />
              <VictoryPie
                standalone={false}
                width={300} height={200}
                padding={{
                  left: 120, bottom: 20, top: 20
                }}
                animate={{
                  duration: 2000
                }}
                colorScale={["#3a9691", "skyblue", "lightblue"]}
                data={this.state.pieData}
                labelComponent={<VictoryLabel
                />}
                labelRadius={60}
                style={{
                  labels: {
                    fill: "black", fontSize: 15
                  }, data: {
                    fillOpacity: 0.9, stroke: "black", strokeWidth: 2
                  },
                }}
              />
            </svg>

          </div>
        </div>
        <div className="weekly-macro-bar">
          <div className="bar-chart-cont" onClick={this.toggleChart}>
            {recipe.nutrition.map((nutrient, idx) => {
              if (["Calories", "Protein", "Carbohydrates", "Fat", "Fiber"].includes(nutrient.title)) {
                let title = nutrient.title
                let percent = Math.floor(nutrient.amount / nutritionReq[title] * 100)
                return (
                  <div className="bar-graph-cont" key={idx} onMouseEnter={this.handleBarOn(title)} onMouseLeave={this.handleBarOff(title)}>
                    <div> {title} </div>
                    <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${percent}%, darkgrey ${percent}%)` }}>
                      {this.state[title] ? <div>{Math.floor(nutrient.amount)} {nutrient.unit}</div> : <div>{percent}%</div>}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}