 Javascript error növlərini araşdıraraq 10 ədədinin izahını qısaca yazın
1. Referance error- İstinad edilmeyen mövcud olmayan dəyişən var. Bu dəyişən teyin edilməlidir və ya onun cari scopda mövcud olduğundan əmin olmalısınız.


function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.

 Funksiya daxilində müəyyən edilmiş dəyişənlərə funksiyadan kənar heç bir yerdən çağırmaq mümkün deyil, çünki dəyişən yalnız funksiyanın əhatə dairəsində müəyyən edilir. const burada funksiyadan kenarda teyin edilse,kenardan cagirmaq olar.

 const foo = {};
foo.ad; Həmçinin burada menimsədilən dəyər qeyri-müəyyəndir. Ona gore referance undefined verir.
Həmçinin "alert(Xəbərdarlıq paneli") yersiz səliqəsiz kod yazdıqda referance error xətasini verir.

let name="Jon";
let surname="Doe";
let fullName= name + lastname;

Yazsaq=, lastname təyin edilmeyib deyecek ve referance error verecek.

2. SyntaxError- JavaScript mühərriki kodu təhlil edərkən dilin sintaksisinə uyğun gəlməyən tokenlər və ya işarələr sırası ilə qarşılaşdıqda atılır. 
Tutaq ki, her hansi string melumatda dirnaq isaresi qoyulmayibsa,bezekli moterize yerine adi moterize qoyulubsa ve ya möterizə unudulubsa və s. Məsələn,
alert(Xeberdarli paneli), name=Jon .

3. TypeError-Əməliyyat zamanı dəyər gözlənilən tipdə olmadıqda bu cür səhvlər verir.
Tutaq ki, biz her hansi funksiya yazmisiq, parametr olaraq ədəd vermişik, lakin argument olaraq string gönderirik.

4. RangeError- RangeError obyekti dəyər icazə verilən dəyərlər dəstində və ya diapazonunda olmadıqda xətanı göstərir. JS 4 rəqəmli ədədləri qəbul edir, 5 rəqəmli yazdıqda bu xətanı verir.

5. URI error- Əməliyyat zamanı hər hansı uyğun olmayan işarə yazarsaq bu error gəlir.Məsələn % işarəsi.
6. İnternal Error- JavaScript mühərrikində daxili olaraq baş vermiş xətanı göstərir.

Nümunə hallar əsasən bir şey çox böyük olduqda olur, məsələn:
"çox keçid halları",
"normal ifadədə çoxlu mötərizə",
"massiv başlatıcısı çox böyük",
"həddən artıq rekursiya".

7.EvalError-EvalError obyekti qlobal eval() funksiyası ilə bağlı xətanı göstərir. Bu istisna artıq JavaScript tərəfindən atılmır, lakin EvalError obyekti uyğunluq üçün qalır.
