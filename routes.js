"use strict";

/** Routes for jobs. */

const express = require("express");
const { BadRequestError } = require("./expressError");
const {
  PORT,
  REACT_APP_NFT_PROJECT_ID,
  REACT_APP_NFT_MAKER_API_KEY,
} = require("./config");
const axios = require("axios").default;

console.log("REACT_APP_NFT_PROJECT_ID", REACT_APP_NFT_PROJECT_ID);

const router = express.Router({ mergeParams: true });

router.get(`/GetCounts`, async function (req, res, next) {
  try {
    async function getCounts() {
      let result = axios.get(
        `https://api.nft-maker.io/GetCounts/${REACT_APP_NFT_MAKER_API_KEY}/${REACT_APP_NFT_PROJECT_ID}`
      );
      return result;
    }

    let result = await getCounts();

    if (result) {
      console.log("result.data", result.data);
      return res.json(result.data);
    }


  } catch (err) {
    return next(err);
  }
});

// get info on one nft using nft name
router.get(`/GetNftDetails/:nftName`, async function (req, res, next) {
  try {
    const nftName = req.params.nftName;
    console.log("🚀 ~ file: routes.js ~ line 26 ~ nftName", nftName);
    async function getCounts() {
      let result = axios.get(
        `https://api.nft-maker.io/GetNftDetails/${REACT_APP_NFT_MAKER_API_KEY}/${REACT_APP_NFT_PROJECT_ID}/${nftName}`
      );
      return result;
    }

    let result = await getCounts();
    console.log("result.data", result.data);

    return res.json(result.data);
  } catch (err) {
    return next(err);
  }
});

// get info on one nft using nft ID
router.get(`/GetNftDetailsById/:nftId`, async function (req, res, next) {
  try {
    const nftId = req.params.nftId;
    
    console.log("🚀 ~ file: routes.js ~ line 26 ~ nftId", nftId);
    async function getCounts() {
      let result = axios.get(
        `https://api.nft-maker.io/GetNftDetailsById/${REACT_APP_NFT_MAKER_API_KEY}/${REACT_APP_NFT_PROJECT_ID}/${nftId}`
      );
      return result;
    }

    let result = await getCounts();
    console.log("result.data", result.data);

    return res.json(result.data);
  } catch (err) {
    return next(err);
  }
});

// get info on all nfts
router.get(`/GetNfts`, async function (req, res, next) {
  try {
    async function getAllNFTs() {
      let result = axios.get(
        `https://api.nft-maker.io/GetNfts/${REACT_APP_NFT_MAKER_API_KEY}/${REACT_APP_NFT_PROJECT_ID}/all`
      );
      console.log("ALL NFTs", result)
      return result;
    }

    let result = await getAllNFTs();
    console.log("result.data", result.data);

    return res.json(result.data);
  } catch (err) {
    return next(err);
  }
});

router.get(
  `/MintAndSendRandom/:numOfNfts/:receiverAddress`,
  async function (req, res, next) {
    try {
      const { numOfNfts, receiverAddress } = req.params;
      console.log(
        "🚀 ~ file: routes.js ~ line 26 ~ numOfNfts, receiverAddress",
        numOfNfts,
        receiverAddress
      );
      async function getCounts() {
        let result = axios.get(
          `https://api.nft-maker.io/GetCounts/${REACT_APP_NFT_MAKER_API_KEY}/${REACT_APP_NFT_PROJECT_ID}`
        );
        return result;
      }

      let result = await getCounts();
      console.log("result.data", result.data);

      return res.json(result.data);
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
