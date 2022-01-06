//任務1:偵測到input submit被點擊
//任務2:點擊後，需接收input框中輸入的文字標籤

var submitbutton = document.getElementById("checkbutton");
var showtext = document.getElementById("inputshow");
var nameList = [];

submitbutton.onclick = function () {
    var inputText = document.getElementById("RMname").value;

    if (inputText != null) {
        localStorage.setItem('RMname', inputText);
        showtext.innerHTML = inputText;
        addtext(inputText);
    }
}

if (localStorage.getItem('RMname')) {
    var storedName = localStorage.getItem('RMname');
}

function addFormText() {
    let txt = document.createElement("input");
    txt.type = "text";
    txt.name = "txt";
    txt.value = "動態新增的文字框";
    document.fm1.appendChild(txt);
}

function addtext(inputText) {
    let ul = document.getElementById("list");
    let word = document.createElement("li");
    //let addword = document.createTextNode(inputText);
    //word.appendChild(addword);
    word.appendChild(document.createTextNode(inputText));
    ul.appendChild(word);
}







//showtext.innerHTML = inputText;

