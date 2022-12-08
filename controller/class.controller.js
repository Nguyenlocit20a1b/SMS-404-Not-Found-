// import Model
const StudentList = require("../models/student.models");
const ClassList = require("../models/class.models");
const DepartmentList = require("../models/departments");

const classes = {
  //GET LIST STUDENT
  index: async (req, res, next) => {
  console.log("chay toi day");
  
  const model = {};
  model.students = await StudentList.find({isDeleted: false}).lean()
  model.departments = await DepartmentList.find({isDeleted: false}).lean();
  model.classes = await ClassList.find({isDeleted: false}).lean();
  
  res.render('class/list-class', model);
    console.log(model)
  },

  //GET CREATE CLASS
  getClassCreate: async (req, res, next) => {
    console.log("Tao Lop");
    var model = {};
    model.data = await DepartmentList.find({isDeleted: false}).lean();
    res.render("./class/add-class", model);
  },

  //POST CREATE STUDENT
  postClassCreate: (req, res, next) => {
    var data = new ClassList();
    data.name = req.body.name;
    data.teacher = req.body.teacher;
    data.departmentId = req.body.departmentId;
    data.isDeleted = false;
    data.save(function (err) {
      console.log(err);
      res.redirect('/class');
    });
  },

  //GET DETAIL CLASS
  getClassDetail: async (req, res, next) => {
    const ID = req.params.id;
    const model = {};
    model.classes = await ClassList.findById(ID).lean();
    model.students = await StudentList.find({isDeleted: false}).lean();
    model.departments = await DepartmentList.find({isDeleted: false}).lean();
    res.render("./class/detail-class", model);
    console.log("This is model",model);
  },


  //GET UPDATE
  getClassUpdate: async (req, res) => {
    const ID = req.params.id;
    var model = {};
    model.classes = await ClassList.findById(ID);
    // model.departments = await DepartmentList.fint({isDeleted : false});
    ClassList.findById(ID, function (err, adventure) {
        res.render('./class/update-class', {data: adventure});
    });   
  },


  //POST UPDATE
  postClassUpdate: (req, res, next) => {
    const data = {
      name: req.body.name,
  }
  ClassList.update({_id: req.params.id}, data, function(err, raw) {
      if (err) {
          res.send(err);
      }
      res.redirect('/class');
  });
  },


  //GET DELETE
  getClassDelete: (req, res) => {
    const ID = req.params.id;
    ClassList.findById(ID, function (err, resData) {
        console.log(" du lieu query %j", resData);
        res.render('./class/delete-class', {data: resData});
    });
  },

  //POST DELETE
  postClassDelete: (req, res, next) => {
  console.log("chay toi xoa %j", req.params.id);
  ClassList.deleteOne({ _id: req.params.id }, function (err) {
      if(err) console.log(err);
      res.redirect('/class');
    });
  },
  
};



module.exports = classes;
