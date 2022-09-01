const mongoose = require("mongoose");
const HashStore = require("./models/hashstore");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(
  "mongodb+srv://doadmin:406K2Jjysfnt8751@db-mongodb-nyc3-17865-4f1d8e5d.mongo.ondigitalocean.com/admin"
);

app.use(cors());

//find all hashes in the database

app.get("/api/hashes", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  try {
    allHashes = await HashStore.find();
    const hashes = await HashStore.find()
      .limit(10)
      .skip(10 * (page - 1));
    res.status(200).json({
      message: "hashes retrieved successfully",
      data: hashes,
      length: allHashes.length,
    });
  } catch (err) {
    res.status(500).json({
      message: "error retrieving hashes",
      data: err,
    });
  }
});

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("APP is running..");
  });
}
// --------------------------deployment------------------------------

//call the function to find all hashes

app.listen(port, () => console.log(`Listening on port ${port}`));
