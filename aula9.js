var numbers = '';
/*for (let i = 0; i < 10; i++) {
    numbers += i;
    if (i != 9) {
        numbers += '-';
    }
}
*/
var i = 0;
// while(i < 10){
//     numbers += i;
//     if (i != 9) {
//         numbers += '-';
//     }
//     i++;
// }


// do {
//     numbers += i;
//     if (i != 9) {
//         numbers += '-';
//     }
//     i++;
// } while (i < 10);
// console.log(numbers);

let person = {
    name: 'Dilma',
    age: 54,
    city: 'Jupiá'
}

for (key in person) {
    console.log(key);
    console.log(person[key]);
}

//console.log(person['name']);
console.log(person.name);