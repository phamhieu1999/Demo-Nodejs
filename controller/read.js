
const Cocktail = require('../model/Cocktail');
const getId = async (req, res) => {
    try {
        const cocktail = await Cocktail.findById(req.params.cocktailId);
        if (cocktail) return res.status(200).json({
            status: 'success',
            data: cocktail
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })

    }
}
// module.exports = getId;
