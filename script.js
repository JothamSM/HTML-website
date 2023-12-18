// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function toggleExplanations()
{
var buttonPressed = false; // Flag variable to track button press

// Object mapping features to their explanations
var featureExplanations = {
  "Classic Omelette": "Ingredients: Eggs, diced vegetables (bell peppers, onions, tomatoes), cheese, salt, pepper. Instructions: Whisk eggs, pour into a heated, oiled pan. Add veggies, cheese, salt, and pepper. Fold and cook until set."
  // Add more recipes and their explanations here if needed
};

var recipesList = document.getElementById("Recipes");

for (var i = 0; i < recipesList.children.length; i++) {
  var listItem = recipesList.children[i];
  var recipe = listItem.textContent.trim();
  var explanation = featureExplanations[recipe];

  if (explanation) {
    if (!listItem.querySelector(".explanation")) {
      var explanationElement = document.createElement("p");
      explanationElement.classList.add("explanation");
      explanationElement.textContent = explanation;
      listItem.appendChild(explanationElement);
    } else {
      var explanationToRemove = listItem.querySelector(".explanation");
      explanationToRemove.parentNode.removeChild(explanationToRemove);
    }
  }
}
}
