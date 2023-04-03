const views = document.querySelector(".page-views");
const price = document.querySelector("h3");
const checkBox = document.querySelector(".checkBox")
console.log(checkBox);
let slider = document.querySelector("#myRange");
let switcher = document.querySelector(".switch");

let valueCount = 16 ; 


const rangeBG = document.querySelector("#myRange").oninput = function() {
    const value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #ECF0FB ' + value + '%, #ECF0FB  ' + value + '%, white 100%)';


}