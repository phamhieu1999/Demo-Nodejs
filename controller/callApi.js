const request = require('request')
const Drink = require('../model/Drink')

const postApi = (req, res) => {
    request('https://www.thecocktaildb.com/api/json/v1/1/random.php', async(error, response, body) => {
        console.log('error:', error); // Print the error if one occurred and handle it
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        const data = JSON.parse(body)
      try {
        const drinkCocktail = new Drink(
            {
                strDrink: data.drinks[0].strDrink,
                strCategory: data.drinks[0].strCategory,
                strInstructions: data.drinks[0].strInstructions,
                strDrinkThumb: data.drinks[0].strDrinkThumb,
                strIngredient: [
                    data.drinks[0].strIngredient1,
                    data.drinks[0].strIngredient2,
                    data.drinks[0].strIngredient3,
                    data.drinks[0].strIngredient4
                ]
            }
        )
      const saveDrink = await  drinkCocktail.save();
      if(saveDrink) return res.status(200).json({
          status:'success',
          data:saveDrink
      })
      } catch (error) {
          res.status(500).json({
              status:'fail',
              message:error
          })
          
      }
    });

}


module.exports = postApi
