const express = require('express');

const app = express();

const fs = require('fs');

function getAllBooks(){
    let data = fs.readFileSync('./Books.json');
    return JSON.parse(data);
}

// req ---> Request
// res ---> Response

app.get("/a", function(req,res) {
    res.writeHead(200);
    res.end('Hey i am a');
});

app.get("/b", function(req,res) {
    res.writeHead(200);
    res.end('Hey i am b');
});


app.get("/books", function(req,res) {
    let books = getAllBooks();
    if(books){
        res.setHeader("Content-Type","Application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books));
    }
    else{
        res.writeHead(500);
    }
    res.writeHead(200);
    res.end('Hey i am b');
});

app.listen(8080, () => {
    console.log('Application Started');
});