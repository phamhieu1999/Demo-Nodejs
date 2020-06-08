const express = require('express');
const router = express.Router();
const getData = require('../controller/filter')
const createCocktail = require('../controller/create')
const getId = require('../controller/read')
const deleteCocktail = require('../controller/delete')
const updateAll = require('../controller/update')
const updateOneField = require('../controller/updateOneField')
const checkToken = require('../controller/checkAuth')

// Get all 
router.get('/',checkToken, getData)

// Post a cocktail

router.post('/',checkToken, createCocktail)

// Get id
router.get('/:cocktailId',checkToken, getId)

// Delete a cocktail
router.delete('/:cocktailId',checkToken, deleteCocktail)

//Specific  update 
router.patch('/:cocktailId',checkToken, updateOneField)

// Update all 
router.put('/:cocktailId',checkToken, updateAll)


module.exports = router;


