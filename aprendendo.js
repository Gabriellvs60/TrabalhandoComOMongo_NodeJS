const mongoose = require("mongoose")
//Configurando o Mongoose
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true })
.then(()=>{console.log("Mongobd Conectado...");})
.catch((error)=>{console.log("Houve um erro: " + error);});

//para criar um banco no mongo (terminal)
//use banco_loja, assim ele cria automaticamente pra você.