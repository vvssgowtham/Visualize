require("dotenv").config();
const Express = require("express");
const cors = require("cors");

const app = Express();
const port = 5000;

app.use(
  cors({
    origin: "https://visualize-charts.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.post("/api/:place",async (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
