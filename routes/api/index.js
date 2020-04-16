const route = require('express').Router()

route.use('/notes', require('./notes'))
route.use('/tasks', require('./tasks'))
route.use('/edit',require('./edit'))

exports = module.exports = {
    route
}