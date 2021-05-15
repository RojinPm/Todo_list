//  var button=document.getElementsByTagName("button")[0];

// document.querySelectorAll("li")[1].parentElement.parentElement.parentElement


// document.querySelectorAll("li")[2].parentElement

// document.querySelector("li").innerHTML="<strong>Rojin!!!!!</strong>"

// document.querySelector("li").classList.add("cools")
// document.querySelector("li").classList.remove("cools")


// document.querySelectorAll("h1")

// document.querySelector("li").getAttribute("random");


// document.getElementsByTagName("h1")

// document.querySelector("h1").setAttribute("random",40)

// document.querySelector("h4").className=""

// document.querySelector("li").getAttribute("random")

// var button=document.getElementById("Enter");
// var input=document.getElementById("user-input");
// var ul=document.querySelector("ul");


// button.addEventListener("click",function(){


//   var li=document.createElement("li");
//   li.appendChild(document.createTextNode("CHECK"));
//   ul.appendChild(li);


// })

var button=document.getElementById("Enter");
var input=document.getElementById("user-input");
var ul=document.querySelector("ul");


 function inputLength(){
    return input.value.length;

 }

  function createElement(){

   var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

  }

 
 function CreateafterClick(){


    if(inputLength() > 0){
       createElement();

       }
    
    }
 function CreateAfterKeypress(event){


    if(inputLength() > 0 && event.keyCode === 13){

        console.log(event);
          createElement();
       
    }
   
 }


 button.addEventListener("click",CreateafterClick);

 input.addEventListener("keypress",  CreateAfterKeypress);

    
    
// var button = document.getElementById("Enter");
// var input = document.getElementById("user-input");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

    



