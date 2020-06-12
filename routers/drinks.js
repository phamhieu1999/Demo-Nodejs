
const express = require('express');
const router = express.Router();
const{
    updateAll,
    getData,
    getId,
    deleteDrink,
    createdDrink
} = require('../controller/DrinkCotroller')
const checkToken = require('../controller/checkAuth')
// Get all 
router.get('/',checkToken, getData)

// Post a cocktail

router.post('/',checkToken, createdDrink)

// Get id
router.get('/:drinkId',checkToken, getId)

// Delete a cocktail
router.delete('/:drinkId',checkToken, deleteDrink)

// Update all 
router.put('/:drinkId',checkToken, updateAll)


module.exports = router;
