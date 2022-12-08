const CousersList = require( "../models/course.model");

exports.getCousers = (req , res ) => {
    CousersList.get(function(err , couserData) {
        if(err){
            console.log('co loi xay ra');
        }else{
            // console.log(" du lieu query %j", data);
            res.render('./cousers/list-couser' , {couserData:couserData} );
        } 
    })
   
}
// CREATE 
exports.getCouserCreate = (req , res ) => {
    res.render('./cousers/add-couser');
}
exports.postCouserCreate = (req , res ) => {
    var couserData = new CousersList();
    couserData.couserId = req.body.couserId;
    couserData.name = req.body.name ;
    couserData.teacherName = req.body.teacherName;
    couserData.des = req.body.des;
    couserData.save(function (err) {
        console.log (err);
        res.redirect('/cousers')
    });
}
// DETAIL 
exports.getCouserDetail = (req , res) => {
    const ID = req.params.id;
    CousersList.findById(ID , function (err , dataCouser){
        res.render('./cousers/detail-couser' , {couserData : dataCouser});
    });
}
// UPDATE 
exports.getCouserUpdate = (req , res ) => {
    const ID = req.params.id;
    CousersList.findById(ID , function (err , dataCouser){
        res.render('./cousers/update-couser' , {couserData : dataCouser});
    });
}

exports.postCouserUpdate = (req , res  , next) => {
    const couserData = {
        couserId : req.body.couserId,
        name : req.body.name ,
        teacherName : req.body.teacherName,
        des : req.body.des
    };
    CousersList.updateOne({_id: req.params.id}, couserData, function(err, raw) {
        if (err) {
            res.send(err);
        }
        res.redirect('/cousers');
    });
};
// DELETE 

exports.getDelete = (req , res ) => {
    const ID = req.params.id;
    CousersList.findById(ID, function (err, dataCouser) {
        console.log(" du lieu query %j", dataCouser);
        res.render('./cousers/delete-couser', {couserData: dataCouser});
    }); 
}

exports.postDelete = (req , res) => {
    console.log (req.params.id);
    CousersList.deleteOne({_id: req.params.id} , function (err) {
        if(err)  
            console.log(err );
            res.redirect('/cousers');
         
    });
}