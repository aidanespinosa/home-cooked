// var apiURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${ingredient}`;

var button = document.querySelector(".button");

// const savButton = document.querySelector(".savButton");
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

var savButton = document.querySelector(".savB");

savButton.addEventListener("click", function (event) {
  if (!event.target.dataset.index) {
    return;
  }
  var recipeUrl = document.querySelector(".data").textContent;
  var index = event.target.dataset.index;
  var favorites = document.querySelector(".list[data-index='" + index + "']");

  var list = document.createElement("li");
  list.textContent = recipeUrl;
  favorites.appendChild(list);
  localStorage.setItem("recipe", recipeUrl);
});
