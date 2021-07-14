const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const figlet = require("figlet");
var colors = require('colors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function (req, res) {
    switch (req.body.colorChoice) {
        case "black":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).black);
            break;
        case "red":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).red);
            break;
        case "green":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).green);
            break;
        case "yellow":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).yellow);
            break;
        case "rainbow":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).rainbow);
            break;
        case "america":
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }).america);
            break;
        default:
            console.log(figlet.textSync(req.body.inputText, {
                horizontalLayout: "fitted",
                whitespaceBreak: true
            }));
            break;
    }
    res.sendFile(__dirname + "/result.html");
})

app.listen(3000, function () {
    console.log("listening to port 3000...".yellow);
})