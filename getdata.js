var axios = require('axios');

function getData(string){
axios({
    method: 'post',
    url: '',
    headers: { 
      'apikey': '',
      'Content-Type': 'text/plain'
    },
    data : `{"collection": "${string}-amazons","database":"test", "dataSource":"Cluster0"}`
  })
.then( function (response) {
    console.log(response.data);
  return JSON.stringify(response.data);

})
.catch(function (error) {
  console.log(error);
});
}

module.exports = getData;
