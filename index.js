const express = require("express");
const server = express();

server.use(express.json());

const DB = require("./data/mainDB");

server.get("/", (req, res)=>
{
    DB("cars").select("*").then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>
    {
        res.status(500).send("Internal server error");
    });
});

server.post("/", (req, res)=>
{
    DB("Cars").insert(req.body).then((response)=>
    {
        res.status(200).json(response);
    }).catch((error)=>
    {
        res.status(500).send(error);
    })
})

server.listen(5000);