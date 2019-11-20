import * as APIUtil from '../util/fridge_api_util';

export const RECEIVE_FRIDGE = 'RECIEVE_FRIDGE';
export const RECEIVE_FRIDGE_INGREDIENT = 'RECEIVE_FRIDGE_INGREDIENT';

const receiveFridge = fridge => ({
  type: RECEIVE_FRIDGE,
  fridge
});

const receiveFridgeIngredient = ingredient => ({
  type: RECEIVE_FRIDGE_INGREDIENT,
  ingredient: ingredient.data
});

export const fetchFridge = (userId) => dispatch => (APIUtil.fetchFridge(userId)
  .then(fridge => dispatch(receiveFridge(fridge)))
);

export const addFridgeIngredient = (userId, ingredient) => dispatch => 
  (APIUtil.addFridgeIngredient(userId, ingredient).then(
    ingredient => dispatch(receiveFridgeIngredient(ingredient)))
);