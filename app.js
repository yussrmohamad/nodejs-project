var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
const {MongoClient} = require('mongodb');
var app = express();
const uri = "mongodb+srv://yousr:yoyo1100@cluster0.nmlrg.mongodb.net/MoviesApi/test?retryWrites=true&w=majority";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var data = require('./movies.js');

async function main() {
	// we'll add code here soon
}

app.use('/movies',data);

app.get('/', (req, res)=>{
    res.write("nlogn.in says hello"); 
});

app.listen(port,()=>{
    console.log(`The server is running at port: ${port}`);
});