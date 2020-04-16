function fetchTasks (done) {
    $.get('/api/tasks', function (data) {
        done(data)
    })
}

function addTask (title, description, duedate, status,priority) {
    $.post('/api/tasks', {
        title: title,
        description: description,
        duedate: duedate,
        status: status,
        priority: priority
    }, function (data) {
        done(data)
    })
}
// function updateForm(id){
//     getTask(id,function(task) {
//         document.getElementById
//     })
// }

function createTaskCard (product) {
    return $(`
    <tr>
    <td> <button type="button" style="color:black;width:100%"class="btn btn-link" onclick="getnotes(${task.id})">${task.title}</button> </td>
    <td> ${task.description} </td>
    <td> ${task.status} </td>
    <td> ${task.duedate} </td>
    <td> ${task.priority} </td>
    <td> <button id="updateTask" onclick="updateForm(${task.id},'${task.title}','${task.description}','${task.status}','${task.duedate}','${task.priority}')" class="btn btn-secondary">Edit</button> </td>
    </tr>
`
        )
}