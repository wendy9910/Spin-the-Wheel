/*
var myHeading = document.querySelector('h1'); //將html中標籤<h1>中的值改為'Hellow world!'
myHeading.textContent = 'Hellow world!';
*/
/*
var myHTML = document.querySelector('html');
myHTML.onclick = function () {
    remind()
}
*/
/*
function remind() {
    alert('Ouch! Stop poking me!');
}

document.querySelector('html').onclick = function () {
    remind();
}
*/
var myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src'); //getAttribute可以它抓取標籤中的屬性 EX:<img>中的'src'
    if (mySrc == 'Image/dog.jpg') {
        myImage.setAttribute('src', 'Image/cat1.jpg');
    }
    else {
        myImage.setAttribute('src', 'Image/cat2.jpg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    // localStorage是一個API，可以讓使用者將一些資料存至瀏覽器
    //使用localStorage的setItem()將輸入資料存到名稱為 'name' 的變數裡，在將包含使用者名字的myName值給它
    localStorage.setItem('name', myName);
    if (myName == null) {
        myHeading.innerHTML = 'Please enter your name'; //指定給標題
        setUserName();
    }
    else {
        myHeading.innerHTML = 'Hi!! ' + myName; //指定給標題
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
}
else {//暫存
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hi!! ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}