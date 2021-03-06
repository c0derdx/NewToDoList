//var in for , while, if-else is global
//whereas let,const is local
//always use fucking let,const
const express = require("express");
const Date = require(__dirname + "/date.js");

const app = express();

let items =[];
let workItems =[];

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    let day = Date.getDate();

    res.render("list", {listTitle: day, newListItems: items});
    
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
        
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req,res) {
    res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.get("/about", function (req,res) {
    res.render("about");
});

app.post("/work",function(req,res) {
    let workItem = req.body.newItem;
    
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});