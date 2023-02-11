const axios = require("axios");


async function amazonHtml(amazonUrl) {
    const { data: html } = await axios.get(amazonUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    return html;
  }

module.exports = amazonHtml;