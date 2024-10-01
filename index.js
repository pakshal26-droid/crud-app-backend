import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World how are you doing!");
});

//CONNECTING TO DB
mongoose
  .connect(
    "mongodb+srv://pakshaljain54:XDMtESjrX8txJ265@backenddb.lzjyg.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Example app listening keenly port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
