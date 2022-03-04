const express = require('express')
const app = express();
const consign = require('consign')
const db = require('./config/db')

app.db = db

app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({
    extended: true
}))

consign()
    .then('./config/middlewares.js')
    .then('./model')
    .then('./api/validator.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3050, () => {
    console.log('API rodando...')
})