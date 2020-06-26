// var age = 16;
// var isMember = true;
// var price = null;
// if (age <= 15) {
// 	price = 800;
// }else if(isMember){
//     price = 1000;
// }else {
// 	  price = 1800;
// }
// document.write(price);
//
//
// for (var i = 1; i <= 10; i++) {
//   document.write(i + ' ');
// }
//
// var n = ["あ", "い", "う", "え", "お"]
// var m = ["か", "き", "く", "け", "こ"]
// for (var i = 0; i < n.length; i++){
//   for(var j = 0; j < m.length; j++){
//     document.write(n[i] + m[j] + " ");
//   }
// }
//
// var l = []
// l.push("a")
// l.push("b")
// document.write(l)

// var myBirthTime = new Date(1999, 2, 5, 12, 30);
// function updateParagraph(){
//   var now = new Date();
//   var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//   document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
// }
// setInterval(updateParagraph, 1);

// function areaOfCircle(r) {
//   var area = r * r * 3.14;
//   return area;
// }
// document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
// document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
// document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');
//
// var student = {
//   name: "aaa",
//   age: 15
// }
// console.log(student.name);
// console.log(student.age);
//
// student.age = 16;
// console.log(student.age);

// var counter = {
//   number: 0,
//   print: function(){
//     counter.number++;
//     console.log(counter.number);
//   }
// };
//
// counter.print();
// counter.print();
// counter.print();

// var game = {
//   startTime: null,
//   displayArea: document.getElementById('display-area')
// };
// function start() {
//   game.startTime = Date.now();
//   document.body.onkeypress = stop;
// }
// function stop() {
//   var currentTime = Date.now();
//   var seconds = (currentTime - game.startTime) / 1000;
//   if (9.5 <= seconds && seconds <= 10.5) {
//     game.displayArea.innerText = seconds + '秒でした。すごい。';
//   } else {
//     game.displayArea.innerText = seconds + '秒でした。残念。';
//   }
// }
// if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
//   start();
// }
