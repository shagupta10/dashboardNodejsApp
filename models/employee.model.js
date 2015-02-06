/**
 * Created by shaguptaf on 5-2-2015.
 */

var mongoose=require('mongoose'),
    schema= mongoose.Schema;
var EmployeeSchema = new schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }

})

mongoose.model('Employee', EmployeeSchema);