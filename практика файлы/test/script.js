
//кнопки
/*

let button = document.querySelector('#button');

let text = document.querySelector('.text');

button.addEventListener('click', function(){

    text.classList.toggle('text_none');

    if(text.classList.contains('text_none')){
        button.textContent='open'
    }
    else{
        button.textContent='close'
    }


});

let button2 = document.querySelector('#button2');
let zagolovok = document.querySelector('.zagolovok');

button2.addEventListener('click', function(){

    zagolovok.classList.toggle('h3');

    if( zagolovok.classList.contains('h3')){
        button2.textContent='open';
    }

    
    else{
        button2.textContent='close';
    }



});





//Аккордеон


let headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function(item, h){

    
    //console.log(h);

    //console.log(item);




    item.addEventListener('click', function(){

    
      this.nextElementSibling.classList.toggle('hidden');
        
      console.log(this.nextElementSibling);

});


});


*/
  
/*
function testk(...all){    //когда пишем ...all это значит вывеси асе числа и привызове функции получаем массив с вложенными чисдами нами введеными
console.log(all)

}
 testk(11,334,33,11)


 // пример работы таймера!!!!
 
 function time(){
    console.log(`тту текст!!!`)
}

setTimeout(time,3000)

//

function testN(...all){

    console.log(all)

}

testN(11,32,432,55321,32)


//

let inputText = document.querySelector('.inputText');
let textValue = document.querySelector('.textValue');


inputText.addEventListener('input',function(){

textValue.innerText=inputText.value

});

//
let listGroup= document.querySelector('.list-group');

listGroup.addEventListener('click', function(event){

 console.log(event.target);

});

//создание эллемета через JS

let newElements = document.querySelector('.newElements');

let textNew= document.createElement('h1');

textNew = `яхаммм бля!!!`;

newElements.append(textNew);



//копирование элемента

let header = document.querySelector('#header');

let copy = header.cloneNode(true);

let newElements = document.querySelector('.newElements');

newElements.append(copy)

*/


/*
let button = document.querySelector('#button');
let text = document.querySelector('.text');

button.addEventListener('click',function(){

    text.classList.toggle('text_none');

    if(text.classList.contains('text_none')){
        button.textContent=`open`
    }
    else{
        button.textContent=`close`
    }

});

let button2 = document.querySelector('#button2');
let zagolovok = document.querySelector('.zagolovok');

button2.addEventListener('click', function(){

    zagolovok.classList.toggle('h3');

    if(zagolovok.classList.contains('h3')){
        button2.textContent=`open`
    }
    else{
        button2.textContent=`close`
    }

});

let headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function(item){

    item.addEventListener('click', function(event){


        item.nextElementSibling.classList.toggle('hidden');

        console.log(event.target);

    })

});

let inputText = document.querySelector('.inputText');
let textValue = document.querySelector('.textValue');

inputText.addEventListener('input', function(){


    textValue.innerText=inputText.value

});


let newElements = document.querySelector('.newElements');

let newTag_1 = document.createElement('h2');

newTag_1 = `fdfd we ewtrferfte re`;

let btn_add = document.querySelector('.btn_add')

newElements.append(newTag_1);


 let header = document.querySelector('#header');

 let copy = header.cloneNode(true);

 let newElements2 = document.querySelector('.newElements2');

 newElements.append(copy)

*/

let button = document.querySelector('#button');
let text = document.querySelector('.text');

button.addEventListener('click', function(){

    text.classList.toggle('text_none')

    if(text.classList.contains('text_none')){
        button.textContent='open'
    }
    else{
        button.textContent=`close`
    }
});

let button2 = document.querySelector('#button2');
let zagolovok = document.querySelector('.zagolovok');

button2.addEventListener('click',function(){

    zagolovok.classList.toggle('h3')

    if(zagolovok.classList.contains('h3')){
        button2.textContent=`open`
    }
    else{
        button2.textContent=`close`
    }
});



let headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function(item){

    item.addEventListener('click',function(event){

        item.nextElementSibling.classList.toggle('hidden');
        console.log(event.target)



    })

});

let inputText = document.querySelector('.inputText');
let textValue = document.querySelector('.textValue');

inputText.addEventListener('input', function(){


    textValue.innerText= inputText.value

});


let newElements = document.querySelector('.newElements');

let newTag = document.createElement('h3');

newTag = `perspiciatis consectetur totam`;

newElements.append(newTag);


let newElements2 = document.querySelector('.newElements2');


let header = document.querySelector('#header');

let copy = header.cloneNode(true);

newElements2.append(copy)















