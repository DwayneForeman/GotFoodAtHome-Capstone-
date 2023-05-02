//const { request, response } = require("express");

require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const { request, response } = require("express");
const Sequelize = require("Sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  submitForm: (request, response) => {
    sequelize.query(`SELECT * from meal_options`).then(([dbList]) => {
      const { name, meats, carbs, veggies } = request.body;
      console.log(request.body);
      let responseData = {};

      for (let i = 0; i < dbList.length; i++) {
        if (
          dbList[i].meats == meats &&
          dbList[i].carbs == carbs &&
          dbList[i].veggies == veggies &&
          dbList[i].mealname
        ) {
          responseData = {
            name: name,
            mealName: dbList[i].mealname,
            instructions: dbList[i].instructions,
          };
        }
      }

      console.log(responseData);
      response.status(200).send(responseData);
    });
  },

  getTips: (request, response) => {
    sequelize.query(`SELECT * from cooking_tips`).then(([dbResult]) => {
      const randomTip = dbResult[Math.floor(Math.random() * dbResult.length)];
      const { name } = randomTip;
      response.status(200).send(name);
    });
  },
};

// Replaced the SQL Database with the internal array/database below
// Database can be found in bit.io DwayneForeman/WeHaveFoodAtHomeApp
// const cookingTips = [
//   "Always read a recipe in full before starting to cook.",
//   "Use room temperature ingredients when baking.",
//   "Don't overcrowd the pan when sautéing.",
//   "Don't be afraid to experiment with spices and seasonings.",
//   "Use a meat thermometer to ensure that meat is cooked to the proper temperature.",
//   "When grilling, let the meat rest for a few minutes after cooking to allow the juices to redistribute.",
//   "Cook with high-quality ingredients for the best flavor.",
//   "Use a sharp knife to make chopping and slicing easier.",
//   "Don't forget to preheat your oven before baking.",
//   "Clean as you go to make cleanup easier.",
// ];

// Replaced the SQL Database with the internal array/database below
// Database can be found in bit.io DwayneForeman/WeHaveFoodAtHomeApp
// let mealOptionsArray = [
//   [
//     "Chicken",
//     "Rice",
//     "Carrot",
//     "SOUP ME PLEASE",
//     `1.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     2.	Cook onion and garlic until soft.:
//     3.	Add chicken broth, rice, and carrots. Simmer for 18-20 minutes until tender.:
//     4.	Return chicken to pot and stir. Serve hot, garnished with parsley or cilantro if desired.:
// `,
//   ],

//   [
//     "Chicken",
//     "Rice",
//     "Broccoli",
//     "BROCCOLI CHICKEN STIR-FRY",
//     `1.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     2.	Stir-fry broccoli in oil until crisp-tender.:
//     3.	Add cooked chicken and stir-fry sauce (soy sauce, honey, and ginger) to the pan. Cook until sauce thickens.:
//     4.	Serve hot over cooked rice.:
// `,
//   ],

//   [
//     "Chicken",
//     "Rice",
//     "Asparagus",
//     "ASPARAGUS AND CHICKEN RISOTTO",
//     `1.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     2.	Sauté onions until soft, then add rice and cook for a minute or two.:
//     3.	Gradually add chicken broth, stirring constantly until rice is tender and creamy.:
//     4.	Add cooked chicken and asparagus, cook for another minute or two, and serve hot.:
//     `,
//   ],

//   [
//     "Chicken",
//     "Pasta",
//     "Carrot",
//     "CREAMY CHICKEN PASTA",
//     `1.	Cook pasta according to package instructions. Drain and set aside.:
//     2.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     3.	Sauté onions and carrots until soft. Add chicken broth and cream to the pan, and cook until the sauce thickens.:
//     4.	Add cooked chicken and pasta, toss well, and serve hot, garnished with chopped parsley.:
//     `,
//   ],

