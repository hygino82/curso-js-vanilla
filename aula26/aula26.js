let check = doc.querySelector('#check');
let sel = doc.querySelector('#sel');
let radio = doc.getElementsByName('gender');
let btn = doc.querySelector('#btn');

//Checkbox
console.log(check.checked);
if (check.checked == false) {
    alert('Accept the terms');
}

//Radio
// console.log(radio);
function radioTest(event) {
    if (event.target.value == 'Male') {
        alert('Male');
    } else {
        alert('Female');
    }
}

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', radioTest, false);
}

//Select
// console.log(sel);
function selValidate(event) {
    if (event.target.selectedIndex == 0) {
        alert('Selecione pelo menos 1 opção');
    }
}
sel.addEventListener('change', selValidate, false);

//Button
//console.log(btn)
function submitForm(event) {
    event.preventDefault();
}
btn.addEventListener('click', submitForm, false);