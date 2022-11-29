'use strict';

// function to check for valid input
function checkEmptyInput(inputID) {
    let title = document.querySelector('#' + inputID).value.trim();
    if (title.length > 0) {
        displayMsgNxtElem(inputID, "");
        return true;
    }
    displayMsgNxtElem(inputID, "<span class='text-danger'>Field cannot be Empty</span>");
    return false;
}
// function to display error/success message
function displayMsgNxtElem(elementID, errorMsg) {
    let message = document.querySelector("#" + elementID);
    message.nextElementSibling.innerHTML = errorMsg;
    return true;
}
// function to display error/success message
function displayMsg(elementID, errorMsg) {
    let message = document.querySelector("#" + elementID);
    message.innerHTML = errorMsg;
    // clear message after 3.5 sec 
    setTimeout(() => {
        message.innerHTML = '';
    }, 3500);
    return true;
}

function checkUsername(id) {
    let username = document.querySelector('#' + id).value.trim();
    let regExp = /^[a-zA-Z0-9]+$/;
    if (regExp.test(username)) {
        displayMsgNxtElem(id, "");
        return true;
    } else {
        displayMsgNxtElem(id, "<span class='text-danger'>Invalid Username</span>");
        return false;
    }
}
function checkFullName(id) {
    let username = document.querySelector('#' + id).value.trim();
    let regExp = /\w\s/g;
    if (regExp.test(username)) {
        displayMsgNxtElem(id, "");
        return true;
    } else {
        displayMsgNxtElem(id, "<span class='text-danger'>Invalid Name</span>");
        return false;
    }
}
function checkStack(id) {
    let Earningrange = document.getElementById("stack");
    if (stack == "") {
        //If the "Please Select" option is selected display error.
        displayMsgNxtElem(id, "<span class='text-danger'>Please select your earning range per month</span>");
        return false;
    }
    return true;
}

function getUser(key) { // allUsers
    let allUsers = JSON.parse(localStorage.getItem(key)) || [];
    return allUsers;
}