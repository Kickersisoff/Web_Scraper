const axios = require("axios");


async function amazonHtml(amazonUrl) {
    const { data: html } = await axios.get(amazonUrl, {
      headers: {
        'User-Agent': 'Mozilla/'
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    return html;
  }

module.exports = amazonHtml;
