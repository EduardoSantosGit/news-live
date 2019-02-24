import Router from 'koa-router'
const router = new Router({ prefix: '/news' });

//controllers
import SoccerController from '../controllers/soccerController'

const soccer = new SoccerController();

router.get('/soccer/championships', async (ctx, next) => {
    await soccer.getRoute(ctx)
});

export default router.middleware()