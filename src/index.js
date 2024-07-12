// const { connectDB } = require('./db/db.config.js');
import { connectDB } from "./db/db.config.js";
;import dotenv from "dotenv";
import {app} from "./app.js"
dotenv.config();

const PORT = process.env.PORT;

console.log(PORT)

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.log("Error in index.js: ", error);
  }
};

startServer();
