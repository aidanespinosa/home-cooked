// var apiURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`;

var button = document.querySelector(".button");
const savButton = document.querySelector(".savButton");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let ingredient = document.querySelector("#ingredient").value;
  ingredientData(ingredient);
});

// savButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   for (let i = 0; i <= savButton.length; i++) {
//     if (savButton[i] == savBox[i]) {
//       let list = document.createElement("li");
//       list.textContent = firstObject.sourceUrl;
//     }
//   }
//   let url = firstObject.sourceUrl;
// });

var ingredientData = function (ingredient) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43db8d39ccmsheb00f22c656a258p1ea5b5jsnec5c39455c0f",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true`,
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var firstObject = data.results[0];
      var h4Content = document.querySelector(".data");
      // var contentUrl = firstObject.sourceUrl;
      h4Content.textContent = firstObject.sourceUrl;
    });
};

// .catch((err) => console.error(err));

// ingredientData("shrimp");
// for(let i=0; i<= results.length[5]; i++){
//   const displayRecipe = function(results){
//       let recipe = data.results[i]

//   }
// }
