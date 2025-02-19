import express from 'express'

const app = express()

app.use(express.json())

const desirePort = process.env.PORT

app.get('/ping', (_, res) => {
  console.log('Entro en /ping')
  res.send('pong')
})

app.listen(desirePort, () => {
  console.log(`Server running on port ${desirePort}`)
})