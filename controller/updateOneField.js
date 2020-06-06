
const Cocktail = require('../model/Cocktail');


const updateOneField = async(req,res)=>{
    try {
        const updateCocktail = await Cocktail.updateOne(
            {_id:req.params.cocktailId},
            {$set:{name:req.body.name}}
        ); 
        if(updateCocktail) return res.status(200).json({
            status:'success',
            data:updateCocktail
        })
    } catch (error) {
       res.status(404).json({
           status:'fail',
           message:error
       })
    }
}
module.exports = updateOneField;