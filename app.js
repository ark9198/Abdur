
let input= document.querySelector("input")

let btn =  document.querySelector("button")
 
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){

    let item = document.createElement("li");
    item.innerText=input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
});

// event delegation

ul.addEventListener("click",function(event){

          if(event.target.nodeName=="BUTTON"){

            let listItem = event.target.parentElement;//LI
            listItem.remove();
            console.log("deleted task");
          }
});