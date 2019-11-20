const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');
const app = express();

const users = require('./routes/api/users');
const recipes = require('./routes/api/recipes');
const fridge = require('./routes/api/fridge');
const carts = require('./routes/api/carts');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/recipes', recipes);
app.use('/api/fridge', fridge);
app.use("/api/carts", carts);


app.get("/api/recipes/", (req, res) => {
    const recipe = new Recipe({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 17,
        gaps: "no",
        lowFodmap: false,
        ketogenic: false,
        whole30: false,
        sourceUrl: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        spoonacularSourceUrl: "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
        aggregateLikes: 209,
        spoonacularScore: 83,
        healthScore: 19,
        creditsText: "Full Belly Sisters",
        license: "CC BY-SA 3.0",
        sourceName: "Full Belly Sisters",
        pricePerServing: 163.15,
        ingredients: [
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consitency": "solid",
            "name": "butter",
            "original": "1 tbsp butter",
            "originalString": "1 tbsp butter",
            "originalName": "butter",
            "amount": 1,
            "unit": "tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 10011135,
            "aisle": "Produce",
            "image": "cauliflower.jpg",
            "consitency": "solid",
            "name": "cauliflower florets",
            "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalString": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "amount": 2,
            "unit": "cups",
            "meta": [
              "frozen",
              "thawed",
              "cut into bite-sized pieces"
            ],
            "metaInformation": [
              "frozen",
              "thawed",
              "cut into bite-sized pieces"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 473.176,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1041009,
            "aisle": "Cheese",
            "image": "cheddar-cheese.png",
            "consitency": "solid",
            "name": "cheese",
            "original": "2 tbsp grated cheese (I used romano)",
            "originalString": "2 tbsp grated cheese (I used romano)",
            "originalName": "grated cheese (I used romano)",
            "amount": 2,
            "unit": "tbsp",
            "meta": [
              "grated",
              "(I used romano)"
            ],
            "metaInformation": [
              "grated",
              "(I used romano)"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 1034053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consitency": "liquid",
            "name": "extra virgin olive oil",
            "original": "1-2 tbsp extra virgin olive oil",
            "originalString": "1-2 tbsp extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "amount": 1,
            "unit": "tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.jpg",
            "consitency": "solid",
            "name": "garlic",
            "original": "5-6 cloves garlic",
            "originalString": "5-6 cloves garlic",
            "originalName": "garlic",
            "amount": 5,
            "unit": "cloves",
            "meta": [],
            "metaInformation": [],
            "measures": {
              "us": {
                "amount": 5,
                "unitShort": "cloves",
                "unitLong": "cloves"
              },
              "metric": {
                "amount": 5,
                "unitShort": "cloves",
                "unitLong": "cloves"
              }
            }
          },
          {
            "id": 20420,
            "aisle": "Pasta and Rice",
            "image": "fusilli.jpg",
            "consitency": "solid",
            "name": "pasta",
            "original": "6-8 ounces pasta (I used linguine)",
            "originalString": "6-8 ounces pasta (I used linguine)",
            "originalName": "pasta (I used linguine)",
            "amount": 6,
            "unit": "ounces",
            "meta": [
              "(I used linguine)"
            ],
            "metaInformation": [
              "(I used linguine)"
            ],
            "measures": {
              "us": {
                "amount": 6,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 170.097,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1032009,
            "aisle": "Spices and Seasonings",
            "image": "red-pepper-flakes.jpg",
            "consitency": "solid",
            "name": "red pepper flakes",
            "original": "couple of pinches red pepper flakes, optional",
            "originalString": "couple of pinches red pepper flakes, optional",
            "originalName": "couple of red pepper flakes, optional",
            "amount": 2,
            "unit": "pinches",
            "meta": [
              "red"
            ],
            "metaInformation": [
              "red"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "pinches",
                "unitLong": "pinches"
              },
              "metric": {
                "amount": 2,
                "unitShort": "pinches",
                "unitLong": "pinches"
              }
            }
          },
          {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consitency": "solid",
            "name": "salt and pepper",
            "original": "salt and pepper, to taste",
            "originalString": "salt and pepper, to taste",
            "originalName": "salt and pepper, to taste",
            "amount": 2,
            "unit": "servings",
            "meta": [
              "to taste"
            ],
            "metaInformation": [
              "to taste"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 2,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 11291,
            "aisle": "Produce",
            "image": "spring-onions.jpg",
            "consitency": "solid",
            "name": "scallions",
            "original": "3 scallions, chopped, white and green parts separated",
            "originalString": "3 scallions, chopped, white and green parts separated",
            "originalName": "scallions, chopped, white and green parts separated",
            "amount": 3,
            "unit": "",
            "meta": [
              "white",
              "green",
              "separated",
              "chopped"
            ],
            "metaInformation": [
              "white",
              "green",
              "separated",
              "chopped"
            ],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 3,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 14106,
            "aisle": "Alcoholic Beverages",
            "image": "white-wine.jpg",
            "consitency": "liquid",
            "name": "white wine",
            "original": "2-3 tbsp white wine",
            "originalString": "2-3 tbsp white wine",
            "originalName": "white wine",
            "amount": 2,
            "unit": "tbsp",
            "meta": [
              "white"
            ],
            "metaInformation": [
              "white"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 99025,
            "aisle": "Pasta and Rice",
            "image": "breadcrumbs.jpg",
            "consitency": "solid",
            "name": "whole wheat bread crumbs",
            "original": "1/4 cup whole wheat bread crumbs (I used panko)",
            "originalString": "1/4 cup whole wheat bread crumbs (I used panko)",
            "originalName": "whole wheat bread crumbs (I used panko)",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
              "whole wheat",
              "(I used panko)"
            ],
            "metaInformation": [
              "whole wheat",
              "(I used panko)"
            ],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 59.147,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          }
        ],
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        readyInMinutes: 45,
        servings: 2,
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        imageType: "jpg",
        nutrition: {
          nutrients: [
            {
              "title": "Calories",
              "amount": 584.46,
              "unit": "cal",
              "percentOfDailyNeeds": 29.22
            },
            {},
            {},
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
        },
        cuisines: [],
        dishTypes: [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        diets: [],
        occasions: [],
        winePairing: {
          "pairedWines": [],
          "pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
          "productMatches": []
        },
        "instructions": "",
        "analyzedInstructions": []
      });

        
    recipe.save()
      .then(recipe => res.json(recipe));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}