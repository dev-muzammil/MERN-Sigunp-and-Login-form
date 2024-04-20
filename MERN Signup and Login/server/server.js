const express = require("express");
const app = express();
app.use(express.json());
const connectDb = require("./utils/db");
const router = require("./routers/auth-router")
const errorMiddleware = require("./middlewares/error-milldeware")
const cors = require("cors")
app.use(cors())
app.use(router)

app.use(errorMiddleware)
const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });
});
