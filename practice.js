// function makeRed(){
//        document.body.style.backgroundColor = "red";
// }
// document.getElementById("Make-Orange").addEventListener("click", function(){
//        document.body.style.backgroundColor = "orange"
// })
// function handleClick(){
//        const text = document.getElementById("Handeler-Text");
//        text.innerText = "Handeled by js"
// }
// document.getElementById("event-Listener").addEventListener("click", function(){
//        const text = document.getElementById("Handeler-Text");
//        text.innerText = "handeled by add event listener"
// })
// document.getElementById("Button-Update").addEventListener("click", function(){
//        const inputfield = document.getElementById("Input-Field");
//        const inputtext = inputfield.value
//        const defolttext = document.getElementById("input-text-Display");
//        defolttext.innerText = inputtext;
//        inputfield.value = "";
// })
// document.getElementById("Btn-Post").addEventListener("click", function(){
//        const newComment = document.getElementById("New-Comment");
//        const inputtext = newComment.value;
//        const container = document.getElementById("Comment.Container");
//        const p = document.createElement("p");
//        p.innerText = inputtext;
//        container.appendChild(p);
//        newComment.value = "";
// })
// document.getElementById("Button-More").addEventListener("mousemove", function(){
//        console.log("event triggered")
// })
// document.getElementById("Text-Field").addEventListener("keyup", function(event){
//        console.log(event.target.value)
// })


// document.getElementById("delete-confirm").addEventListener("keyup", function(event){
//        const text = event.target.value;
//        const deleteButton = document.getElementById("Btn-Delete")
//        if(text === "delete"){
//               deleteButton.removeAttribute("disabled")
//        }
//        else{
//               deleteButton.setAttribute("disabled", true)
//        }
// })
// document.getElementById("Btn-Delete").addEventListener("click", function(){
//        const info = document.getElementById("Secret-Info");
//        info.style.display = "none"
// })


// document.getElementById("List-Ul").addEventListener("click", function(){
//        console.log("ul item clicked")
// })
// document.getElementById("List-Container").addEventListener("click", function(){
//        console.log("List-Container clicked")
// })
// document.getElementById("Item-2").addEventListener("click", function(event){
//        console.log("item 2 clicked")
//        event.stopPropagation();
// })
// const items = document.getElementsByClassName("Item");
// for(item of items){
//        item.addEventListener("click", function(event){
//               event.target.parentNode.removeChild(event.target)
//        })
// }
// document.getElementById("List-Containerr").addEventListener("click", function(event){
//        event.target.parentNode = this.removeChild(event.target)
// })
// document.getElementById("Btn-Add-Item").addEventListener("click", function(){
//        const listcontainer = document.getElementById("List-Containerr")
//        const li = document.createElement("li")
//        li.innerText = "New Elemeent Create";
//        li.classList.add("item")
//        listcontainer.appendChild(li);
// })