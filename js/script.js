/*
 * WEB222  -  Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:        Yick Shu Yuen
 *      Student ID:  153841218
 *      Date:        10 Aug, 2022
 */

//////Form Validation//////
function formValidation(){
    /////Check Name Input/////
    var elemname = document.getElementById('inputname');
    var allAlpha = true;
    var inputValue = elemname.value.trim();
    inputValue = inputValue.toUpperCase();

    if(inputValue.length ===0)
        allAlpha = false;
    for (var i = 0; i < inputValue.length; i++) {
        // check all characters are letters
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  {
             allAlpha = false; }
    }  
    if (!allAlpha){
        alert("Name : Please enter a meaningful name with all alphabet letters.");
        return false;
    } 
    /////Check Address Input/////
    var elemaddress = document.getElementById('inputaddress');
    if (elemaddress.value.trim().length == 0) {
        alert("No input! Please enter your address.");
        return false;
        }
    /////Check Message Input/////
    var elemmessage = document.getElementById('inputmessage');
    if (elemmessage.value.trim().length == 0) { // check length of textarea
        alert("No input! Please enter your message.\n");
        elemmessage.value = "";
        return false;
    }
    return true;
}


/////dynamically reveal another input box to enter the hourly rate//////
var questbtn = document.getElementById('question');
var commentbtn = document.getElementById('comment');
var hiringbtn = document.getElementById('hiring');

hiringbtn.onclick = function() {
    if (hiringbtn.checked) {
        var rate = document.getElementById("rate")
        rate.innerHTML=""
        var list = document.createElement("li");
        var title = document.createElement("h7");
        var text = document.createTextNode("Hourly Rate: $");
        title.appendChild(text);
        var input = document.createElement("input");
        input.id = 'rateinput';
        input.type = 'text';
        input.placeholder = "20.20";
        input.pattern = "^[0-9]*\.[0-9]*"
        list.appendChild(title);
        list.appendChild(input);
        rate.appendChild(list);
    }
}
commentbtn.onclick = function() {
    if (commentbtn.checked) {
        rate.innerHTML=""
    }
}
questbtn.onclick = function() {
    if (questbtn.checked) {
        rate.innerHTML=""
    }
}

