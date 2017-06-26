const app = module.exports = require("express")(),
  cors = require('cors')

app.use(cors({origin: process.env.SITE_URL}))


app.get('/', (req, res) => {
  res.send('working 2')
})

app.post('/login', (req, res) => {
  let user = {
    email: 'testing 123'
  }

  res.send({ user, token: 'asdfasdf'})
})