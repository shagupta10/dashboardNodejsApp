/**
 * Created by shaguptaf on 29-1-2015.
 */

var organizationList= [
    {
        id:1,
        name: "Synerzip",
        projects: [
            {
                id:"1",
                name: "PDX",
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                data: [300, 500, 100],
                red_days: 1,
                no_people:6
            }
    ],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
            {
                id: 1,
                name: "abc"
            },
            {
                id: 2,
                name: "bcs"
            }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]

    },
    {
        id: "2",
        name: "Starks",
        projects: [
            {
                id:"1",
                name: "PDX",
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                data: [300, 500, 100],
                red_days: 1,
                no_people:6
            },
            {
                id:"2",
                name:  "CMS",
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                data: [300, 500, 100],
                red_days: 2,
                no_people:3
            }
        ],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
            {
                id: 1,
                name: "abc"
            },
            {
                id: 2,
                name: "bcs"
            }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]

    },
    {
        id: "3",
        name: "Lanisters",
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ],
        projects: [{
            id:"2",
            name:  "CMS",
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100],
            red_days: 2,
            no_people:3
        }],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
            {
                id: 1,
                name: "abc"
            },
            {
                id: 2,
                name: "bcs"
            }]
    },
    {
        id:4,
        name: "Synerzipkkkk",
        projects:[
        {
            id:"1",
            name: "PDX",
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100],
            red_days: 1,
            no_people:6
        },
        {
            id:"2",
            name:  "CMS",
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100],
            red_days: 2,
            no_people:3
        }],
        owner: "Vinayak",
        numOfPeople: 30,
        billableHeadCount:20,
        benchCount:10,
        employee:[
            {
                id: 1,
                name: "abc"
            },
            {
                id: 2,
                name: "bcs"
            }],
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]

    }

];

var projectsList = [
    {
        id:"1",
        name: "PDX",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 1,
        no_people:6
    },
    {
        id:"2",
        name:  "CMS",
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100],
        red_days: 2,
        no_people:3
    }

];

organizationList=[];
var mongoose = require('mongoose'),
    Organization = mongoose.model('Organization');

exports.list=function(req,res){
    Organization.find()
        .populate('employee')
        .populate('projects')
        .exec(function(err,organizationList){
            if(err){
                console.log(err);
                next(err);
            }

            res.send(organizationList);
        });
}


exports.create=function(req,res,next){
    var organization = Organization(req.body);
    organization.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send(err.err);
        }
        else{

            res.send(organization);
        }
    })
}


exports.orgById=function(req,res,next,id){
    var searchOrg={};
     /*   var searchOrg={};
        organizationList.forEach(function(item1,index){
            if(item1.id==id){
                searchOrg=item1;
            }
        }) ;
    if(searchOrg){
        req.searchOrg=searchOrg;
        next();
    }
    else{
        var error={
            error:"org not found"
        }
        res.status(404).send(error);
    }
*/
    Organization.findOne()
        .populate('employee')
        .populate('projects')
        .exec({_id:id},function(err,searchOrg){

        if(err){
            next(err);
        }
        if(searchOrg){
            req.searchOrg=searchOrg;
            next();
        }
        else{
            var error={
                error:"Org not found"
            }
            res.status(404).send(error);
        }

    });


}

exports.read=function(req,res){
    res.send(req.searchOrg);
}


exports.update=function(req,res){
    var org = req.searchOrg;
    if(req.body.name!=undefined){
        org.name=req.body.name;
    }
    if(req.body.projects!=undefined){
        org.projects=req.body.projects;
    }
    org.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send(err.err);
        }
        else{
            res.send(org);
        }
    })

}

exports.delete=function(req,res){
    var org = req.searchOrg;
    org.remove(function(err){
        if(err){
            console.log(err);
            res.status(400).send(err.err);
        }
        else{
            res.send(org);
        }
    })



}