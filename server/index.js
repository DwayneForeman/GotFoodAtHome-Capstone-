//Please ignore my notes, it helps me to continue to learn and really understand whats happening as I go

// ------------------------- SERVER SETUP -------------------------

// In order to get our server working we will need to use Node Package Manager to install two packages in TERMINAL.
//Use: npm i express cors

//Lets's bring express into our project by using the require() syntax and settings it equal to a variable. I named it express but I could have named the variable ANYNAME
const express = require("express");

//Let's bring cors into our project by using the require() syntax and settings it equal to a variable. I named it cors but I could have named the variable ANYNAME
const cors = require("cors");

//Now we need to use the new varable we created, invoke it() and equal it to a new variable. This is typically named app
const app = express();

//Now we need to setup our newly created sever to accept json invoked. J son is a method of the express class therefore, we use DOT notation
// Also, notice we use .use() which is also a method of the express class. Think of it as we actually need to use this for our app
app.use(express.json());

//Finally, we need to also "use" cors invoked by using the
app.use(cors());

app.listen(5500, () => console.log("Take us to warp 5500"));

//------------------------------MEAL OPTIONS----------------------------------------

app.get("/api/recipes", (request, response) => {
  let mealOptionsArray = [
    ["Chicken", "Rice", "Carrot", "SOUP ME PLEASE"],
    ["Chicken", "Rice", "Broccoli", "BROCCOLI CHICKEN STIR-FRY"],
    ["Chicken", "Rice", "Asparagus", "ASPARAGUS AND CHICKEN RISOTTO"],
    ["Chicken", "Pasta", "Carrot", "CREAMY CHICKEN PASTA"],
    ["Chicken", "Pasta", "Broccoli", "CHICKEN BROCCOLI ALFREDO"],
    ["Chicken", "Pasta", "Asparagus", "ASPARAGUS CHICKEN PASTA PRIMAVERA"],
    ["Chicken", "Potato", "Carrot", "SPRINGTIME STEW"],
    ["Chicken", "Potato", "Broccoli", "HEARTY CHICKEN STEW"],
    ["Chicken", "Potato", "Asparagus", "CHICKEN AND ASPARAGUS STEW"],
    ["Beef", "Rice", "Carrot", "MEATY RICE BOWL"],
    ["Beef", "Rice", "Broccoli", "STIR-FRY BEEF BOWL"],
    ["Beef", "Rice", "Asparagus", "ASPARAGUS BEEF RICE BOWL"],
    ["Beef", "Pasta", "Carrot", "SPICY BEEF PASTA"],
    ["Beef", "Pasta", "Broccoli", "BEEFY PASTA BROCCOLI"],
    ["Beef", "Pasta", "Asparagus", "BEEFY PASTA ASPARAGUS"],
    ["Beef", "Potato", "Carrot", "BEEFY POTATO CARROT"],
    ["Beef", "Potato", "Broccoli", "BEEFY POTATO BROCCOLI"],
    ["Beef", "Potato", "Asparagus", "BEEFY GOODNESS"],
    ["Fish", "Rice", "Carrot", "FISH AND VEGGIES"],
    ["Fish", "Rice", "Broccoli", "BROCCOLI BLISS"],
    ["Fish", "Rice", "Asparagus", "ASPARAGUS DELIGHT"],
    ["Fish", "Pasta", "Carrot", "FISH PASTA DELIGHT"],
    ["Fish", "Pasta", "Broccoli", "FISH BROCCOLI BOWL"],
    ["Fish", "Pasta", "Asparagus", "ASPARAGUS FISH PLATE"],
    ["Fish", "Potato", "Carrot", "FISHY POTATO AND CARROT DELIGHT"],
    ["Fish", "Potato", "Broccoli", "FISHY POTATO BROCCOLI"],
    ["Fish", "Potato", "Asparagus", "FISH POTATOES AND ASPARAGUS"],
  ];
  response.status(200).send(mealOptionsArray);
});

// Route handler for POST request
app.post("/api/submit", (request, response) => {
  const { name, meats, carbs, veggies } = request.body;

  // const name = req.body.name;
  // const meat = req.body.meats;
  // const carb = req.body.carbs;
  // const veggie = req.body.veggies;

  res.send("Received your form submission!");
});
