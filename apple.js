// создаем массив фруктов,где 0 это яблоко,а 1 это груша
const fruits= [0,1,0,0,1,0,1]
// считаю длину массива
const lengthFruits=fruits.length
// смотрю в консоли результат
console.log(lengthFruits)
// фильтрую яблоки от груш
const result = fruits.filter(grushi=> grushi===0).length

console.log ("количество груш" + result+ " количество яблок " + (lengthFruits- result))