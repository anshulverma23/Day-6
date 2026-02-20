const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://anshul:nl7EsN59eD1ZD7UM@cluster0.fmssoqo.mongodb.net/Day-6",
    )
    .then(() => {
      console.log("connected to database");
    })

}

connectToDb();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
