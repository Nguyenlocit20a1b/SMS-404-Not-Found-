
var mongoose = require('mongoose');
// class {ID , Classname , SinhVienID }

var courseSchema = mongoose.Schema (
    {   
        couserId: String ,
        name: String,
        teacherName: String,
        des: String,
        image : String ,
        isDeleted: false,
    }
  );

var CousersModel = module.exports = mongoose.model('Cousers', courseSchema);
module.exports.get = function(callback, limit){
    CousersModel.find(callback).limit(limit);
}
