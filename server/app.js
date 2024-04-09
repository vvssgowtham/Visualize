const Express = require("express");
const cors = require("cors");
const fetchData = require("./controllers/fetchData");

const app = Express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(`/`, fetchData);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
