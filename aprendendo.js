const mongoose = require("mongoose")
//Configurando o Mongoose
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true })
.then(()=>{console.log("Mongobd Conectado...");})
.catch((error)=>{console.log("Houve um erro: " + error);});

//para criar um banco no mongo (terminal)
//use banco_loja, assim ele cria automaticamente pra você.

//Model - Usuários
//DEFININDO O MODEL

//'Schema' é um padrão do mongoose
const UsuariosSchema = mongoose.Schema({
//String number date object
    nome:{
        type: String,
        //require especifica se é obrigatório (true ou false)
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
})
//Collection
//não existem tabelas no mongo, existem collections
mongoose.model('usuarios', UsuariosSchema)

const novoUsuario = mongoose.model('usuarios')
new novoUsuario({
    nome: "Victor",
    email: "email@terra",
    idade: 19,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuario criado com sucesso")
}).catch(() => {
    console.log("Houve um erro ao registrar o usuario: " + err)
})

//mongo
//show databases;
//use students;
//show collections;
//db.usuarios.find();