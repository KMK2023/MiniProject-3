"use strict";
const Smurf = require("./posts");
async function init() {
  try {
  await Smurf.sync();
  console.log("Smurf model synchronised with the database");
}
catch(error) {
    console.error("Error synchronizing Smurf model:", error);
    // Handle the error as needed, e.g., throw it, log it, etc.
}
}
//Call the init function to synchronize the model on application startup
init();

// Export the Smurf model
module.exports = {
  Smurfs,
};