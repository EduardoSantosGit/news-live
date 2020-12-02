import server from '../config/server'
var jsonData = require('../data'); //dados produtor

export default class ProdutorController
{
    async consultarProdutor(ctx)
    {
        ctx.body = "",
        ctx.status = 200
    }

    async criarProdutor(ctx){
        console.log(ctx.request.body)
    }

    async atualizarProdutor(ctx){

    }

    async deletarProdutor(ctx){

    }

}