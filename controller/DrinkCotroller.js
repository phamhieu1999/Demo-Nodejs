const Drink = require('../model/Drink');
const createdDrink = async(req,res)=>{
    const drink = new Drink({
        strDrink:req.body.strDrink,
        strCategory:req.body.strCategory,
        strInstructions:req.body.strInstructions,
        strDrinkThumb:req.body.strDrinkThumb,
        strIngredient:req.body.strIngredient
    });
    try {
        const saveDrink = await drink.save();
        if(saveDrink) return res.status(200).json({
            status:'success',
            data:saveDrink
        })
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message:error
        })
    }
}
const deleteDrink = async (req, res) => {
    try {
        await Drink.remove({ _id: req.params.drinkId });
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
            //http://localhost:4000/drinks/?search=strDrink
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const drink = await Drink.find({ "strDrink": regex });
            if (drink) return res.status(200).json({
                status: 'success',
                data: drink
            })
        } else {
            // get all data and filter fulltext
            //  http://localhost:4000/cocktails/?strIngredient=strIngredient
    
        let query = {};
        if (req.query.strIngredient) {
            console.log(req.query.strIngredient);
            
            query.strIngredient = req.query.strIngredient;
        }
            const drink = await Drink.find({strIngredient: { $all: query.strIngredient } });
            console.log(drink[0].strIngredient);
            

            if (drink) return res.status(200).json({
                status: 'success',
                data: drink
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
        const drink = await Drink.findById(req.params.drinkId);
        if (drink) return res.status(200).json({
            status: 'success',
            data: drink
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
        const id = req.params.drinkId;
        const updateObject = req.body;
        const updateDrinkall = await Drink.update(
            { _id: id },
            { $set: updateObject }
        );
        if (updateDrinkall) return res.status(200).send('Update success..')


    } catch (error) {
        res.status(500).send(error.message)

    }
}

module.exports.updateAll = updateAll;
module.exports.getId = getId;
module.exports.getData = getData;
module.exports.deleteDrink = deleteDrink;
module.exports.createdDrink = createdDrink