import Koa from 'koa'
import routes from '../config/routes'

export default async function createServer() {
    const app = new Koa();

    app.use(routes)

    return app;
}