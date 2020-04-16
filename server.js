const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/Assets', express.static(path.join(__dirname, 'Assets')))
app.use('/api', require('./routes/api').route)

app.listen(process.env.PORT || 3333, () => console.log('Server started at http://localhost:3530'))