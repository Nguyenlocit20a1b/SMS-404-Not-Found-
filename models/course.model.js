
var mongoose = require('mongoose');
// class {ID , Classname , SinhVienID }

var courseSchema = mongoose.Schema (
    {   
        couserId: {
            type : String ,
            require: true 
        },
        name : {
            type: String,
            require: true
        },
        teacherName : {
            type: String ,
            require : true  
        },
        des : {
            type: String ,
            require: true
        } 
});
var CousersList = module.exports = mongoose.model('Cousers', courseSchema);
module.exports.get = function(callback, limit){
    CousersList.find(callback).limit(limit);
}