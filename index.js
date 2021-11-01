const express = require("express")
var app = express()

const bodyParser = require("body-parser");
app.use(bodyParser());

var users = [{id: 34554148,
    firstName: "Mohamed Mouayed",
    lastName: "Rassas",
    email: "rassas_university@live.com",
    class: "4"}]


app.get("/",function(request,response){
    response.send("Hello World!")
})

app.get("/students", function(request,response){
    response.send(users)
})

app.post("/students", function(req, res){
    console.log(req.body);
    users.push(req.body);
    res.sendStatus(200);
})
app.delete("/students", function(req, res){
    users.splice(users.indexOf(req.body.id), 1)
})
app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});

