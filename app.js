const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const getdata = require("./getdata");
const scraper = require("./scraper");
const axios = require("axios");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// let contents = [];

app.get("/", function (req, res) {
    res.render("index");
});

// async function sleep(miliseconds){
//     return new Promise(resolve => setTimeout(resolve,miliseconds));
// }

app.post("/", async function (req, res) {
    // contents.push(req.body.productInput);
    
    try {
        await scraper(req.body.productInput);
        let product = await axios({
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-bypkn/endpoint/data/v1/action/find',
            headers: {
                'apikey': '',
                'Content-Type': 'text/plain'
            },
            data: `{"collection": "${req.body.productInput}-amazons","database":"test", "dataSource":"Cluster0"}`
        });
        // console.log(req.body.productInput);
        // console.log(product.data.documents);

        res.render("products", { price: product.data.documents[0].a_price, title : product.data.documents[0].a_title});
    } catch (error) {
        console.log(error)
    }

    // async function getData(){

    // }
    

});

app.listen("3000", function () {
    console.log("server is up and running on port 3000");
});

