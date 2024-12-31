// assigment1
let fruits = ['watermelon', 'strawberry', 'grapes']
console.log(fruits)
function add(items) {
    fruits.push(items)
}
add ('apple');
add ('orange');
console.log(fruits)


let flower = ['tulip', 'lily', 'rose', 'sunflower']
console.log(flower)
function replace(lists) {
    flower.pop(lists)
}
replace ('rose');
replace ('sunflower');
console.log(flower)

// assigment2
let colour = ['Pink', 'Black']
console.log(colour);

function lastCharacter(str){
    return str[str.length -1]
    }
    console.log(lastCharacter('Black'));


// assigment3
let word = ['Inspiration']
console.log(word)
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('Inspiration'));

console.log(reverse(reverse('Inspiration')));
