const express = require("express");
const router = express.Router();
const Fridge = require('../../models/fridge');

router.get("/test", (req, res) => res.json({ msg: "This is the fridge route" }));

router.get('/:userId', (req, res) => {
  Fridge.findOne({ userId: req.params.userId })
  .then(fridge => res.json(fridge))
  .catch(err => res.status(400).json(err));
});

router.patch('/:userId/addNewIngredient', (req, res) => {
  let update = { "$set": {}};
  let options = { "upsert": true, new: true };
  console.log(req.body)
  // update["$set"]["ingredients." + req.body.ingredientId] = req.body;
  update["$set"]["ingredients." + req.body.id] = req.body;

  
  Fridge.findOneAndUpdate({ userId: req.params.userId }, 
    update, options, function (err, data){
      if(err) return res.status(400).json(err);
      return res.json(req.body);
  });
});


router.patch('/:userId/modifyIngredient', (req, res) => {
  let update = { "$inc": {}};
  let options = { "upsert": true, new: true };
  // update["$inc"]["ingredients." + req.body.ingredientId + ".amount"] = req.body.amount;
  update["$inc"]["ingredients." + req.body.id + ".amount"] = req.body.amount;
  
  Fridge.findOneAndUpdate({ userId: req.params.userId }, 
    update, options, function (err, data){
      if(err) return res.status(400).json(err);

      // req.body.ingredientId


      // Remove ingredients from fridge if there is no more
      if(data.ingredients[req.body.id].amount <= 0) {
        Fridge.findOneAndUpdate({ userId: req.params.userId }, { $unset: {ingredients: req.body.id}},
          {new: true})
          .then(data => res.json(data.ingredients[req.body.id]))
          .catch(err => res.status(400).json(err))
      } else {
        return res.json(data.ingredients[req.body.id]);
      }
  });
});

router.patch('/:userId/modifyFridge', (req, res) => {
  let update = { "$inc": {}};
  let options = { "upsert": true, new: true };
  // update["$inc"]["ingredients." + req.body.ingredientId + ".amount"] = req.body.amount;
  let ingredients = req.body;
  
  Object.keys(ingredients).forEach(id => {
    update["$inc"]["ingredients." + id + ".amount"] = ingredients[id].amount;
  });

  Fridge.findOneAndUpdate({ userId: req.params.userId }, 
    update, options, function (err, data){
      if(err) return res.status(400).json(err);
      let unset = { "$unset": {}};
      let i = 0;
      Object.keys(data.ingredients).forEach(id => {
        if(data.ingredients[id].amount <= 0) {
          unset["$unset"]["ingredients." + id] = "";
          i++;
        }
      });
      // console.log(data.ingredients);
      // Remove ingredients from fridge if there is no more
      if(i > 0) {
        Fridge.findOneAndUpdate({ userId: req.params.userId }, unset,
          {new: true})
          .then(data => res.json(data))
          .catch(err => res.status(400).json(err))
      } else {
        return res.json(data);
      }
  });


});


module.exports = router;