

/**criando module ( tabela ) **/
const postagem = sequelize.define('postagens',{
    titulo : {
        type : db.STRING
    },
    conteudo : {
        type : db.TEXT
    }

})
//postagem.sync({force: true})
const usuario = sequelize.define('usuarios',{
    nome : {
        type : db.STRING,
        length : 50
    },
    email : {
        type : db.STRING,
        length : 64
    },
    idade : {
        type : db.INTEGER
    }
})
usuario.sync({force: true})


sequelize.authenticate().then(()=>{
    console.log('connected with success')
})
.catch((erro)=>{
   console.log('erro: ' + erro)
}) 

