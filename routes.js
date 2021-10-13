"use strict";

/** Routes for jobs. */

const express = require("express");
const { BadRequestError } = require("./expressError");
const { PORT, NFT_PROJECT_ID, NFT_MAKER_API_KEY } = require("./config");
const axios = require("axios").default;

console.log("NFT_PROJECT_ID", NFT_PROJECT_ID);

const router = express.Router({ mergeParams: true });

router.get(`/GetCounts`, async function (req, res, next) {
  try {
    async function getCounts() {
      let result = axios.get(
        `https://api.nft-maker.io/GetCounts/${NFT_MAKER_API_KEY}/${NFT_PROJECT_ID}`
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
    async function getNFT() {
      let result = axios.get(
        `https://api.nft-maker.io/GetNftDetails/${NFT_MAKER_API_KEY}/${NFT_PROJECT_ID}/${nftName}`
      );
      return result;
    }

    let result = await getNFT();
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
        `https://api.nft-maker.io/GetNftDetailsById/${NFT_MAKER_API_KEY}/${NFT_PROJECT_ID}/${nftId}`
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
        `https://api.nft-maker.io/GetNfts/${NFT_MAKER_API_KEY}/${NFT_PROJECT_ID}/all`
      );
      console.log("ALL NFTs", result);
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
  `/GetAddressForSpecificNftSale/:nftId`,
  async function (req, res, next) {
    try {
      const { nftId } = req.params;
      console.log("🚀 ~ file: routes.js ~ line 106 ~ nftId", nftId);

      let result = await axios.get(
        `https://api.nft-maker.io/GetAddressForSpecificNftSale/${NFT_MAKER_API_KEY}/${NFT_PROJECT_ID}/${nftId}/1/25000000`
      );

      console.log("result from API call", result)

      return res.json(result.data);
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
