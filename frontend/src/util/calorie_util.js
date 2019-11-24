// Returns daily calorie requirement based on personal profile (calories per day)
export const calorieCalc = (user) => {
  let baseMetabolism;
  let calorieOffset = 0;
  let caloriesToKg = 7716;
 
  if (user.gender === "F") {
    baseMetabolism = (10 * user.weight) + (6.25* user.height) - (5 * user.age) - 161;
  } else {
    baseMetabolism = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5;
  }
  
  if (user.weeklyTarget !== 0) {
    calorieOffset = caloriesToKg * user.weeklyTarget;
  }
  
  switch (user.activityLevel) {
    case 1:
      return Math.floor(baseMetabolism * 1.2) + calorieOffset/7;
    case 2:
      return Math.floor(baseMetabolism * 1.375) + calorieOffset/7;
    case 3:
      return Math.floor(baseMetabolism * 1.55) + calorieOffset/7;
    case 4:
      return Math.floor(baseMetabolism * 1.725) + calorieOffset/7;
  }
  // Diet goals; 3500 calories a week deficit for 1 pound
};

// calculates % of week's nutritions you should be getting from # of meals
// selected, and how much of that is being provided by the selected meals;
export const nutritionCalc = (dailyCal, mealCount, totalCarb, totalFat, totalProtein) => {
  // let protein = 50 * dailyCal / 2000 // weighed a bit more for these meals being 'bigger'
  // let carb = 300 * dailyCal / 2000 
  // let protein = 65 * dailyCal / 2000 
  
  // % of total protein 
  // totalProtein / protein; 
  // totalCarb / carb;
  // totalFat / fat;
};

