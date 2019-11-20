const express = require("express");
const router = express.Router();
const Cart = require('../../models/cart');

// gets using the user_id?
router.get('/:userId', (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json(err));
});

// do I need to make sure it doesn't already exist?
router.post('/:userId', (req, res) => {
  const newCart = new Cart({
    userId: req.params.userId,
    dates: {}
  });

  newCart.save()
    .then(cart => res.json(cart));
});

// For addCartDate
router.patch('/:cartId/addDate/', (req, res) => {
  let options = { new: true }
  let update = { $set: {} };
  update["$set"][`dates.${req.body.date}`] = {
    "BREAKFAST": undefined,
    "LUNCH": undefined,
    "DINNER": undefined,
  };

  Cart.findOneAndUpdate(
    { _id: req.params.cartId }, 
    update,
    options, 
    (err, result) => err ? res.status(400).json(err) : res.json(result)
  )
});

router.patch("/:cartId/addMeal/", (req, res) => {
  let options = { new: true };
  let update = { $set: {} };
  update["$set"][`dates.${req.body.date}.${req.body.time}`] = req.body.recipeId;

  Cart.findOneAndUpdate(
    { _id: req.params.cartId },
    update,
    options,
    (err, result) => (err ? res.status(400).json(err) : res.json(result))
  );
});

module.exports = router;