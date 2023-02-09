window.onload=function(){
try{for (let i=0; i<9; i++){
    document.getElementById('game').innerHTML+=`<div class='block'></div>`;
}}catch (error){
console.log('error1')
}


    }
let ford=0;

 document.getElementById('game').onclick=function(event)
   {
       
        if(event.target.className=='block'){
            if(ford%2==0){
                event.target.innerHTML='x';

            }
            else{
                event.target.innerHTML='0';
            }
        
    
        }
        ford++;
            checkWinner();
        }
    

        
    function checkWinner(){
        let allblock= document.getElementsByClassName('block');
    
//X-lar;
       try{ if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') alert('X-lar qalib geldi');
    } catch(error){console.log('error2')}
    try{ if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') alert('X-lar qalib geldi');
} catch(error){console.log('error2')}        if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X-lar qalib geldi');
        if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') alert('X-lar qalib geldi');
        if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') alert('X-lar qalib geldi');
        if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X-lar qalib geldi');
        if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') alert('X-lar qalib geldi');
        if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') alert('X-lar qalib geldi');
// 0-lar

if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') alert('0-lar qalib geldi');
if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') alert('0-lar qalib geldi');
    
    

    }