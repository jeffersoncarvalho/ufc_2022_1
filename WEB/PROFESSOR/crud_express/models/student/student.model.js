var mongoose = require('mongoose');
//criando o schema, o qual servirá para criar o modelo (collections)
var StudentSchema = mongoose.Schema(
 {
 name: {type:String, required:true, max:200},
 course: {type:String, required:true, max:200},
 ira: {type:Number, required:true, max:100},
 }
);
//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias
//(documentos)
var StudentModel = mongoose.model('students', StudentSchema);
//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = StudentModel;
