/**
 * Created by shaguptaf on 29-1-2015.
 */
var express=require('express'),
path= require('path'),
favicon=require('serve-favicon'),
logger=require('morgan'),
bodyParser=require('body-parser'),
methodOverride=require('method-override'),
    cookieParser=require('cookie-parser'),
cors = require('cors');

module.exports=function(){
    var app=express();
   // app.use(path);
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(methodOverride('_method'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname,'../public')));
    app.use(cors());
    return app;

}



