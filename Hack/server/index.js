const express = require("express");
const app = express();

//Routes
const userRouter = require("./routes/users");
const quoteRouter = require("./routes/quote");

//Utils
const { jwtAuth } = require("./utils/jwtauth");

// CORS
const cors = require("cors");
app.use(cors());

//Objects
app.use(express.json());

//app.use(jwtAuth);
app.use("/users", userRouter);
app.use("/quote", quoteRouter);

//PORT
const port = 3000;
app.listen(port, "0.0.0.0", () => {
	console.log("server ready at port", port);
});