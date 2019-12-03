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
    let calorieAc = (carbs * 4) + (protein * 4) + (fat * 9);
    let carbPer = Math.round(carbs * 4 / calorieAc * 1000) / 10;
    let proteinPer = Math.round(protein * 4 / calorieAc * 1000) / 10;
    let fatPer = Math.round(fat * 9 / calorieAc * 1000) / 10;
    
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
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("calories")} onMouseLeave={this.handleBarOff("calories")}>
            <div> Calories </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${caloriePer}%, darkgrey ${caloriePer}%)` }}>
              {this.state.calories ? <div>{Math.floor(calories)} cal</div> : <div>{caloriePer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("protein")} onMouseLeave={this.handleBarOff("protein")}>
            <div> Protein </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${proteinPer}%, darkgrey ${proteinPer}%)` }}>
              {this.state.protein ? <div>{Math.floor(protein)} g</div> : <div>{proteinPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("fat")} onMouseLeave={this.handleBarOff("fat")}>
            <div> Fat </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${fatPer}%, darkgrey ${fatPer}%)` }}>
              {this.state.fat ? <div>{Math.floor(fat)} g</div> : <div>{fatPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("carbs")} onMouseLeave={this.handleBarOff("carbs")}>
            <div> Carbohydrates </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${carbsPer}%, darkgrey ${carbsPer}%)` }}>
              {this.state.carbs ? <div>{Math.floor(carbs)} g</div> : <div>{carbsPer}%</div>}
            </div>
          </div>
          <div className="bar-graph-cont" onMouseEnter={this.handleBarOn("fiber")} onMouseLeave={this.handleBarOff("fiber")}>
            <div> Fiber </div>
            <div className="chart-test" style={{ background: `linear-gradient(90deg, #FFC0CB ${fiberPer}%, darkgrey ${fiberPer}%)` }}>
              {this.state.fiber ? <div>{Math.floor(fiber)} g</div> : <div>{fiberPer}%</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}