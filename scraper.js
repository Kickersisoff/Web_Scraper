const cheerio = require("cheerio");
const mongoose = require("./mongodb.connect/mongodb.connect");
const httpRequest = require("./httpRequest");


// const results = [];
let img = [];


async function sleep(miliseconds){
  return new Promise(resolve => setTimeout(resolve,miliseconds));
}

async function scraper(stringName){

    const url = 'https://www.amazon.in/s?k='+stringName;

    const html = await httpRequest(url);
    const $ = await cheerio.load(html);
    const mongoClient = await mongoose();
    const Schema = mongoClient.Schema;
    const model_schema = new Schema({
      a_id : {type: String, index:{unique:true}},
      a_title : String,
      a_price : String,
      a_rating : String,
      a_titleLink : String,
      a_imgLink : [String],
    });
    
    const product_list = mongoClient.model(stringName+"-Amazon", model_schema);

    try {
    $('.s-asin').each((index,element)=> { 
            const id = $(element).attr('data-asin');
            const title = $(element).find('h2 span').text();
            const price = $(element).find('.a-price-whole').text();
            const rating = $(element).find('a i span').text();
            const titleLink = 'https://www.amazon.in'+ $(element).find('h2 a').attr('href');
            const img = $(element).find('.s-image').attr('srcset').split(',');
            // const result = {id,title, price, rating, titleLink, img };
            // results.push(result);
            product_list.create({
              a_id : id,
              a_title : title,
              a_price : price,
              a_rating : rating,
              a_titleLink : titleLink,
              a_imgLink : img }, function(err, result){
                if (err) return handleError(err);
              });
        });
        // console.log(results);
    } catch (error) {
        console.log(error);
    }

}

module.exports = scraper;