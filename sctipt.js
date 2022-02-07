const input = document.querySelector('#input');
const button = document.querySelector('#button');

const result = document.querySelector('#result');
const total = document.querySelector('#total');
i = 0;


button.addEventListener('click', function(){


    if(input.value==='') return
    workElements(input.value)
    input.value=''


});

function workElements(value) {

 i++
 const li = document.createElement('li') 
 
 li.className = 'li'
 li.textContent = value
 


 const btn = document.createElement('button')

 btn.className = 'btn'
 btn.textContent = 'сделано'
 li.appendChild(btn)

 btn.addEventListener('click', function(){
    i--
    total.textContent=i
    result.removeChild(li)

 })

 total.innerText = i
 
 result.appendChild(li) 
};