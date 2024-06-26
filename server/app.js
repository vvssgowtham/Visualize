require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const fetchData = require("./routes/fetchData");

const app = Express();
const port = 5000;

app.use(
  cors({
    origin: "https://visualize-charts.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use('/',fetchData);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
