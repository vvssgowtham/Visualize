require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/api/:place",async (req, res) => {
    const {place} = req.params;
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: place,
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': process.env.APIHOST
      }
    };
  
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
    }
  });
  
  module.exports = router;