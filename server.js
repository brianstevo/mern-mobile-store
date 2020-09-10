require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => {
		// console.log(con.connection);
		console.log("DB connected");
	});

//MiddleWare
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api", authRouter);
app.use("/api", userRouter);

// app.use(express.static("client/build"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`App listening on port ${port} and on http://127.0.0.1:${port}`);
});
