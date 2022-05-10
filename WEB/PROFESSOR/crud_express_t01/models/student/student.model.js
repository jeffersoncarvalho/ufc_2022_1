var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var StudentSchema = mongoose.Schema(
    {
        name: { type: String, required: true, max: 100 },
        course: { type: String, required: true, max: 100 },
        ira: { type: Number, required: true},
    }
);

var StudentModel = mongoose.model('students', StudentSchema)

module.exports =StudentModel