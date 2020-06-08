const Cocktail = require('../model/Cocktail');


const createCocktail = async(req,res)=>{
    const cocktail = new Cocktail({
        name:req.body.name,
        category:req.body.category,
        instruction:req.body.instruction,
        image:req.body.image,
        ingredients:req.body.ingredients
    });
    try {
        const saveCocktail = await cocktail.save();
        if(saveCocktail) return res.status(200).json({
            status:'success',
            data:saveCocktail
        })
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message:error
        })
    }
}

const deleteCocktail = async (req, res) => {
    try {
        await Cocktail.remove({ _id: req.params.cocktailId });
        res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}

const getData = async (req, res) => {

    try {
        if (req.query.search) {
            //filter name regex
            //http://localhost:4000/cocktails/?search=name
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const cocktail = await Cocktail.find({ "name": regex });
            if (cocktail) return res.status(200).json({
                status: 'success',
                data: cocktail
            })
        } else {
            // get all data and filter fulltext
            //  http://localhost:4000/cocktails/?ingredients=ingredients
            const queryObj = { ...req.query };
            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gt|gte|lt|lte|eq|ne)\b/g, match => `$${match}`);
            const cocktail = await Cocktail.find(JSON.parse(queryStr));
            if (cocktail) return res.status(200).json({
                status: 'success',
                data: cocktail
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })

    }
};
// search Regex
const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

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

const updateAll = async (req, res) => {
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

module.exports.updateAll = updateAll;
module.exports.getId = getId;
module.exports.getData = getData;
module.exports.createCocktail = createCocktail;
module.exports.deleteCocktail = deleteCocktail;