import Koa from 'koa'
import routes from '../config/routes'
import koaBody from 'koa-body'
import lineReader from 'line-reader'
var module = require('../data');

export default async function createServer() {
    const app = new Koa();

    console.log("start")

    lineReader.eachLine('src/produtor.csv', function(line) {
        
        let splits = line.split(';')

        module.push({
            "cpf" : splits[0],
            "nome" : splits[1],
            "idade" : splits[2]
        })

        console.log(module)
    });

    app.use(koaBody());
    app.use(routes);

    return app;
}

// export it
//module.exports.data = data;