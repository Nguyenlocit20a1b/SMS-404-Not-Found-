/* viet lai voi db mongodb su dung mongoss */
/* todolist   (id, title, content) */

var mongoose = require('mongoose');

const classSchema = mongoose.Schema(
    {
        name: String,
        teacher: String,
        numOfStudent: Number,
        departmentId: String,
        isDeleted: false,
    }
  );


var ClassModel = module.exports = mongoose.model('Classes', classSchema);
module.exports.get = function(callback, limit){
    ClassModel.find(callback).limit(limit);
}
