const koa = require('koa')
const app = new koa()

app.use(async ctx => {
    ctx.body = '<h1>欢迎来到匠心托教</h1>';
})

app.listen(3000, () => {
    console.log('server running at 3000')
})