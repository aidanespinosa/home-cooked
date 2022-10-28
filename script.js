// var apiURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`;

var button = document.querySelector(".button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let ingredient = document.querySelector("#ingredient").value;
  ingredientData(ingredient);
});

var ingredientData = function (ingredient) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43db8d39ccmsheb00f22c656a258p1ea5b5jsnec5c39455c0f",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`,
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      appendResults(results);
      console.log(results);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
  function appendResults(results) {
  var resultsContainer = document.getElementById("api-results");
  for (var i = 0; i < results.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = results[i].title
    resultsContainer.appendChild(div);
  }
}  
};



// .catch((err) => console.error(err));

// ingredientData("shrimp");
// for(let i=0; i<= results.length[5]; i++){
//   const displayRecipe = function(results){
//       let recipe = data.results[i]

//   }
// }
