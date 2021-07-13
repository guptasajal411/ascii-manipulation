const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const figlet = require("figlet");

app.use(bodyParser.urlencoded({extended: true}));
 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    console.log(figlet.textSync(req.body.inputText, {
        horizontalLayout: "fitted",
        whitespaceBreak: true
    }));
    res.sendFile(__dirname + "/result.html");
})

app.listen(3000, function(){
    console.log("listening to port 3000...");
})