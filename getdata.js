var axios = require('axios');

function getData(string){
axios({
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bypkn/endpoint/data/v1/action/findOne',
    headers: { 
      'apikey': 'CQ435TmfqSZavDmVjFepzvpEuDrl8RzUWTeLJidow0yeBw4eCP8IAbBxgskU6KY5',
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