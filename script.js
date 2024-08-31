// Add Onclick Handler Directly


function makeRed(){ /* (1-3) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। এটাই বেশি ব্যাবহার করবো। */
       document.body.style.backgroundColor= "red";
}

const blue = document.getElementById("makeBlue"); /* (4-8) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। */
blue.onclick = blues;
function blues(){
       document.body.style.backgroundColor= "blue";
}

const purpleButton = document.getElementById("make-Purple"); /* (14-17) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। */
purpleButton.onclick = function makepurple(){
       document.body.style.backgroundColor = "purple";
}



// Diffferent Ways TO Use Add Even Listener On A Button



const pinkButton = document.getElementById("Make-Pink"); /* (25-29) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। */
pinkButton.addEventListener("click", makepink)
function makepink(){
       document.body.style.backgroundColor= "pink";
}

const orangebutton = document.getElementById("Make-Orange"); /* (31-34) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। */ 
orangebutton.addEventListener("click", function makeorange(){
       document.body.style.backgroundColor= "orange";
})

document.getElementById("Make-Tomato").addEventListener("click", function maketomato(){ /* (36-38) এই লাইন গুলো ব্যাবহার করা হয় অন ক্লিক বাটনে কিচু ঘটানোর জন্য। এই সিস্টেম টাই সবচেয়ে বেশি ব্যাবহার করবো। */
       document.body.style.backgroundColor = "tomato";
})



// Most Common Ways To Set Event Handelers



function handleClick(){
       const handelerStatus = document.getElementById("Handeler-Text");
       handelerStatus.innerText = "Handeler By Javascript";
}

document.getElementById("event-Listener").addEventListener("click", function(){
       const event = document.getElementById("Handeler-Text")
       event.innerText = "Event Listener Changed By javascript"
})

document.getElementById("Button-Update").addEventListener("click", function(){
       const inputfield = document.getElementById("Input-Field");
       const inputtext = inputfield.value;
       const p = document.getElementById("input-text-Display");
       p.innerText = inputtext;
       inputfield.value = "";
})



// Create A Comment Box And Display Comment



document.getElementById("Btn-Post").addEventListener("click", function(){
       const commentBox = document.getElementById("New-Comment");
       const newComment = commentBox.value;
       const commentContainer = document.getElementById("Comment.Container");
       const p = document.createElement("p")
       p.innerText = newComment;
       commentContainer.appendChild(p);
       commentBox.value = "";
})




// Simple github like delete confirmation button


// document.getElementById("Text-Field").addEventListener("focus", function(){
//        console.log("Event Triggered Inside The Input Field")
// })
// document.getElementById("Text-Field").addEventListener("blur", function(){
//        console.log("Event Triggered Inside The Input Field blur")
// })
// document.getElementById("Text-Field").addEventListener("keydown", function(){
//        console.log("Event Triggered Inside The Input Field keydown")
// })
document.getElementById("Text-Field").addEventListener("keyup", function (event){
       console.log(event.target.value) /* (target) হচ্ছে ফুল ইনপুট ফিল্ড টা। */
})
document.getElementById("Button-More").addEventListener("mousemove", function(){ /* ("mousemove") এটি ব্যাবহার করা হয় কোন এলিমেন্ট এর উপর মাউস নিয়ে গিয়ে সেখানেই নড়ার পর যা ঘটবে। */
       console.log("Event-Triggret")
})

document.getElementById("delete-confirm").addEventListener("keyup", function(event){
       const text = event.target.value;
       const deleteButton = document.getElementById("Btn-Delete");
       if(text.toLowerCase() === "delete"){
              deleteButton.removeAttribute("disabled");
       }
       else{
              deleteButton.setAttribute("disabled", true)
       }
})
document.getElementById("Btn-Delete").addEventListener("click", function(){
       const secret = document.getElementById("Secret-Info");
       secret.style.display = "none";
})



// (semi-advanced) Event bubble and Stop propagating



document.getElementById("Item-2").addEventListener("click", function(event){
       console.log("item 2 Clicked");
       event.stopPropagation(); /* (event.stopPropagation();) এটি ব্যাবহার করা হয় যেন ফাংশন টা শুধু চাইল্ড এই থাকে প্যারেন্ট এ না যায়। */
       event.stopImmediatePropagation(); /* (event.stopImmediatePropagation();) এটি ব্যাবহার করা হয় যেন সেম চাইল্ড এর প্রথম ফাংশন টা কাজ করে বাকি গুলা না করে। */
})
document.getElementById("List-Ul").addEventListener("click", function(){
       console.log("ul clicked")
})
document.getElementById("List-Container").addEventListener("click", function(){
       console.log("Section Container clicked")
})



// (advanced) Event delegate and benefit of Event bubble



// const items = document.getElementsByClassName("Item");
// for(item of items){
//        item.addEventListener("click", function(event){
//               event.target.parentNode.removeChild(event.target)
//        })
// }
document.getElementById("List-Containerr").addEventListener("click", function(event){
       event.target.parentNode.removeChild(event.target)
})

document.getElementById("Btn-Add-Item").addEventListener("click", function(){
       const listcontainer = document.getElementById("List-Containerr");
       const li = document.createElement("li");
       li.innerText = "New Item Added"
       li.classList.add("Item")
       listcontainer.appendChild(li);
})