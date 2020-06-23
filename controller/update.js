const Cocktail = require('../model/Cocktail');



module.exports.updateAll = async (req, res) => {
    try {
        const id = req.params.cocktailId;
        const updateObject = req.body;
        const updateCocktailall = await Cocktail.update(
            { _id: id },
            { $set: updateObject }
        );
        if (updateCocktailall) return res.status(200).send('Update success..')


    } catch (error) {
        res.status(500).send(error.message)

    }
}

// module.exports = updateAll;