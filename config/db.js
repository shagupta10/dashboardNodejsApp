/**
 * Created by shaguptaf on 5-2-2015.
 */
var config=require('./config');
mongoose = require('mongoose');

module.exports =function(){
    var db= mongoose.connect(config.db, function(err){
        if(err){
            console.error('Could not connect to mongodb');
            console.log(err);
        }
    });
    require('../models/project.model.js');
    require('../models/employee.model.js');
    require('../models/organization.model.js');

    return db;
}