import Router from 'koa-router'
const router = new Router({ prefix: '/produtor' });

//controllers
import ProdutorController from '../controllers/produtorController'

const produtor = new ProdutorController();

router.get('/rural/:cpf', async (ctx, next) => {
    await produtor.consultarProdutor(ctx)
});

router.post('/rural/', async (ctx, next) => {
    await produtor.criarProdutor(ctx)
});

router.put('/rural', async (ctx, next) => {
    await produtor.atualizarProdutor(ctx)
});

router.delete('/rural/:cpf', async (ctx, next) => {
    await produtor.deletarProdutor(ctx)
});

export default router.middleware()