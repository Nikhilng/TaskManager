$(function () {
    let Taskname = $('#name')
    let TaskDesciption = $('#email')
    let Duedate = $('#date')
    let status = $('#status')
    let priority = $('#priority')
    
    $('#btnTaskAdd').click(function () {

        addTask(
            Taskname.val(),
            TaskDesciption.val(),
            Duedate.val(),
            status.val(),
            priority.val(),
            function (addedTask) {
                alert("Added " + addedTask.Taskname + " to Database")
            }
        )


    })

})