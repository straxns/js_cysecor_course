let liElements = document.getElementsByTagName('li');

for(liElement of liElements){
    let xElement = document.createElement('span');
    let txt = document.createTextNode("\u00D7")
    xElement.className = 'close';
    xElement.appendChild(txt);
    liElement.appendChild(xElement);
}
let closeX = document.getElementsByClassName('close');
for(let close1 of closeX){
    close1.onclick = function(){
        var div = this.parentElement;
        div.remove();
    }
}
for(liElement of liElements){
    liElement.onclick = function(){
        this.classList.toggle('checked');
    }
}
function newElement(){
    let myInput = document.getElementById('myInput');
    let newElement = document.createElement('li');
    newElement.innerHTML = myInput.value;
    let xElement = document.createElement('span');
    let txt = document.createTextNode("\u00D7")
    xElement.className = 'close';
    xElement.appendChild(txt);
    newElement.appendChild(xElement);
    document.querySelector('#myUL').appendChild(newElement);
    newElement.getElementsByClassName('close')[0].onclick = function(){
        var div = this.parentElement;
        div.remove();
    }
    newElement.onclick = function(){
        this.classList.toggle('checked');
    }
    // console.log(newElement);
}
