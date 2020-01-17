// const assertEqual = require('./assertEqual');
const fs = require('fs');

// const name = process.argv[2];

const request = require('request');


const fetchBreedDescription = function(nameCat, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${nameCat}`, (error, response, body) => {
    // console.log(body);
    const data = JSON.parse(body);
    if (data[0] === null){
      return description = null;
    } else if (error) {
      console.log('You have an error :', error.message); 
      // Print the error if one occurred null; 
      return description = null;
    } else if (response.statusCode >= 300) {
      // console.log('breed name is not found ');
      return description = null;
    } else if(data[0] != null){
      
      console.log("INSIDE INDEX", data[0].description);
      callback(null, (data[0].description));
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      // console.log('Description:', data[0].description);
      fs.writeFile(`${nameCat}.html`, body,function(err) {
        if (err) throw err;
        // console.log('Saved!');
        // console.log(typeof body);
        // console.log(data);
        // console.log(typeof data);
      });
    }
  
  });
};

// fetchBreedDescription("Siberian", (error, description) => {
// });

module.exports = { fetchBreedDescription };

//======== Split de callback function

// const mySpecialFunction = (error, description) => {
// };

// fetchBreedDescription(name, mySpecialFunction);

// { if (error == null) {
//   description == null;
// }