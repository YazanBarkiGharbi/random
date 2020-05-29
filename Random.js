function z110(){
var random = Math.random();
random = random * 10;
random = Math.floor(random);
 var div = document.getElementById("did");
 var p = document.createElement("span");
 p.innerHTML = random +1 +"   "  ;
 div.appendChild(p);
} 
function wuerfel(){
  var random = Math.random();
random = random * 10;
if (random < 1.5 ){
 var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML ="1   " ;
 div.appendChild(p);
}

else if (random < 3 ){
var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML ="2   " ;
 div.appendChild(p);

}

else if (random < 4.5 ){
var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML ="3   " ;
 div.appendChild(p);
}

else if (random < 6 ){
var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML = "4  ";
 div.appendChild(p);
}

else if (random < 7.5 ){
var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML = "5  ";
 div.appendChild(p);
}

else if (random < 9){
var div = document.getElementById("dit");
 var p = document.createElement("span");
 p.innerHTML = "6  ";
 div.appendChild(p);
}
} 
function muenze(){
  
var random = Math.random();
random = random * 10;
  
if (random < 4.5){
 var div = document.getElementById("dig");
 var p = document.createElement("span");
 p.innerHTML ="Zahl  " ;
 div.appendChild(p);
} else{
  

 var div = document.getElementById("dig");
 var p = document.createElement("span");
 p.innerHTML ="Kopf  " ;
 div.appendChild(p);
} 

} 



function alphabet() {
 var random = Math.random();
 random = random * 10;

 if (random < 0.346153846) {
  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "A  ";
  div.appendChild(p);
 } else if (random < 0.692307692) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "B  ";
  div.appendChild(p);
 } else if (random < 1.03846154) {

  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "C  ";
  div.appendChild(p);
 } else if (random < 1.38461538) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "D  ";
  div.appendChild(p);
 } else if (random < 1.73076923) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "E  ";
  div.appendChild(p);
 } else if (random < 2.07692308) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "F  ";
  div.appendChild(p);
 } else if (random < 2.42307692) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "G  ";
  div.appendChild(p);
 } else if (random < 2.76923077) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "H  ";
  div.appendChild(p);
 } else if (random < 3.11538461) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "I  ";
  div.appendChild(p);
 } else if (random < 3.46153846) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "J  ";
  div.appendChild(p);
 } else if (random < 3.80769231) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "K  ";
  div.appendChild(p);
 } else if (random < 4.15384615) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "L  ";
  div.appendChild(p);
 } else if (random < 4.5) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "O  ";
  div.appendChild(p);
 } else if (random < 4.84615384) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "P  ";
  div.appendChild(p);
 } else if (random < 5.19230769) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "Q  ";
  div.appendChild(p);
 } else if (random < 5.53846154) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "R  ";
  div.appendChild(p);
 } else if (random < 5.88461538) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "S  ";
  div.appendChild(p);
 } else if (random < 6.23076923) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "T  ";
  div.appendChild(p);
 } else if (random < 6.57692307) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "U  ";
  div.appendChild(p);
 } else if (random < 6.92307692) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "V  ";
  div.appendChild(p);
 } else if (random < 7.26923077) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "W  ";
  div.appendChild(p);
 } else if (random < 7.61538461) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "X  ";
  div.appendChild(p);
 } else if (random < 7.96153846) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "Y  ";
  div.appendChild(p);
 } else if (random < 8.3076923) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "Z  ";
  div.appendChild(p);
 }else if (8.65384615) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "M  ";
  div.appendChild(p);
 } else if (random < 9) {


  var div = document.getElementById(
   "div");
  var p = document.createElement(
   "span");
  p.innerHTML = "N  ";
  div.appendChild(p);
 } 
} 
function dm() {
  var div = document.getElementById("dig");
  var parent = div.parentNode;
  div.removeChild();
}
function dz() {
  var div = document.getElementById("did");
  var parent = div.parentNode;
  div.removeChild();
}
function dw() {
  var div = document.getElementById("dit");
  var parent = div.parentNode;
  parent.removeChild(div);
}
function da() {
  var div = document.getElementById("div");
  var parent = div.parentNode;
  div.removeChild();
}
function dall() {
  var div = document.getElementById("dig");
  var parent1 = div.parentNode;
  var dig = document.getElementById("did");
  var parent2 = dig.parentNode;
  var div2 = document.getElementById("dit");
  var parent3 = div2.parentNode;
  var div3 = document.getElementById("div");
  var parent4 = div3.parentNode;
  parent1.removeChild(div);
  parent2.removeChild(dig);
  parent3.removeChild(div2);
  parent4.removeChild(div3);
}