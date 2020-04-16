const Tasks = require('../../db').Task
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all tasks
    Tasks.findAll()
        .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    // Add a new task
    Tasks.create({
        title: req.body.title,
        description: req.body.description,
        duedate:req.body.duedate,
        status:req.body.status,
        priority:req.body.priority
    }).then((task) => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding task"+error
        })
    })
})

exports = module.exports = route