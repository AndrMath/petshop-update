import express from 'express'
import animaisRouter from './routers/animais.router.js'
import propriRouter from './routers/proprietarios.router.js'
import servicoRouter from './routers/servicos.router.js'
import postsRouter from './routers/posts.router.js'

const app = express()

app.use(express.json())
app.use('/proprietarios', propriRouter)
app.use('/animais', animaisRouter)
app.use('/servicos', servicoRouter)
app.use('/posts', postsRouter)

app.use((err, req, res, next) => {
  res.status(400).send({error: err.message})
})

app.listen(8080, () => {console.log('API online')})