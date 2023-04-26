// const { default: axios } = require("axios");
// const { response } = require("express");

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
console.log(carrot);
const broccoli = document.querySelector(".broccoli-button");
const asparagus = document.querySelector(".asparagus-button");

//Submit button
const submitButton = document.querySelector(".food-card-div-5-form-button");

// Creating variables so I can use it in my event listeners below

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
  console.log(carb);
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

//-----------------------------

let meat;
let carb;
let veggie;

//   axios.get("http://localhost:5500/recipes").then((data) => {
//     console.log(data);
//     //   let mealOptions = response.data;
//     //   for (let i = 0; i < mealOptions.length; i++) {
//     //     if (
//     //       mealOptions[i][0] === meat &&
//     //       mealOptions[i][1] === carb &&
//     //       mealOptions[i][2] === veggie
//     //     ) {
//     //       alert(mealOptions[i][3]);
//     //       break;
//     //     }
//     //   }
//   });
// });

// Get the form

const form = document.getElementById("form");

const formData = new FormData(form);
let selectedMeat = null;
let selectedCarb = null;
let selectedVeggie = null;

const meatButtons = document.querySelectorAll('button[name="meats"]');
meatButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedMeat = event.target.value;
    formData.set("meats", selectedMeat);
    console.log();
  });
});

const carbButtons = document.querySelectorAll('button[name="carbs"]');
carbButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedCarb = event.target.value;
    formData.set("carbs", selectedCarb);
  });
});

const veggieButtons = document.querySelectorAll('button[name="veggies"]');
veggieButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedVeggie = event.target.value;
    formData.set("veggies", selectedVeggie);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const clickedButton = event.target.activeElement;

  if (clickedButton && clickedButton.name) {
    formData.append(clickedButton.name, clickedButton.value);
  }

  console.log([...formData]);

  axios
    .post("/your/url", formData)
    .then((response) => {
      // handle response
    })
    .catch((error) => {
      // handle error
    });
});

// Listen for teh submit

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);

//   formData.append("meats", "chicken");
//   formData.append("meats", "beef");
//   formData.append("meats", "fish");

//   formData.append("carbs", "rice");
//   formData.append("carbs", "pasta");
//   formData.append("carbs", "potato");

//   formData.append("veggies", "carrot");
//   formData.append("veggies", "broccoli");
//   formData.append("veggies", "asparagus");

//   console.log([...formData]);

//   const clickedButton = event.target.activeElement;
//   formData.append(clickedButton.name, clickedButton.value);
//   axios
//     .post("/your/url", formData)
//     .then((response) => {
//       // handle response
//     })
//     .catch((error) => {
//       // handle error
//     });
// });
// form.addEventListener("submit", (e) => {
//   var formData = {
//     name: $(`input[name=name]`).val(),
//     meats: $(`button[name=meats].highlighted`).val(),
//     carbs: $(`button[name=carbs].highlighted`).val(),
//     veggies: $(`button[name=veggies].highlighted`).val(),
//   };

//   axios.post("/api/submit", formData).then((response) => {
//     console.log("form submitted", response);
//   });
// });

// const mealOptions2 = [
//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Rice", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Rice", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Rice", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Pasta", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Pasta", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Pasta", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Potato", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Potato", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Chicken", "Potato", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Rice", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Rice", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Rice", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Pasta", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Pasta", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Pasta", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Potato", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Potato", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Beef", "Potato", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Rice", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Rice", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Rice", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Pasta", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Pasta", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Pasta", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Potato", "Carrot"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Potato", "Broccoli"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },

//   {
//     authorName: "Name input from form goes here",
//     mealName: "Soup Me Please",
//     ingredients: ["Fish", "Potato", "Asparagus"],
//     instructions: `1.	Cook chicken in oil until golden brown and cooked through. Set aside.
//   2.	Cook onion and garlic until soft.
//   3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.
//   4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.
// `,
//   },
// ];
