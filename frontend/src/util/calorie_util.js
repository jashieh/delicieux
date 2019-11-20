export const calorieCalc = (weight, height, age, gender, activityLevel) => {
  let baseMetabolism;
  if (gender === "F") {
    baseMetabolism = (10 * weight) + (6.25* height) - (5 * age) - 161;
  } else {
    baseMetabolism = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }
  switch (activityLevel) {
    case 1:
      return Math.floor(baseMetabolism * 1.2);
    case 2:
      return Math.floor(baseMetabolism * 1.35);
    case 3:
      return Math.floor(baseMetabolism * 1.475);
    case 4:
      return Math.floor(baseMetabolism * 1.57);
    case 5:
      return Math.floor(baseMetabolism * 1.75);
  }
  // Diet goals; 3500 calories a week deficit for 1 pound
};