//   [
//     "Chicken",
//     "Pasta",
//     "Broccoli",
//     "CHICKEN BROCCOLI ALFREDO",
//     `1.	Cook pasta according to package instructions. Drain and set aside.:
//     2.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     3.	Sauté broccoli until crisp-tender. Add cream and parmesan cheese to the pan and cook until the sauce thickens.:
//     4.	Add cooked chicken and pasta, toss well, and serve hot.:
// `,
//   ],

//   [
//     "Chicken",
//     "Pasta",
//     "Asparagus",
//     "ASPARAGUS CHICKEN PASTA PRIMAVERA",
//     `1.	Cook pasta according to package instructions. Drain and set aside.:
//     2.	Cook chicken in oil until golden brown and cooked through. Set aside.:
//     3.	Sauté garlic and asparagus until crisp-tender. Add chicken broth and cream to the pan and cook until the sauce thickens.:
//     4.	Add cooked chicken and pasta, toss well, and serve hot, garnished with chopped basil or parsley.:
//     `,
//   ],

//   [
//     "Chicken",
//     "Potato",
//     "Carrot",
//     "SPRINGTIME STEW",
//     `1.	In a large pot, heat olive oil over medium-high heat.:
//     2.	Add chicken and cook until browned on all sides, about 5-7 minutes. Remove chicken from the pot and set aside.:
//     3.	Add diced onions and cook until soft and translucent, about 3-4 minutes.:
//     4.	Add diced potatoes, carrots, and chicken broth. Bring to a boil, then reduce heat and let simmer for 20-25 minutes until vegetables are tender.:
//     5.	Return chicken to the pot and stir. Serve hot, garnished with fresh thyme or parsley if desired.:
//     `,
//   ],

//   [
//     "Chicken",
//     "Potato",
//     "Broccoli",
//     "HEARTY CHICKEN STEW",
//     `1.	Heat oil in a large pot over medium heat. Add chicken and cook until browned on all sides, about 5-7 minutes. Remove chicken from the pot and set aside.:
//     2.	Add onions and cook until soft and translucent, about 3-4 minutes.:
//     3.	Add diced potatoes, broccoli, chicken broth, and seasonings. Bring to a boil, then reduce heat and let simmer for 20-25 minutes until vegetables are tender.:
//     4.	Return chicken to the pot and stir. Serve hot, garnished with chopped fresh parsley.:
//     `,
//   ],

//   [
//     "Chicken",
//     "Potato",
//     "Asparagus",
//     "CHICKEN AND ASPARAGUS STEW",
//     `1.	In a large pot, heat olive oil over medium heat. Add chicken and cook until browned on all sides, about 5-7 minutes. Remove chicken from the pot and set aside.:
//     2.	Add onions and garlic to the pot and cook until soft and translucent, about 3-4 minutes.:
//     3.	Add diced potatoes, asparagus, chicken broth, and seasonings. Bring to a boil, then reduce heat and let simmer for 20-25 minutes until vegetables are tender.:
//     4.	Return chicken to the pot and stir. Serve hot, garnished with freshly grated Parmesan cheese if desired.:
//     `,
//   ],

//   [
//     "Beef",
//     "Rice",
//     "Carrot",
//     "MEATY RICE BOWL",
//     `1.	Cook the beef in a pan with oil over medium heat until browned. Set aside.:
//     2.	In the same pan, sauté the onions and garlic until soft.:
//     3.	Add beef broth, rice, and carrots. Cover and simmer for 18-20 minutes until the rice is tender and the liquid has been absorbed.:
//     4.	Return the beef to the pan and stir. Serve hot, garnished with chopped scallions if desired.:
// `,
//   ],

//   [
//     "Beef",
//     "Rice",
//     "Broccoli",
//     "STIR-FRY BEEF BOWL",
//     `1.	Cook the beef in a wok or large skillet over high heat until browned. Set aside.:
//     2.	In the same wok or skillet, sauté the broccoli and garlic until tender-crisp.:
//     3.	Add soy sauce, rice, and water. Cover and simmer for 18-20 minutes until the rice is tender and the liquid has been absorbed.:
//     4.	Return the beef to the wok or skillet and stir. Serve hot, garnished with sesame seeds if desired.:
// `,
//   ],

