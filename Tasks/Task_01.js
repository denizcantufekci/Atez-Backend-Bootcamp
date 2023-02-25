
 /*
    Task 1:
    Faktoriyel hesabı yapan bir fonksiyon yazın.
    Ipucu: Fonksiyona 3 verildiği zaman sonucun 6 olarak dönmesi beklenir.
    Ama String bir değer verilirse bir hata bilgisi paylaşılması lazım.
    Bunun varyasyonları ile düşünüp başka koşullarda ne dönmesi gerekir, kontrolleri sağlamanız bekleniyor.
 */

const calcFactorial = (num) => {
    if (typeof num === "number" && num >= 0 && !isNaN(num) && num !== Infinity ) {
        if(num === 0) return 1;
        return num * calcFactorial(num - 1);
    }
    return "Please enter zero or a positive number!";
};
console.log(calcFactorial());
console.log(calcFactorial(-1));
console.log(calcFactorial(-0));
console.log(calcFactorial(0));
console.log(calcFactorial(3));
console.log(calcFactorial(5));
console.log(calcFactorial("5"));
console.log(calcFactorial(true));
console.log(calcFactorial(false));
console.log(calcFactorial({name: 'x', surname: 'y'}));
console.log(calcFactorial([1,2,3]));
console.log(calcFactorial(NaN));
console.log(calcFactorial(null));
console.log(calcFactorial(undefined));
console.log(calcFactorial(Infinity));
console.log(calcFactorial(-Infinity));
console.log(calcFactorial(1/0));
console.log(calcFactorial(1/-0));
console.log(calcFactorial(0/0));