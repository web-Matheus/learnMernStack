const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users")

const cors = require("cors")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://matheus:3bZfVZtQEmz729ug@cluster0.scc5178.mongodb.net/learnmern?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err)
        } else{
            res.json(result)
        }
    })
})

app.post("/newUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save()

    res.json(user)
})
app.listen(3001, () => {
    console.log("server runs at port 3001")
})