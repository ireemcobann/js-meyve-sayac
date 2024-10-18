// Kullanıcıya kaç adet meyve girmek istediğini soralım.
// Söylediği adet kadar meyve ismini prompt ile eklesin.
// Yazılan her bir meyveyi diziye ekleyelim
// Eklenen meyvelerin hepsini console'a yazdıralım. 

let fruits = [];

let numberOfFruits = prompt("girmek istediğiniz meyve sayısı nedir?");

function fruitCounter () {
    for ( let i = 0; i < numberOfFruits; i++) {
        let fruit = prompt ((i + 1) + ".meyveyi giriniz.");
        fruits.push(fruit);
}
console.log("eklenen meyveler:" , fruits);
}

fruitCounter();