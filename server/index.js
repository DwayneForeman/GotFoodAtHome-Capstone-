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

//-----------------------------------------------------------------------

app.get("api/recipes", (request, response) => {});
