const Cocktail = require('../model/Cocktail');
const getData = async(req,res)=>{
    
    try {
        if (req.query.search) {
            //filter name regex
            //http://localhost:4000/cocktails/?search=name
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const cocktail = await Cocktail.find({ "name": regex });
            if(cocktail) return res.status(200).json({
                status:'success',
                data:cocktail
            })
        }else{
            // get all data and filter fulltext
          //  http://localhost:4000/cocktails/?ingredients=ingredients
            const queryObj = { ...req.query };
            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gt|gte|lt|lte|eq|ne)\b/g, match => `$${match}`);
            const cocktail = await Cocktail.find(JSON.parse(queryStr));
            if(cocktail) return res.status(200).json({
                status:'success',
                data:cocktail
            })
        }
       
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error
        })
        
    }
};
// search Regex
const escapeRegex = (text) =>{
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = getData;