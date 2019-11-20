const express = require("express");
const router = express.Router();
const Fridge = require('../../models/fridge');


router.get("/test", (req, res) => res.json({ msg: "This is the fridge route" }));

router.get('/:userId', (req, res) => {
  console.log(req.params.userId);
  Fridge.findOne({ userId: req.params.userId })
    .then(fridge => res.json(fridge))
    .catch(err => res.status(400).json(err));
});

router.post('/:userId/add', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  // let push = {};
  // push[req.body.ingredientId] = req.body;
  const userFridge = Fridge.findOneAndUpdate({ userId: req.params.userId }, 
    { ingredients: "test" }, function (err, data){});
  // const userFridge = Fridge.findOne({ userId: req.params.userId })
  //   .then(fridge => {
  //     console.log(fridge);
  //     const ingredient = req.body;
  //     // Fridge.update({_id: fridge._id}, {$set: { ingredients[ingredient.ingredientId]: ingredient}});
  //     // fridge.ingredients[ingredient.ingredientId] = ingredient;
  //   })
  //   .catch(err => res.status(400).json(err));
});



// router.post('/new', (req, res) => {
//   const newFridge = new Fridge({

//   });
// });

module.exports = router;