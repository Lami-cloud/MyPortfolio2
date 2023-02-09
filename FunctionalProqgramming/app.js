//Functions and array methods

const persons=[
{name:'Jon', surname:'Doe', job:'Developer',born:1990},
{name:'Alice', surname:'Dore', job:'Developer',born:1978},
{name:'Jane', surname:'Sara', job:'Engineer',born:1989},
{name:'Lia', surname:'Hanry', job:'Freelancer',born:1088},
{name:'Alie', surname:'Donny', job:'Teacher',born:1994}

]

const ages=[23,45,18,34,33,21,23]

1.// forEach method and function

/* persons.forEach(function(person){
    console.log(person)
    });
 */

/* function person(){
    for(let i=0;i<persons.length;i++){
    
     }   return persons;

}

console.log(person());
 */


2.//filter method and function
/* 
/* function filterAges(){
    let ageArray=[];

    for(let i=0;i<ages.length;i++){
        if(ages[i]>22){
            ageArray.push (ages[i]);
        }
    }return ageArray; 
}
 */

/* const filterAges=ages.filter(function(age){
    if(age>22){
        return true;
    }
}
);
console.log(filterAges);
*/

// const filterAges=ages.filter(age =>age>22);

/* const filterNames=persons.filter(name=>name.job==='Developer');
console.log(filterNames);
 */


3.//map method. Create new array of person names;

/* const personNames=persons.map(function(person){
    return person.name;

})

console.log(personNames); */



/* 
function returnAges(){
    let ageArray=[];

    for(let i=0;i<ages.length;i++){
        if(ages[i]){
            ageArray.push (ages[i]*2);
        }
    }return ageArray; 
}

console.log(returnAges(ages)); */

//4. Sort

/* function sortNames(a,b){
    for (let i=0;i<ages.length; i++){
        if(a>b){
            return 1;}
            if(a<b){
              return-1;
            }
        
    }
   
}

console.log(ages);
 */

// Ana dilimizdə tarix və saatı göstərən metod yazın

/* function showLocalDateTime() {
    // Sizin kodunuz
    let data=new Date('10 Yanvar 2023, Çərşənbə, 12:00:00');
    document.getElementById('data').innerHTML=data;
 
}
 */



let date=new Date();
let month=new Array(12);
month[0]='Yanvar';
month[1]='Fevral';
month[2]='Mart';
month[3]='Aprel';
month[4]='May';
month[5]='Iyun';
month[6]='Iyul';
month[7]='Avqust';
month[8]='Sentyabr';
month[9]='Oktyabr';
month[10]='Noyabr';
month[11]='Dekabr';

let weekday=new Array(7);
weekday[0]='Bazar gunu';
weekday[1]='Bazarertesi';
weekday[2]='Çərşənbə axşamı';
weekday[3]='Çərçənbə';
weekday[4]='Cümə axşamı';
weekday[5]='Cümə';
weekday[6]='Şənbə';

console.log(date.getDate()+' '+month[date.getMonth()] + ' '+date.getFullYear() + ', ' 
+ weekday[date.getDay()] +', '+ date.getHours()+':'+date.getMinutes());



