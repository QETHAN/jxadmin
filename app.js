const koa = require('koa')
const app = new koa()

app.use(async ctx => {
    ctx.body = '老婆，我爱你❤️';
})

app.listen(3000, () => {
    console.log('server running at 3000')
})