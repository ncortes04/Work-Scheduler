var getInput0 = document.getElementById("text0")
var getInput1 = document.getElementById("text1")
var getInput2 = document.getElementById("text2")
var getInput3 = document.getElementById("text3")
var getInput4 = document.getElementById("text4")
var getInput5 = document.getElementById("text5")
var getInput6 = document.getElementById("text6")
var getInput7 = document.getElementById("text7")
var getInput8 = document.getElementById("text8")
// gets the elementbyid for the timelocks and is used in the renderlastregistered function so i dont need to repeat myself
var inputArr = [getInput0, getInput1, getInput2, getInput3, getInput4, getInput5, getInput6, getInput7, getInput8]
//gets current date and day of the week
var today = moment();
var signUpButton = document.getElementsByClassName("saveBtn");
$("#currentDay").text(today.format("dddd MMM Do"));
/*this is the numbers that are suppose to represent 
millitary time in the for statement at the bottom of the page*/
var hr = [9,10,11,12,13,14,15,16,17];
/*this array is used in the setitems function to add text
to the local storage*/
var textstore = ["text0-store", "text1-store", "text2-store", "text3-store", "text4-store", "text5-store", "text6-store", "text7-store", "text8-store"]

//this runs the last registered function whihc adds the las registered to the page
renderLastRegistered()

function renderLastRegistered() {
    //this for statement runs through the text-store variables below and grabs them from the local storage
    for (let i = 0; i < textstore.length; i++){
    email = localStorage.getItem(textstore[i]);
    //this grabs the corresponding tect-store objects from above and adds them to the different get inputs above
    inputArr[i].value = email;
    //this function adds the function to each button on the HTML
    signUpButton[i].addEventListener("click" , setItems)
    }
  };
  //this function has a for loops that loops through an array createed above
function setItems(event){
    //prevent default is necessary so when the button is pressed the page doesnt try to submit
    event.preventDefault();
    //this for statement runs through each timeblock value so i do not have to repeat myself
    for (let i = 0; i < textstore.length; i++){
   var email = inputArr[i].value
   //this then sets the according timeblock into the text-store variables in the local storage
    localStorage.setItem(textstore[i], email);
    }
//this runs the funtion when pressed
    renderLastRegistered()
};

//This variable grabs the current time in millitary hours and stores this value in a variable
var hour = parseInt(today.format("H"))
/* this for loop rus though and array stored as hr which has hours 9-17.
 This loop also runs trough anothre array that loops through the corresponding
if i would like to change the class of This array is then check 
if it is greater than the current hour. If teh current moment
time is greater than the correspinding ID than the past class is added. 
if the moment time is less than the correspinding id then it is future time.
 if else then it is present since taht is the only other possability.
*/
for ( let i = 0; i < hr.length; i++)
    if (hour > hr[i]){
        inputArr[i].className = "past";
    } else if(hour < hr[i]){
        inputArr[i].className = "future";
    } else {
        inputArr[i].className = "present";
    }