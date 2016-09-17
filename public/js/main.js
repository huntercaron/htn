var url = "http://localhost:3000"

function getData() {
    return new Promise(function(resolve, reject){
        var url = `/test`;
        var request = new XMLHttpRequest();
        console.log("Making request to: " + url);
        request.open('GET', url, true);
        request.onload = function() {
            resolve(JSON.parse(request.response));
        }
        request.onerror = function() {
            reject(new Error("Error on data fetch"));
        }
        request.send();
    });
}

function callServer() {
    console.log("starting call");

    getData()
        .then(function(data) {console.log(data)})
        .catch(function(err) {
            console.log(err);
        });
}
