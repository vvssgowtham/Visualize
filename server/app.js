import Express from "express";
import cors from "cors";
import axios from "axios";
import { fetchData } from "./controllers/fetchData.js";

const app = Express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/line-chart", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: "London",
      days: "3",
    },
    headers: {
      "X-RapidAPI-Key": "e84d3c38a2msh74ab9345b56b322p170214jsn43efe8a07ad1",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
