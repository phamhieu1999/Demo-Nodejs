const mongoose = require('mongoose')

const DrinkSChema = mongoose.Schema({
    strDrink: {
        type: String,
        require: true
    },
    strCategory: {
        type: String,
        require: true
    },
    strInstructions: {
        type: String,
        require: true
    },
    strDrinkThumb: {
        type: String,
        require: true
    },
    strIngredient: [

    ],
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    }
    

})


module.exports = mongoose.model('Drinks', DrinkSChema)