const Cocktail = require('../model/Cocktail');

const deleteCocktail = async(req,res)=>{
    try {
         await Cocktail.remove({_id:req.params.cocktailId});
         res.status(200).json({
             status:'success',
             data:null
         })
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error
        })
    }
}
module.exports = deleteCocktail;