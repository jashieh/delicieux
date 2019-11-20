const express = require("express");
const router = express.Router();
const Cart = require('../../models/Cart');

// gets using the user_id?
router.get('/:userId', (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json(err));
});

// do I need to make sure it doesn't already exist?
router.post('/', (req, res) => {
  const newCart = new Cart({
    userId: req.body.userId,
    items: [],
  });
  
  newCart.save()
    .then(cart => res.json(cart));
});

// do I need to add a condition for when it fails, or can't be saved?
router.put('/cart_id', (req, res) => {
  Cart.findOne(req.params.cart_id)
    .then(cart => {
      cart.items = req.body.items;
      cart.save()
        .then(cart => res.json(cart));
    })
    .catch(err => res.status(404).json(err));
});