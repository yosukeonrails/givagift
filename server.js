
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/');

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

//
// var Items=  require('./models/posts.js');
//
// app.get('/posts',function(req,res){
//
//   Post.find(function(err, items) {
//
//     if (err) {
//         return res.status(500).json({
//             message: 'Internal Server Error'
//         });
//     }
//
//     res.json(items);
// });
//
//
// });


var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);


            if (callback) {
                callback();
            }
        });
    });
};



if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
