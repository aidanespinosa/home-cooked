// var apiURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`;

var button = document.querySelector('.button');

button.addEventListener ('click', function () {
  let ingredient = document.querySelector('#ingredient').value.trim(); 
  
})



var ingredientData = function(ingredient) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43db8d39ccmsheb00f22c656a258p1ea5b5jsnec5c39455c0f',
		  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  fetch (`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`, options) 
  .then(response => response.json())
  .then(response => console.log(response))
	.catch(err => console.error(err));  
}


ingredientData('shrimp');
