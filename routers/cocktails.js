const express = require('express');
const router = express.Router();
const getData = require('../controller/filter')
const createCocktail = require('../controller/create')
const getId = require('../controller/read')
const deleteCocktail = require('../controller/delete')
const updateAll = require('../controller/update')
const updateOneField = require('../controller/updateOneField')

// Get all 
router.get('/', getData)

// Post a cocktail

router.post('/', createCocktail)

// Get id
router.get('/:cocktailId', getId)

// Delete a cocktail
router.delete('/:cocktailId', deleteCocktail)

//Specific  update 
router.patch('/:cocktailId', updateOneField)

// Update all 
router.put('/:cocktailId', updateAll)


module.exports = router;


