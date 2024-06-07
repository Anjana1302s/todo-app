let newtask = document.getElementById("input");
let tasks = document.querySelector(".text");
function add(){
    if (newtask.value ==""){
        alert("please enter a text")
    }
    else{
        let newEle =document.createElement("ul");
        newEle.innerHTML= `${newtask.value} <i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(newEle);
        newtask.value =="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
}