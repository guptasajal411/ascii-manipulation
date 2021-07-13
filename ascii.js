const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const figlet = require("figlet");

app.use(bodyParser.urlencoded({extended: true}));
 
figlet("Sajal Gupta", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
    console.log("listening to port 3000...");
})