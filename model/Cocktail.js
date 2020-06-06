const mongoose = require('mongoose')

const CocktailSChema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    instruction: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    ingredients: [

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


module.exports = mongoose.model('Cocktails', CocktailSChema)