const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB'
,{userNewUrlParser:true},(err)=>{
        if(!err){
            console.log("MongoDB connection Succeeded")
        }else{
            console.log('Error In Db Connection' + err)
        }
    });


require('./employee.model');