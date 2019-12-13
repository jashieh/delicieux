import React from 'react';
// import { Divider } from 'material-ui';

class WeeklyNutrition extends React.Component {
  constructor(props) {
    super(props);

    this.generateNutrientTableRows = this.generateNutrientTableRows.bind(this);
  }

  generateNutrientTableRows() {
    let { nutrients } = this.props;
    // let nutrientNames = Object.keys(nutrients);
    // nutrientNames = nutrientNames.sort();

    let main = [
      "Calories", 
      "Fat",
      "Saturated Fat",
      "Cholesterol",
      "Sodium",
      "Carbohydrates",
      "Sugar",
      "Fiber",
      "Protein",
    ]

    let elements = [
      "Calcium",
      "Copper",
      "Iron",
      "Magnesium",
      "Manganese",
      "Phosphorus",
      "Potassium",
      "Zinc",
      "Vitamin A",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K",
      "Folate",
      "Selenium"
    ];
    
    let nutritionRows = [];
    for (let i = 0; i < main.length; i++) {
      if (main[i] === "dates") continue;
      if (!nutrients[main[i]]) continue;
      
      let { amount, unit, percentage } = nutrients[main[i]];

      nutritionRows.push(
        <div className="weekly-nutrient-row">
          <div className="weekly-nutrient-name">
            <div style={ ["Sugar", "Fiber", "Saturated Fat"].includes(main[i]) ? {"paddingLeft": "15px"} : { "fontWeight": "bold" } }>
              {main[i]}
            </div>
            <div> &nbsp; { amount.toFixed(0) }{ unit } </div>
          </div>
          <div className="weekly-nutrient-percentage">{ (percentage/7).toFixed(0) }%</div>
        </div>
      )
      if (i !== main.length - 1)
        nutritionRows.push(<div className="nutrition-divider"></div>);
    }

    nutritionRows.push(<div className="nutrition-section-divider"></div>)

    for (let i = 0; i < elements.length; i++) {
      if (elements[i] === "dates") continue;
      if (!nutrients[elements[i]]) continue;
      let { amount, unit, percentage } = nutrients[elements[i]];

      nutritionRows.push(
        <div className="weekly-nutrient-row">
          <div className="weekly-nutrient-name">
            <strong>{elements[i]}</strong>
            &nbsp;
            {amount.toFixed(0)}
            {unit}
          </div>
          <div className="weekly-nutrient-percentage">
            {(percentage / 7).toFixed(0)}%
          </div>
        </div>
      );
      if (i !== elements.length - 1)
        nutritionRows.push(<div className="nutrition-divider"></div>);
    }

    return nutritionRows;
  }
  
  render() {
    return (
      <div className="weekly-nutrient-table">
        <div className="nutrition-title">Nutrition Facts</div>
        {this.generateNutrientTableRows()}
      </div>
    );
  }
}

export default WeeklyNutrition;