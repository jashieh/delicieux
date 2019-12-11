import React from 'react';

class WeeklyNutrition extends React.Component {
  constructor(props) {
    super(props);

    this.generateNutrientTableRows = this.generateNutrientTableRows.bind(this);
  }

  generateNutrientTableRows() {
    let { nutrients } = this.props;
    let nutrientNames = Object.keys(nutrients);
    
    let nutritionRows = [];
    for (let i = 0; i < nutrientNames.length; i++) {
      if (nutrientNames[i] === "dates") continue;
      let { amount, unit, percentage } = nutrients[nutrientNames[i]];

      nutritionRows.push(
        <div className="weekly-nutrient-row">
          <div className="weekly-nutrient-name">{ nutrientNames[i] }</div>
          <div className="weekly-nutrient-amount">{ amount } { unit }</div>
          <div className="weekly-nutrient-percentage">{ percentage }%</div>
        </div>
      )
    }
    return nutritionRows;
  }
  
  render() {
    return (
      <div className="weekly-nutrient-table">
        {this.generateNutrientTableRows()}
      </div>
    );
  }
}

export default WeeklyNutrition;