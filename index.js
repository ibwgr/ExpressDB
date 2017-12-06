/**
 * Created by Armin on 06.12.2017.
 */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import DB from './db'

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const data = new DB()
const pg = require('pg');

let router = express.Router()

router.use(function(req, res, next){
    next()
})

router.route('/')

    .get(function (req, res){
        data.getCustomersfromDB(res)
    })

app.use('/', router)

app.use(function(err, req, res, next){
    delete err.stack
    res.status(err.status || 500).json(err)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})