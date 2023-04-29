function highlightButton(button) {
  // Unhighlight all buttons in the group
  var groupButtons = document.getElementsByName(button.name);
  for (var i = 0; i < groupButtons.length; i++) {
    groupButtons[i].classList.remove("highlighted");
  }

  // Highlight the clicked button
  button.classList.add("highlighted");
}

// Get the form

const form = document.getElementById("form");

const formData = {};
let selectedMeat = null;
let selectedCarbs = null;
let selectedVeggie = null;

const meatButtons = document.querySelectorAll('button[name="meats"]');
meatButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedMeat = event.target.value;
    formData.meats = selectedMeat;
  });
});

const carbButtons = document.querySelectorAll('button[name="carbs"]');
carbButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedCarbs = event.target.value;
    formData.carbs = selectedCarbs;
  });
});

const veggieButtons = document.querySelectorAll('button[name="veggies"]');
veggieButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedVeggie = event.target.value;
    formData.veggies = selectedVeggie;
  });
});

const firstNameInput = document.querySelector('input[name="first-name"]');
firstNameInput.addEventListener("input", (event) => {
  formData.name = event.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const clickedButton = event.target.activeElement;

  if (clickedButton && clickedButton.name) {
    formData.append(clickedButton.name, clickedButton.value);
  }

  console.log(formData);

  axios
    .post("http://localhost:3000/submit-form", formData)
    .then((response) => {
      console.log(response.data);
      const removeElement = document.querySelector(".section-3-waiting-card");
      removeElement.remove();

      const formattedInstructions = response.data.instructions
        .replace(/\n/g, "") // remove newline character
        .replace(/\}/g, "") // remove th curly brace
        .replace(/\t/g, "") // replace tabs with line breaks
        .replace(/:/g, "<br><br>"); // replace colon with 2 breaks

      const instructions = document.createElement("div");
      instructions.innerHTML = formattedInstructions;
      instructions.classList.add("recipe-text"); // apply CSS to thE class

      const createdBy = document.createElement("p");
      createdBy.innerHTML = "Created by:";
      createdBy.classList.add("createdBy-signiture");

      const formattedTitle = response.data.mealName;

      const formattedName = response.data.name;

      const name = document.createElement("p");
      name.innerHTML = formattedName;
      name.classList.add("recipe-signiture");

      const title = document.createElement("p");
      title.innerHTML = formattedTitle;
      title.classList.add("recipe-title");

      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.appendChild(instructions);
      recipeCard.appendChild(title);
      recipeCard.appendChild(name);
      recipeCard.appendChild(createdBy);

      document.body.appendChild(recipeCard);
    })
    .catch((error) => {
      console.log(error);
    });
});

// axios.get("http://localhost:3000/cooking-tips").then((response) => {
//   console.log(response);
// });
