(function (win, doc) {
  'use strict';
  let parent = doc.querySelector('.parent');
  let child = doc.querySelector('.child');
  let grandchild = doc.querySelector('.grandchild');
  let form1 = doc.querySelector('#form1');

  /*parent.addEventListener('click', function () {
    console.log('parent clicked');
  }, false);

  child.addEventListener('click', function () {
    console.log('child clicked');
  }, false);

  grandchild.addEventListener('click', function () {
    console.log('grandchild clicked');
  }, false);*/

  /*parent.addEventListener('click', function (event) {
    console.log('this', this);
    console.log('event', event.target);
  }, false);*/

  /*parent.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('parent clicked');
  }, false);

  child.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('child clicked');
  }, false);

  grandchild.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('grandchild clicked');
  }, false);*/

  form1.addEventListener('blur', function () {
    alert('Oi');
  }, true);

})(window, document);
