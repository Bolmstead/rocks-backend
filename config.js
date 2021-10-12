"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 3001;
const NFT_PROJECT_ID = process.env.NFT_PROJECT_ID;
const NFT_MAKER_API_KEY = process.env.NFT_MAKER_API_KEY;


console.log("Cardano Cheese Backend Config:".green);
console.log("PORT:".yellow, PORT.toString());
console.log("---");

module.exports = {
  PORT,
  NFT_PROJECT_ID,
  NFT_MAKER_API_KEY
};
