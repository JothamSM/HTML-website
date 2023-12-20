// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
//var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function printBreakfast()
{
    let recipeText = document.getElementById("recipeText");
    let dropDown = document.getElementById("breakfastDropDown");
    let num = dropDown.options[dropDown.selectedIndex].value;
    let dDText = dropDown.options[dropDown.selectedIndex].textContent;

    let recipes = [
        ["Ingredients: Eggs, diced vegetables (bell peppers, onions, tomatoes), cheese, salt, pepper. Instructions: Whisk eggs, pour into a heated, oiled pan. Add veggies, cheese, salt, and pepper. Fold and cook until set."],
        ["Ingredients: Rolled oats, milk (or yogurt), chia seeds, honey, fruits (berries, banana slices). Instructions: Mix oats, milk, chia seeds, and honey. Refrigerate overnight. Top with fruits before serving."],
        ["Ingredients: Whole grain bread, avocado, eggs, salt, pepper, red pepper flakes. Instructions: Toast bread, mash avocado on top. Poach an egg and place on the avocado. Season with salt, pepper, and red pepper flakes."],
        ["Ingredients: Greek yogurt, granola, mixed berries, honey. Instructions: Layer Greek yogurt, granola, and berries in a glass. Drizzle with honey."],
        ["Ingredients: Pancake mix, milk, eggs, butter, maple syrup. Instructions: Mix pancake batter. Cook on a griddle. Serve with butter and maple syrup."],
        ["Ingredients: Eggs, bell peppers, spinach, cheese, salt, pepper. Instructions: Whisk eggs, add veggies, cheese, salt, and pepper. Bake until set."],
        ["Ingredients: Frozen fruits, yogurt, milk, honey, toppings (granola, sliced fruits, nuts). Instructions: Blend frozen fruits, yogurt, milk, and honey. Pour into a bowl. Add toppings."],
        ["Ingredients: Flour tortilla, scrambled eggs, black beans, salsa, cheese. Instructions: Fill tortilla with scrambled eggs, black beans, salsa, and cheese. Roll and heat"],
        ["Ingredients: Cooked quinoa, almond milk, sliced almonds, berries, honey. Instructions: Mix quinoa with almond milk. Top with almonds, berries, and honey."],
        ["Ingredients: Bread slices, eggs, milk, cinnamon, vanilla extract, syrup. Instructions: Dip bread in a mixture of eggs, milk, cinnamon, and vanilla. Cook until golden. Serve with syrup."]
    ];
    let pasteImg = document.getElementById("breakfastImg");
    let images = [
      ["Classic-Omelette.jpg"],
      ["Overnight-Oats.jpeg"],
      ["Avocado-Toast.jpeg"],
      ["Greek-Yogurt-Parfait.jpg"],
      ["Pancakes.jpg"],
      ["Vegetables-Cheese-Frittata.jpg"],
      ["Smoothie-Bowl.jpg"],
      ["Breakfast-Burrito.jpg"],
      ["Quinoa-Breakfast-Bowl.jpg"],
      ["French-Toast-Sticks.jpg"]
    ];

    pasteImg.src =  "Images/Breakfast/" + images[num];
    recipeText.innerHTML = dDText + " " + recipes[num];
}
function printLunch()
{
  let recipeText = document.getElementById("recipeText");
  let dropDown = document.getElementById("lunchDropdown");
  let num = dropDown.options[dropDown.selectedIndex].value;
  let dDText = dropDown.options[dropDown.selectedIndex].textContent;


  let recipes = [
    ["Ingredients: Grilled chicken, romaine lettuce, Caesar dressing, whole wheat tortilla. Instructions: Fill tortilla with chicken, lettuce, and dressing. Roll up and serve."],
    ["Ingredients: Cooked quinoa, chickpeas, cucumber, cherry tomatoes, feta cheese, lemon vinaigrette. Instructions: Toss ingredients together. Drizzle with vinaigrette."],
    ["Ingredients: Sliced turkey, avocado, lettuce, tomato, whole grain wrap. Instructions: Layer ingredients on the wrap. Roll and enjoy."],
    ["Instructions: Assemble sandwich with mozzarella, tomatoes, and basil. Grill until cheese melts. Drizzle with balsamic glaze."],
    ["Ingredients: Quinoa, roasted sweet potatoes, chickpeas, avocado, kale, tahini dressing. Instructions: Arrange ingredients in a bowl. Drizzle with tahini dressing."],
    ["Ingredients: Pasta, cherry tomatoes, olives, feta cheese, cucumber, Italian dressing. Instructions: Cook pasta. Toss with veggies, feta, and dressing."],
    ["Ingredients: Tuna, celery, red onion, mayo, lettuce leaves. Instructions: Mix tuna, celery, onion, and mayo. Spoon into lettuce leaves."],
    ["Ingredients: Flour tortillas, black beans, corn, bell peppers, cheese, salsa. Instructions: Fill tortillas with beans, corn, peppers, and cheese. Cook until cheese melts. Serve with salsa."],
    ["Ingredients: Chicken breast, broccoli, bell peppers, snap peas, soy sauce. Instructions: Stir-fry chicken and veggies in soy sauce. Serve over rice."],
    ["Ingredients: Chicken breast, spinach, feta cheese, garlic, lemon, olive oil. Instructions: Mix spinach, feta, garlic, and lemon. Stuff into chicken breast. Bake until cooked."]
  ]
  let pasteImg = document.getElementById("lunchImg");
  let images = [
    ["Chicken-Caesar-Salad-Wrap.jpg"],
    ["Quinoa-Chickpea-Salad.png"],
    ["Turkey-Avocado-Wrap.jpg"],
    ["Caprese-Panini.jpg"],
    ["Vegetarian-Buddha-Bowl.jpg"],
    ["Mediterranean-Pasta-Salad.jpg"],
    ["Tuna-Salad-Lettuce-Cups.jpg"],
    ["Veggie-Quesadilla.jpg"],
    ["Chicken-Vegetable-Stir-Fry.jpg"],
    ["Spinach-Feta-Stuffed-Chicken.jpg"]
  ];

  pasteImg.src =  "Images/Lunch/" + images[num];
  recipeText.innerHTML = dDText + " " + recipes[num];
}
function printDinner()
{
  let recipeText = document.getElementById("recipeText");
  let dropDown = document.getElementById("dinnerDropDown");
  let num = dropDown.options[dropDown.selectedIndex].value;
  let dDText = dropDown.options[dropDown.selectedIndex].textContent;


  let recipes = [
    ["Ingredients: Salmon fillets, lemon, dill, garlic, olive oil. Instructions: Season salmon with lemon, dill, and garlic. Bake until flaky."],
    ["Ingredients: Chickpeas, tomatoes, onions, garlic, curry spices. Instructions: Cook chickpeas with tomatoes, onions, garlic, and curry spices. Serve over rice."],
    ["Ingredients: Beef strips, broccoli, carrots, soy sauce, ginger. Instructions: Stir-fry beef and veggies in soy sauce and ginger. Serve over noodles."],
    ["Ingredients: Bell peppers, ground turkey, quinoa, black beans, tomatoes. Instructions: Stuff peppers with a mixture of turkey, quinoa, beans, and tomatoes. Bake until peppers are tender."],
    ["Ingredients: Chicken thighs, lemon, herbs (rosemary, thyme), olive oil. Instructions: Marinate chicken in lemon, herbs, and oil. Grill until cooked through."],
    ["Ingredients: Shrimp, broccoli, fettuccine pasta, Alfredo sauce. Instructions: Cook shrimp and broccoli. Toss with cooked pasta and Alfredo sauce."],
    ["Ingredients: Eggplant slices, marinara sauce, mozzarella cheese, breadcrumbs. Instructions: Layer eggplant with marinara and cheese. Bake until bubbly."],
    ["Ingredients: Salmon fillets, teriyaki sauce, mixed vegetables. Instructions: Marinate salmon in teriyaki sauce. Bake with mixed vegetables."],
    ["Ingredients: Chickpeas, spinach, tomatoes, onions, garlic, cumin. Instructions: Cook chickpeas with spinach, tomatoes, onions, garlic, and cumin. Serve warm."],
    ["Ingredients: Chicken breast, pasta, cherry tomatoes, pesto sauce. Instructions: Cook chicken, pasta, and tomatoes. Toss with pesto sauce."]
  ]
  let pasteImg = document.getElementById("dinnerImg");
 

  let images = [
    ["Baked-Salmon.jpg"],
    ["Vegetarian-ChickPea-Curry.jpg"],
    ["Beef and Vegetable Stir-Fry.jpg"],
    ["Stuffed Bell Peppers with Ground Turkey.jpg"],
    ["Lemon-Herb-Grilled-Chicken.jpg"],
    ["Broccoli-Shrimp-Alfredo.jpg"],
    ["Vegetarian Eggplant Parmesan.jpg"],
    ["Teriyaki Salmon with Vegetables.jpg"],
    ["Chickpea and Spinach Stew.png"],
    ["Pesto Chicken Pasta.jpg"]
  ] 
  pasteImg.src =  "Images/Dinner/" + images[num];
  recipeText.innerHTML = dDText + " " + recipes[num];
}
function resetBox()
{
  let output = document.getElementById("Output");

  output.innerHTML = "";
}

function christmasCss() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index
  const currentDay = currentDate.getDate(); // Get the day of the month
  const navbar = document.getElementById('navbar');

  // Check the current month and day, and change the stylesheet accordingly
  if (currentMonth == 12 && currentDay >= 20 && currentDay <= 25) {
    navbar.className += "Christmas";
  } else {
    navbar.className = "navbar";
  }
}
