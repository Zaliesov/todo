let myNodelist = document.getElementsByTagName('LI');
let i;
for(i=0;i<myNodelist.length;i++){
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00d7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
let p;
for(p=0;p<close.length;p++){
  close[p].onclick = function(){
    let div = this.parentElement;
    div.style.display = 'none';
  }
}
let list = document.querySelector('ul');
list.addEventListener('click',function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
},false)

function newElement(){
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ''){
    alert('Поле не може бути пустим!');
  }else{
    document.getElementById('myInput').appendChild(li);
  }
  document.getElementById('myInput').value = '';
let span = document.createElement('SPAN');
let txt = document.createTextNode('\u00D7');
span.className = 'close';
span.appendChild(txt);
li.appendChild(span);

for(p = 0;p<close.length;p++){
  close[p].onclick = function(){
    let div = this.parentElement;
    div.style.display = 'none';
  }
}  
}

