const Student = require('../models/student.models');
const Class = require('../models/class.models');
const { model } = require('mongoose');

const controller = {
    index: async (req, res, next) => {
        try {
            var model = {};
            model.students = await Student.find({isDeleted: false}).lean();
            model.classes = await Class.find({isDeleted: false}).lean();
            res.render("./index", model);
            console.log(model)
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = controller;
