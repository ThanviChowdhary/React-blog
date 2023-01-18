
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
dotenv.config();

app.use(express.json());


main().catch(err => console.log(err));

//async function main() {
//  await mongoose.connect('mongodb://127.0.0.1:27017/test');
//};
//useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .

mongoose.connect('mongodb://localhost:27017/register')

    /* mongoose
     .connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
     }) */


    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
app.use("/api/auth", authRoute);

app.listen("3000", () => {
    console.log("Backend is running.");
});