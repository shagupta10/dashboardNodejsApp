/**
 * Created by shaguptaf on 28-1-2015.
 */
module.exports=function(app){
    require('../routes/organization.route.js')(app);
    app.use('/api/*',function(req,res,next){
        res.json({"error":"No such service Present"},404);

    });
    app.use('*',function(req,res,next){
        res.send('<html><body><h1>404 Page not found</h1></body></html>',404);

    });
}
