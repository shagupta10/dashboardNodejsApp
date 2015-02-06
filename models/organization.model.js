/**
 * Created by shaguptaf on 5-2-2015.
 */

var mongoose=require('mongoose'),
    Schema= mongoose.Schema;
var Project=mongoose.model('Project');
var Employee=mongoose.model('Employee');
var OrganizationSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    projects:[{
        type:Schema.ObjectId,
        ref:'Project'


    }],
    numOfPeople:{
        type: Number,
        required: false
    },
    billableHeadCount:{
        type: Number,
        required: false

    },
    benchCount:{
        type: Number,
        required: false

    },
    employee:{
        type:Schema.ObjectId,
        ref:'Employee'


    }

})

mongoose.model('Organization', OrganizationSchema);