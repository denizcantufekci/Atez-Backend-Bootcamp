
 /*
    Task 2:
    Birden fazla değişken ya da sınırız değişken alan bir fonksiyon yazarak çarpma işlemi yapmanız bekleniyor.
    Ipucu: Fonksiyona 3,2 verildiği zaman sonucun 6 olarak dönmesi beklenir.
    Ama String bir değer verilirse bir hata bilgisi paylaşılması lazım.
    Bunun varyasyonları ile düşünüp başka koşullarda ne dönmesi gerekir, kontrolleri sağlamanız bekleniyor.
 */

function multiplyOfInfinityArgs(...args){
    if (args.length === 0) return "Please enter at least one number.";
    if (args.some(arg => typeof arg !== "number" || isNaN(arg))) return "Please enter only numbers.";
    let result = 1;
    args.forEach(arg => result *= arg);
    return result;
}
console.log(multiplyOfInfinityArgs());
console.log(multiplyOfInfinityArgs(1,2,3));
console.log(multiplyOfInfinityArgs(-1,0,3));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,Infinity));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,NaN));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,"5"));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,true));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,false));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,{name: 'x', surname: 'y'}));
console.log(multiplyOfInfinityArgs(1,2,3,4,5,[1,2,3]));
console.log(multiplyOfInfinityArgs(null));
console.log(multiplyOfInfinityArgs(undefined));
console.log(multiplyOfInfinityArgs(Infinity));
console.log(multiplyOfInfinityArgs(1/0));
console.log(multiplyOfInfinityArgs(1/-0));
console.log(multiplyOfInfinityArgs(0/0));