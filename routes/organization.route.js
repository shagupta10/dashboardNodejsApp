/**
 * Created by shaguptaf on 28-1-2015.
 */
var organizationCtr=require('../controllers/organization.controller.js');
module.exports=function(app){
    app.route('/api/organization')
        .get(organizationCtr.list)
        .post(organizationCtr.create);
   app.route('/api/organization/:orgId')
        .get(organizationCtr.read)
       .put(organizationCtr.update)
       .delete(organizationCtr.delete);

   app.param('orgId',organizationCtr.orgById);
};
