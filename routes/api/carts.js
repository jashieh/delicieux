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
    items: [],
  });

  newCart.save()
    .then(cart => sres.json(cart));
});

// do I need to add a condition for when it fails, or can't be saved?
router.patch('/:cartId', (req, res) => {
  Cart.findOneAndUpdate(
    { _id: req.params.cartId }, 
    req.body, // { dates: "Updated Cart" }
    { new: true }, 
    (err, result) => err ? res.json(err) : res.json(result)
  )
});

module.exports = router;