const form = document.querySelector("form");
const ul = document.getElementById("tasks");
const rage =document.getElementById("rage");
const task_nuber = document.getElementById('task_nuber');
const msg = document.getElementById('msg')
var lst_tasks = [];
var task_count = 0;
var ftask_count = 0;
var utask_count = 0;
let nb = 0

function add_tolist(task){
    var task_a=task
    nb = 1
    if(lst_tasks.includes(task_a)){
        task_a=task_a+"_("
        while(lst_tasks.includes(task_a+nb+")")){
            nb+=1
            
        }
        task_a=task_a+nb+")"
    }
    lst_tasks.push(task_a)
    const li = document.createElement("label");
    const quit=document.createElement("button");
    const check=document.createElement("in")
    const br=document.createElement('br')
    li.innerHTML=`<label for="${task_a}"><label>`
    check.innerHTML=`<input type="checkbox" id="${task_a}">`
    console.log(task_count);
    quit.textContent="X";
    quit.classList.add("X");
    quit.style.padding="3px";
    quit.style.paddingBottom="1px";
    quit.style.paddingTop="1px";
    quit.style.marginLeft="5px"
    li.textContent=task_a;
    li.prepend(check);
    li.appendChild(quit);
    li.appendChild(br);
    li.style.display="flex";
    ul.appendChild(li);
    erreur.style.display='none';
    task_count++;
    task_nuber.textContent=task_count;
    if (task_count == 1){
        msg.innerHTML=` Number of task left :`
        msg.style.border="hidden, 0px"
        msg.style.borderRadius="0px"
    }else{
        msg.innerHTML=` Number of tasks left :`
        msg.style.border="hidden, 0px"
        msg.style.borderRadius="0px"
    }
    check.addEventListener('change', function(e){
        if(e.target.checked){
            li.style.textDecoration='line-through'
            utask_count-=1
            ftask_count+=1
        }else{
            li.style.textDecoration='None'
            utask_count+=1
            ftask_count-=1
        }
    })

    quit.addEventListener('click', function(){
        ul.removeChild(li);
        erreur.style.display='none';
        task_count-=1;
        
        task_nuber.textContent=task_count;
        if (task_count == 1){
            msg.innerHTML=` Number of task left :`
            msg.style.border="hidden, 0px"
            msg.style.borderRadius="0px"
        }else if (task_count == 0){
            msg.innerHTML=`You have no tasks left so you can go watch anime 👺`
            msg.style.border="solid, 1px"
            msg.style.borderRadius="3px"
            task_nuber.innerHTML="";
        }else {
            msg.innerHTML=` Number of tasks left :`
            msg.style.border="hidden, 0px"
            msg.style.borderRadius="0px"
        }
        lst_tasks.splice(lst_tasks.indexOf(task_a),1)
        
    });
};


function main(){
    for (i=0;i<4;i++) {
        add_tolist('task');
    };
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = form.task.value.trim();
        if (!task==""){
            add_tolist(task);
        }else{
            erreur.style.display='block';
        };
        form.task.value="";
        
    });

    rage.addEventListener("click", function(){
        ul.innerHTML="";
        erreur.style.display='none';
        task_count = 0;
        msg.innerHTML=`You have no tasks left so you can go watch anime 👺`
        msg.style.border="solid, 1px"
        msg.style.borderRadius="3px"
        task_nuber.innerHTML="";
        lst_tasks = [];
    });
};

main();