//   [
//     "Beef",
//     "Rice",
//     "Asparagus",
//     "ASPARAGUS BEEF RICE BOWL",
//     `
//     1.	Cook the beef in a pan with oil over medium heat until browned. Set aside.:
//     2.	In the same pan, sauté the onions and garlic until soft.:
//     3.	Add beef broth, rice, and asparagus. Cover and simmer for 18-20 minutes until the rice is tender and the liquid has been absorbed.:
//     4.	Return the beef to the pan and stir. Serve hot, garnished with chopped parsley if desired.:
//   `,
//   ],

//   [
//     "Beef",
//     "Pasta",
//     "Carrot",
//     "SPICY BEEF PASTA",
//     `1.	Cook the beef in a pan with oil over medium heat until browned. Set aside.:
//     2.	In the same pan, sauté the onions and garlic until soft.:
//     3.	Add beef broth, pasta, and carrots. Cover and simmer for 10-12 minutes until the pasta is al dente and the liquid has been absorbed.:
//     4.	Return the beef to the pan and stir. Serve hot, garnished with chopped basil if desired.:
//     `,
//   ],

//   [
//     "Beef",
//     "Pasta",
//     "Broccoli",
//     "BEEFY PASTA BROCCOLI",
//     `1.	Cook pasta according to package instructions. Drain and set aside.:
//       2.	In a separate pan, cook beef in oil until browned. Set aside.:
//       3.	In the same pan, sauté garlic and broccoli until tender.:
//       4.	Add the cooked pasta and beef to the pan. Toss until fully combined. Serve hot.:
// `,
//   ],

//   [
//     "Beef",
//     "Pasta",
//     "Asparagus",
//     "BEEFY PASTA ASPARAGUS",
//     `1.	Cook pasta according to package instructions. Drain and set aside.:
//     2.	In a separate pan, cook beef in oil until browned. Set aside.:
//     3.	In the same pan, sauté garlic and asparagus until tender.:
//     4.	Add the cooked pasta and beef to the pan. Toss until fully combined. Serve hot.:
// `,
//   ],

//   [
//     "Beef",
//     "Potato",
//     "Carrot",
//     "BEEFY POTATO CARROT",
//     `1.	Cut beef into bite-sized pieces. Season with salt and pepper.:
//     2.	Heat oil in a large skillet. Cook beef over medium heat until browned.:
//     3.	Add potatoes and carrots to the pan. Cover and cook until vegetables are tender.:
//     4.	Serve hot and enjoy.:
// `,
//   ],

//   [
//     "Beef",
//     "Potato",
//     "Broccoli",
//     "BEEFY POTATO BROCCOLI",
//     `1.	Cut beef into bite-sized pieces. Season with salt and pepper.:
//   2.	Heat oil in a large skillet. Cook beef over medium heat until browned.:
//   3.	Add potatoes and broccoli to the pan. Cover and cook until vegetables are tender.:
//   4.	Serve hot and enjoy.:
// `,
//   ],

//   [
//     "Beef",
//     "Potato",
//     "Asparagus",
//     "BEEFY GOODNESS",
//     `
//   1.	Heat oil in a skillet over medium-high heat.:
//   2.	Add cubed beef and cook until browned on all sides, about 5-7 minutes.:
//   3.	Add diced potatoes and asparagus to the skillet and cook for an additional 10-12 minutes or until the vegetables are tender.:
//   4.	Season with salt and pepper to taste and serve hot.:
//   `,
//   ],

//   [
//     "Fish",
//     "Rice",
//     "Carrot",
//     "FISH AND VEGGIES",
//     `1.	Cook rice according to package instructions and set aside.:
//     2.	Heat oil in a skillet over medium heat.:
//     3.	Add sliced carrots and cook for 3-4 minutes or until slightly softened.:
//     4.	Add fish fillets to the skillet and cook for 3-4 minutes on each side or until cooked through.:
//     5.	Serve the fish and carrots over a bed of rice, and garnish with parsley if desired.:
//     `,
//   ],

