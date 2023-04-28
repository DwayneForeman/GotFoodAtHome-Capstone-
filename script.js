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
let selectedCarb = null;
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
      document.querySelector(
        ".section-3-waiting-card"
      ).innerHTML = `<section class="align-dom"><h3>${JSON.stringify(
        response.data
      )}<h3> Lets cook man</section>`;
    })
    .catch((error) => {
      console.log(error);
    });
});
