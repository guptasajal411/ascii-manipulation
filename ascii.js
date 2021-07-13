const express = require("express");
const app = express();
const figlet = require("figlet");
 
figlet("Sajal Gupta", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

app.listen(3000, function(){
    console.log("listening to port 3000...");
})