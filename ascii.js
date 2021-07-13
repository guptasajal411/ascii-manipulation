const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const figlet = require("figlet");

app.use(bodyParser.urlencoded({extended: true}));
 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    figlet(req.body.inputText, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
})

app.listen(3000, function(){
    console.log("listening to port 3000...");
})