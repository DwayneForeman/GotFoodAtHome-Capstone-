function highlightButton(button) {
  // Unhighlight all buttons in the group
  var groupButtons = document.getElementsByName(button.name);
  for (var i = 0; i < groupButtons.length; i++) {
    groupButtons[i].classList.remove("highlighted");
  }

  // Highlight the clicked button
  button.classList.add("highlighted");
}

// Meat Buttons
const chicken = document.querySelector(".chicken-button");
const beef = document.querySelector(".beef-button");
const fish = document.querySelector(".fish-button");

// Carb Buttons
const rice = document.querySelector(".rice-button");
const pasta = document.querySelector(".pasta-button");
const potato = document.querySelector(".potato-button");

// Veggie Buttons
const carrot = document.querySelector(".carrot-button");
const broccoli = document.querySelector(".broccoli-button");
const asparagus = document.querySelector(".asparagus-button");

//Submit button
const submitButton = document.querySelector(".food-card-div-5-form-button");

// Creating variables so I can use it in my event listeners below

let meat;
let carb;
let veggie;

// Creating event listeners so that when one of each of the meats are selected it will set it equal to the text of the meat so we can use it for the submitButton event listener function below which contains a loops which will look for the text

//Meat - event listeners

chicken.addEventListener("click", () => {
  meat = "Chicken";
  //console.log(meat);
  //alert("chicken clicked");
});

beef.addEventListener("click", () => {
  meat = "Beef";
});

fish.addEventListener("click", () => {
  meat = "Fish";
});

//Carb - event listeners

rice.addEventListener("click", () => {
  carb = "Rice";
});

pasta.addEventListener("click", () => {
  carb = "Pasta";
});

potato.addEventListener("click", () => {
  carb = "Potato";
});

//Veggie - event listeners

carrot.addEventListener("click", () => {
  veggie = "Carrot";
});

broccoli.addEventListener("click", () => {
  veggie = "Broccoli";
});

asparagus.addEventListener("click", () => {
  veggie = "Asparagus";
});

submitButton.addEventListener("click", () => {
  for (let i = 0; i < mealOptions.length; i++) {
    if (
      mealOptions[i][0] === meat &&
      mealOptions[i][1] === carb &&
      mealOptions[i][2] === veggie
    ) {
      alert(mealOptions[i][3]);
      break;
    }
  }
});

const mealOptions = [
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
  ["Fish", "Potato", "Broccoli", "FISHY POTATO AND BROCCOLI FEAST"],
  ["Fish", "Potato", "Asparagus", "FISHY POTATO AND ASPARAGUS DELIGHT"],
];

const mealOptions2 = [
  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Rice", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Rice", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Rice", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Pasta", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Pasta", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Pasta", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Potato", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Potato", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Chicken", "Potato", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Rice", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Rice", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Rice", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Pasta", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Pasta", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Pasta", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Potato", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Potato", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Beef", "Potato", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Rice", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Rice", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Rice", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Pasta", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Pasta", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Pasta", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Potato", "Carrot"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Potato", "Broccoli"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },

  {
    authorName: "Name input from form goes here",
    mealName: "Soup Me Please",
    ingredients: ["Fish", "Potato", "Asparagus"],
    instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
  2.	Cook onion and garlic until soft.
  3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
  4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
`,
  },
];
