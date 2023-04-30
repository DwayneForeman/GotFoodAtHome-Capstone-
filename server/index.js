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

const { submitForm, getTips } = require("./controller.js");

//Now we need to setup our newly created sever to accept json invoked. J son is a method of the express class therefore, we use DOT notation
app.use(express.json());

//Finally, we need to also "use" cors invoked by using the
app.use(cors());

// Let;s listen to the app to make sure we are connected on port 3k
app.listen(3000, () => console.log("Take us to warp 3000"));

//------------------------------MEAL OPTIONS----------------------------------------

// POST request - submitForm code in controller file

app.post("/submit-form", submitForm);

//GET request - getTips code in controller file

app.get("/cooking-tips", getTips);
