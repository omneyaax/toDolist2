let addbutton = document.querySelector('#add')
let newt = document.querySelector('#nt')
let list = document.querySelector('#list')
let modal = document.querySelector('.modal')
let okay1 = document.querySelector('#okay')
let notask= document.querySelector('#notask')
let spinner = document.querySelector('#spinner')
let theme = document.querySelector('#thememode')
let body = document.querySelector('body')
let taskInput = document.querySelectorAll('#nt input')
let modalbody = document.querySelector('#modalbodyy')
let ldt = document.querySelector('#light')
let taskk = document.querySelector('.taskss')
let h = document.querySelector('#hed')

theme.onclick = function(){
    
    theme.classList.toggle('lightbutton')
    body.classList.toggle('lightbody') 
    addbutton.classList.toggle('lightAdd')
  taskk.classList.toggle('lightInput')
  list.classList.toggle('lightlist')
  h.classList.toggle('lighth')
  modal.classList.toggle('lightmodal')
}

 

 

//window.onload = function(){
//spinner.classList.add('.hide3')}


list.textContent.onclick = function(){
    list.classList.toggle('checked')
}

addbutton.onclick = function(){
    
   if(taskInput[0].value.length == 0 ||taskInput[0].value.length<3|| taskInput[1].value.length == 0 || taskInput[1].value.length<3|| taskInput[2].value.length == 0  ){
    
    if(taskInput[0].value.length == 0 ||taskInput[0].value.length<3){
        modal.classList.replace('hidee' ,'showmodal')
        modalbody.innerHTML=`
        <p> Invalid Task Name</p>`
    }
   else if(taskInput[1].value.length == 0 || taskInput[1].value.length<3){
    modal.classList.replace('hidee' ,'showmodal')
        modalbody.innerHTML=`
        <p> Invalid Image URL</p>`
    }
   else if(taskInput[2].value.length == 0 ){
    modal.classList.replace('hidee' ,'showmodal')
        modalbody.innerHTML=`
        <p> Invalid Date</p>`
    }
    
    
    okay1.onclick = function(){
       for(let i =0; i<taskInput.length;i++)
       {
        taskInput[i].value = '';
       }
   
    modal.classList.replace('showmodal' , 'hidee')
    
    }
    //   notask.classList.replace('show' , 'hide2')
    }

    else{
      


        list.classList.remove('d-none')
        list.innerHTML += `
            <div class="lsst">
                
                <div class='col-md-1  d-flex '><img onclick="window.open(this.src, '_blank');" style='width:40px; height:60px; border-radius:10px;' src='${taskInput[1].value}'></div>
                <p id="taskname" class='col-md-3   "'>
                    ${taskInput[0].value}
                </p>
                <p id="taskdate" class='col-md-3 ' >
                    ${taskInput[2].value}
                </p>
               <button style='color:white;' type="button" class="float-right delete btn-close" aria-label="Close"></button>
            </div>
        `;
        for(let i =0; i<taskInput.length;i++)
       {
        taskInput[i].value = '';
       }
        // delete task 
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
            
        }
        
    }




}




// done.onclick = function(){

//     document.querySelector('.lsst').classList.add('checked')

// }