//   [
//     "Fish",
//     "Rice",
//     "Broccoli",
//     "BROCCOLI BLISS",
//     `1.	Cook rice according to package instructions and set aside.:
//     2.	Heat oil in a skillet over medium heat.:
//     3.	Add chopped broccoli and cook for 4-5 minutes or until slightly softened.:
//     4.	Add fish fillets to the skillet and cook for 3-4 minutes on each side or until cooked through.:
//     5.	Serve the fish and broccoli over a bed of rice, and garnish with lemon wedges if desired.:
// `,
//   ],

//   [
//     "Fish",
//     "Rice",
//     "Asparagus",
//     "ASPARAGUS DELIGHT",
//     `1.	Cook rice according to package instructions and set aside.:
//     2.	Heat oil in a skillet over medium heat.:
//     3.	Add asparagus spears and cook for 3-4 minutes or until slightly softened.:
//     4.	Add fish fillets to the skillet and cook for 3-4 minutes on each side or until cooked through.:
//     5.	Serve the fish and asparagus over a bed of rice, and garnish with chopped parsley if desired.:
// `,
//   ],

//   [
//     "Fish",
//     "Pasta",
//     "Carrot",
//     "FISH PASTA DELIGHT",
//     `1.	Cook pasta according to package directions. Drain and set aside.:
//     2.	In a separate pan, sauté fish in oil until browned and cooked through. Set aside.:
//     3.	In the same pan, add diced carrots and cook until tender.:
//     4.	Add cooked pasta and fish to the pan with the carrots. Stir to combine and serve hot.:
// `,
//   ],

//   [
//     "Fish",
//     "Pasta",
//     "Broccoli",
//     "FISH BROCCOLI BOWL",
//     `
//   1.	Cook pasta according to package directions. Drain and set aside.:
//   2.	In a separate pan, sauté fish in oil until browned and cooked through. Set aside.:
//   3.	In the same pan, add broccoli florets and cook until tender.:
//   4.	Add cooked pasta and fish to the pan with the broccoli. Stir to combine and serve hot.:
// `,
//   ],

//   [
//     "Fish",
//     "Pasta",
//     "Asparagus",
//     "ASPARAGUS FISH PLATE",
//     `
//   1.	Cook pasta according to package directions. Drain and set aside.:
//   2.	In a separate pan, sauté fish in oil until browned and cooked through. Set aside.:
//   3.	In the same pan, add asparagus spears and cook until tender.:
//   4.	Add cooked pasta and fish to the pan with the asparagus. Stir to combine and serve hot.:
//   `,
//   ],

//   [
//     "Fish",
//     "Potato",
//     "Carrot",
//     "FISHY POTATO AND CARROT DELIGHT",
//     `1.	In a large skillet, sauté garlic and onion in oil until tender.:
//     2.	Add fish, potatoes, carrots, and chicken broth. Cook until the fish is cooked through, and the potatoes and carrots are tender.:
//     3.	Serve hot, garnished with chopped parsley if desired.:
// `,
//   ],

//   [
//     "Fish",
//     "Potato",
//     "Broccoli",
//     "FISHY POTATO BROCCOLI",
//     `1.	In a large skillet, sauté garlic and onion in oil until tender.:
//     2.	Add fish, potatoes, broccoli, and chicken broth. Cook until the fish is cooked through, and the potatoes and broccoli are tender.:
//     3.	Serve hot, garnished with grated Parmesan cheese if desired.:
// `,
//   ],

//   [
//     "Fish",
//     "Potato",
//     "Asparagus",
//     "FISH POTATOES AND ASPARAGUS",
//     `1.	In a large skillet, sauté garlic and onion in oil until tender.:
//     2.	Add fish, potatoes, asparagus, and lemon juice. Cook until the fish is cooked through, and the potatoes and asparagus are tender.:
//     3.	Serve hot, garnished with lemon wedges if desired.:
// `,
//   ],
// ];
