$(function () {
      edithide();
      div3_hide();
    let taskList = $('#task-list')

    fetchTasks(function (tasks) {
        taskList.empty()
        for (task of tasks) {
            taskList.append(createTaskCard(task))
        }
    })

})


//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}
function get()
{
    var tomorrow = new Date();
    var dd = tomorrow.getDate()+1;
    tomorrow.setDate(dd);
    document.querySelector("#date").valueAsDate = tomorrow;
}

function updateForm(id,title,description,status,duedate,priority){
        document.getElementById('editform').style.display = "block";
        document.getElementById('editname').value=title;
        document.getElementById('editemail').value=description;
        document.getElementById('editstatus').value=status;
        document.getElementById('editdate').value=duedate;
        document.getElementById('editpriority').value=priority;
        document.getElementById('todoid').value=id;
    } 

    function editData() {
        //getdata()
         let task = document.getElementById('editname').value
         let descrp = document.getElementById('editemail').value
         let due = document.getElementById('editdate').value
         let status = document.getElementById('editstatus').value
         let priority = document.getElementById('editpriority').value
         let id = document.getElementById('todoid').value
         EditTodoJson(id,task, descrp , due, status, priority)
         edithide()
        
      }

      async function EditTodoJson(id,task,description,due, done,Priority) {
 
        const resp = await fetch('/api/edit/'+id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ task, description, due, done, Priority })
        })
       
      }

    function edithide(id){
            document.getElementById('editform').style.display = "none";
        } 


        function div_note_show() {
          document.getElementById('noteform').style.display = "block";
         
          }
         
          function div3_hide() {
            document.getElementById('noteform').style.display = "none";
            
            } 
        
        
         function getnotes(id)
        {
           div_note_show()
           document.getElementById('todoid').value = id
            let notelist = $("#notelist")
         
          fetchnote(id,function (notes){
            notelist.empty()
            for(note of notes){
            notelist.append(createnote(note))
            }
          })
         
        }
        function fetchnote(id,done){
          $.get('/api/notes/'+id,function(data){
            done(data)
          })
        }
         
        function createnote(note)
        {
          return $(`
           <li>${note.description}</li>
          `
          )
        }
         
        function addnotes()
        {
         
          let id = document.getElementById('todoid').value
          console.log(id)
          let description = document.getElementById('notes').value
          AddNoteJson(id,description)
        }
         
        async function AddNoteJson(id,description) {
         
          const resp = await fetch('/api/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, description })
          })
         
        }



