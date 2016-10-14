var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password:{type:String, require:true}
});

var Users = mongoose.model('Users', UserSchema);
                      // POst = model name on Mongo
                      //
module.exports = Users;
