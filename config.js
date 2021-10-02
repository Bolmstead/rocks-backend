"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 3001;
const REACT_APP_NFT_PROJECT_ID = process.env.REACT_APP_NFT_PROJECT_ID;
const REACT_APP_NFT_MAKER_API_KEY = process.env.REACT_APP_NFT_MAKER_API_KEY;


console.log("Cardano Cheese Backend Config:".green);
console.log("PORT:".yellow, PORT.toString());
console.log("---");

module.exports = {
  PORT,
  REACT_APP_NFT_PROJECT_ID,
  REACT_APP_NFT_MAKER_API_KEY
};
