function highlightButton(button) {
  if (button.classList.contains("highlighted")) {
    // If button is already highlighted, remove the highlight
    button.classList.remove("highlighted");
  } else {
    // Unhighlight all buttons in the group
    var groupButtons = document.getElementsByName(button.name);
    for (var i = 0; i < groupButtons.length; i++) {
      groupButtons[i].classList.remove("highlighted");
    }

    // Highlight the clicked button
    button.classList.add("highlighted");
  }
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const clickedButton = event.target.activeElement;

  if (clickedButton && clickedButton.name) {
    formData.append(clickedButton.name, clickedButton.value);
  }

  console.log(formData);

  await axios
    .post("http://localhost:3000/submit-form", formData)
    .then((response) => {
      console.log(response.data);
      const removeElement = document.querySelector(".section-3-waiting-card");
      if (removeElement) {
        removeElement.remove();
      }

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

      const refreshButton = document.createElement("img");
      refreshButton.src = "./images/refresh-button.png";
      refreshButton.classList.add("refresh-button");

      const recipeBook = document.createElement("img");
      recipeBook.src = "./images/recipe-book.png";
      recipeBook.alt = "recipe-book";
      recipeBook.classList.add("recipe-book");

      const recipeAppearHere = document.createElement("p");
      recipeAppearHere.textContent = "Your Recipe Will Appear Here";
      recipeAppearHere.classList.add("recipe-appear-here");

      const chefSleep = document.createElement("img");
      chefSleep.src = "./images/chef-sleep-campfire.png";
      chefSleep.alt = "chef-sleep";
      chefSleep.classList.add("chef-sleep");

      const newCard = document.createElement("div");
      newCard.classList.add("section-4-waiting-card");
      newCard.appendChild(recipeBook);
      newCard.appendChild(recipeAppearHere);
      newCard.appendChild(chefSleep);

      refreshButton.addEventListener("click", () => {
        recipeCard.remove();
        document.body.appendChild(newCard);
      });

      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.appendChild(instructions);
      recipeCard.appendChild(title);
      recipeCard.appendChild(name);
      recipeCard.appendChild(createdBy);
      recipeCard.appendChild(refreshButton);

      document.body.appendChild(recipeCard);
    })

    .catch((error) => {
      console.log(error);
    });
});

const chatButton = document.querySelector("#chat-button");

chatButton.addEventListener("click", async () => {
  axios.get("http://localhost:3000/cooking-tips").then((response) => {
    console.log(response);
    const tipsText = document.createElement("p");
    tipsText.innerHTML = response.data;
    tipsText.classList.add("tips-text");

    const tipsTitle = document.createElement("p");
    tipsTitle.innerHTML = "TIPS";
    tipsTitle.classList.add("tips-title");

    const tipsImage = document.createElement("img");
    tipsImage.src = "./images/notification.png";
    tipsImage.classList.add("tips-image");

    const xButton = document.createElement("img");
    xButton.src = "./images/xButton.png";
    xButton.classList.add("x-button");
    xButton.addEventListener("click", function () {
      popUpWindow.remove();
    });

    const popUpWindow = document.createElement("div");
    popUpWindow.classList.add("pop-up-window");
    popUpWindow.appendChild(tipsText);
    popUpWindow.appendChild(tipsTitle);
    popUpWindow.appendChild(tipsImage);
    popUpWindow.appendChild(xButton);

    document.body.appendChild(popUpWindow); // adding the pop-up window to the DOM
  });
});
