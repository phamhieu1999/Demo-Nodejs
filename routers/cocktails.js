const express = require('express');
const router = express.Router();
const {
    updateAll,
    getData,
    getId,
    deleteCocktail,
    createCocktail

} = require('../controller/cocktailController')

// Get all 
router.get('/', getData)

// Post a cocktail

router.post('/', createCocktail)

// Get id
router.get('/:cocktailId', getId)

// Delete a cocktail
router.delete('/:cocktailId', deleteCocktail)

// Update all 
router.put('/:cocktailId', updateAll)


module.exports = router;


