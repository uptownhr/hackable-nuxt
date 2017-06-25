const app = module.exports = require("express")(),
  cors = require('cors')

app.use(cors({origin: process.env.SITE_URL}))


app.get('/', (req,res) => {
  res.send('working 2')
})