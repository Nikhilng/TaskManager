const Tasks = require('../../db').Task
const route = require('express').Router();


  route.put('/:id', async(req, res) => {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).send({
            error: 'task id must be an integer',
        })
    }
    let task = await Tasks.findByPk(req.params.id)
    if (!task) {
        return res.status(404).send({
            error: 'No task found with id = ' + req.params.id,
        })
    }
 
    let priority = ['Low', 'Medium', 'High']
    if (!priority.includes(req.body.Priority)) {
        return res.status(400).send({ error: 'Task priority not provided' })
    }
 
    if (isNaN(Date.parse(req.body.due))) {
        return res.status(400).send({ error: 'Task due date not provided' })
    }

    task.priority = req.body.Priority
    task.status = req.body.done
    task.duedate = req.body.due
 
    await task.save()
 
    res.status(202).send({ success: 'Task details updated', newData: task })
 
})

exports = module.exports = route