const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const products = [
    {
        id: 1,
        name: "Phone",
        price: 300,
    },
    {
        id: 2,
        name: "Imac",
        price: 800,
    },
];

const price = [
    {
        id: 1,
        price: 500,
        name: "https://vk.com/bidlopub",
    },
    {
        id: 2,
        price: 900,
        name: "https://vk.com/bidlopub"
    },
];

app.get("/products", (req, res) => res.json(products));
app.get("/price", (req, res) => res.json(price));

app.listen(3000, () => console.log("Listening on port 3000..."));