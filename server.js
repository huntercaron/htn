'use strict';

var fs = require('fs');
var express = require('express');
var http = require('http').Server(app);
var app = express();


app.use(express.static('public'));

app.listen(3000, function() {
    console.log("App listening on port 3000");
});

app.get('/test', function(request, response){

    var textData = '{"test": {"property": 69}}';

    response.json(textData);

    if (saveFile == 1) {
        console.log("Starting write to file");
        saveFile(allData, "data.json");
    }
});

//not in use just example
function grabYelpData(loc, offset) {
    return new Promise(function(resolve, reject){
        yelp.search({ term: 'food', location: loc, limit: '20', offset: '20'})
        .then((data) => {
            resolve(data);
        })
        .catch((err) => {
            console.error(err);
            reject(JSON.parse(err));
        });
    });
}

function saveFile(data, fileName) {
    console.log("Starting write to file");

    fs.writeFile(fileName, JSON.stringify(data, null, " "), (err) => {
        if (err) console.log(err);
        console.log("File Saved: " + fileName);
    });
}
