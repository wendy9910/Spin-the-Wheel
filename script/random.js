//任務1:偵測到input submit被點擊
//任務2:點擊後，需接收input框中輸入的文字標籤
//任務3:將list存為陣列

var submitbutton = document.getElementById("checkbutton");
var buttonGet = document.getElementById("get");
var nameList = [];


submitbutton.onclick = function () {
    var inputText = document.getElementById("RMname").value;
    if (inputText != null) {
        localStorage.setItem('RMname', inputText);
        addtext2(inputText);
    }
}

if (localStorage.getItem('RMname')) {
    var storedName = localStorage.getItem('RMname');
}

function addtext(inputText) {
    let ul = document.getElementById("list");
    let word = document.createElement("li");
    //let addword = document.createTextNode(inputText);
    //word.appendChild(addword);
    word.appendChild(document.createTextNode(inputText));
    ul.appendChild(word);
}

function addtext2(inputText) {
    let table = document.getElementById("tableList");
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr1");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.appendChild(document.createTextNode(inputText));
    th1.setAttribute("id", "th1");
    tr.appendChild(th1);
    th2.style.color = "blue";
    let a = document.createElement("a");
    a.setAttribute("href", "javascript:;");
    a.setAttribute("onclick", "removeList(this);");
    a.appendChild(document.createTextNode("刪除"));
    th2.appendChild(a);
    tr.appendChild(th2);
    table.appendChild(tr);
}

function randomTime() {
    let count = 0;
    const myNodeList = document.getElementById("tableList").getElementsByTagName("th");
    for (let i = 0; i < myNodeList.length; i++) {
        let idname = myNodeList[i].getAttribute("id");
        if (idname == "th1") {
            nameList.push(myNodeList[i].innerText);
            count++;
        }
    }
    GetIndex = Math.floor(Math.random() * count)
    document.getElementById("ShowRandomOne").innerHTML = nameList[GetIndex];
}

function removeList(obj) {
    console.log("HI!!");
    let tr = obj.parentNode.parentNode;
    let tbody = tr.parentNode;
    tbody.removeChild(tr);
}

/*
var listRemove = document.querySelector("table");
listRemove.addEventListener("click", checkList, false);

function checkList() {
    let tr1 = listRemove.getElementsByTagName("tr");
    console.log(tr1);

    for (let i = 0; i < tr1.length; i++) {
        const th = tr1.getElementsByTagName("th");
        for (let i = 0; i < th.length; i++) {
            console.log(th[i].innerText);
        }
    }
}

function checkth(tr1) {
    const th = tr1.getElementsByTagName("th");
    for (let i = 0; i < th.length; i++) {
        console.log(th[i].innerText);
    }
}
*/


buttonGet.onclick = function () { randomTime(); }