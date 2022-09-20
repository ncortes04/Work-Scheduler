var getInput0 = document.getElementById("text0")
var getInput1 = document.getElementById("text1")
var getInput2 = document.getElementById("text2")
var getInput3 = document.getElementById("text3")
var getInput4 = document.getElementById("text4")
var getInput5 = document.getElementById("text5")
var getInput6 = document.getElementById("text6")
var getInput7 = document.getElementById("text7")
var getInput8 = document.getElementById("text8")

var inputArr = [getInput0, getInput1, getInput2, getInput3, getInput4, getInput5, getInput6, getInput7, getInput8]

var today = moment();
var signUpButton = document.getElementsByClassName("saveBtn");
$("#currentDay").text(today.format("dddd MMM Do"));



var hr = [9,10,11,12,13,14,15,16,17];
var ide = ["text0", "text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8"]
var textstore = ["text0-store", "text1-store", "text2-store", "text3-store", "text4-store", "text5-store", "text6-store", "text7-store", "text8-store"]

renderLastRegistered()



function renderLastRegistered() {
    for (let i = 0; i < textstore.length; i++){
    email = localStorage.getItem(textstore[i]);
    inputArr[i].value = email;
    signUpButton[i].addEventListener("click" , setItems)
    }
  };
function setItems(event){
    event.preventDefault();
    for (let i = 0; i < textstore.length; i++){
   var email = inputArr[i].value
    localStorage.setItem(textstore[i], email);
    }

    renderLastRegistered()
};


console.log(getInput0)
//This variable grabs the current time in millitary hours and stores this value in a variable
var hour = parseInt(today.format("H"))
console.log(hour)
// // this for loop rus though and array stored as hr which has hours 9-17. This loop also runs trough anothre array that loops through the corresponding id i would like to change the class of This array is then check if it is greater than the current hour. If teh current moment time is greater than the correspinding ID than the past class is added. if the moment time is less than the correspinding id then it is future time. if else then it is present since taht is the only other possability.
for ( let i = 0; i < hr.length; i++)
    if (hour > hr[i]){
        document.getElementById(ide[i]).className = "past";
    } else if(hour < hr[i]){
        document.getElementById(ide[i]).className = "future";
    } else {
        document.getElementById(ide[i]).className = "present";
    }