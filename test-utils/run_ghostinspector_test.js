var request = require('request');

//GhostInspector API
request('https://api.ghostinspector.com/v1/tests/5a319034e684912918944780/execute/?apiKey=d3d0cc19fe8d69244a284e7061523b89542ba5dc', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }
})