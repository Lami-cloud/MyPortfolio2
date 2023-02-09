
//birden cox button ucun bir funksiya
let buttons = document.querySelectorAll('.button');
let push=document.getElementById('push');


for(let button of buttons){
    button.addEventListener('click', function(){
     push.innerHTML='Yeni məhsul səbətdədir';
    })
}

push.onclick=function(){
    push.innerHTML='Səbətiniz boşdur';
} 


//Palindrom

/* function palindrom(str) {
    str=str.toLowerCase();
    let str2=str.split('');
    str2=str2.reverse();
    str2=str2.join('');

    if(str==str2) 
        return true;
        else return false;
    
    return str2;
}

console.log(Palindrom('abba')) */

//Daha effektiv və qısa kod 
/* function palindrom2(str){
    str=str.toLowerCase();
    return str==str.split('').reverse().join('');
}

console.log(palindrom2('abba') )
 */


//Arrow functionla yazilmis versiya

const palindrom2 = str =>{
    str=str.toLowerCase();
    return str==str.split('').reverse().join('');

}
console.log(palindrom2('abba') );

