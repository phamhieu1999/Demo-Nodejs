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
module.exports = createCocktail;
