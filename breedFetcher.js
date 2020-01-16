
const fs = require('fs');
const nameCat =process.argv[2];
console.log(nameCat);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${nameCat}`, (error, response, body) => {
  if(error){
    console.log('breed name is not found error:', error); // Print the error if one occurred
  }else if(response.statusCode === 200){
    console.log('breed name is not found ');
  }else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    
  fs.writeFile(`${nameCat}.html`, body,function (err) {
    if (err) throw err;
    console.log('Saved!');
  
    console.log(typeof body)
    
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  });
  }
  


});



