
const Cocktail = require('../model/Cocktail');


module.exports.updateOneField = async (req, res) => {
    try {
        const updateCocktail = await Cocktail.updateOne(
            { _id: req.params.cocktailId },
            { $set: { name: req.body.name } }
        );
        if (updateCocktail) return res.status(200).send('Update success..')
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}
// module.exports = updateOneField;