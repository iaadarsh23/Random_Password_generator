const outputTab= document.getElementById('password-output');
const copyBtn= document.getElementById('copy-btn');
const showLen= document.getElementById('pswd-len');
const upperCase= document.getElementById('uppercase');
const lowerCase= document.getElementById('lowercase');
const Number= document.getElementById('numbers');
const symbol= document.getElementById('symbols');
const passSlider= document.getElementById('slider');
const colorIndicator= document.getElementById('indicator')
const copymsg= document.getElementById('copy-msg');
const generateBtn= document.getElementById('gen-pass');
const allCheckbox= document.querySelectorAll("input[type=checkbox]")


let password='';
let passwordLength=10;

handleSlider()

//1.slider function
function handleSlider(){
    passSlider.value= passwordLength;
    showLen.innerText=passwordLength;
}

//2.setting the indicator

function setIndicator(color){
    //changing the color of indicator;
    colorIndicator.style.backgroundColor= color;

    //changing the shadow of indicator
    colorIndicator.style.boxShadow=color;
}







// // getting uppercase letter
// function getrandomUppercase(){
//     const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result='';
//     for(let i=0;i<letters.length;i++){
//         let randomIndex= Math.floor(Math.random() *letters.length)
//         result+= letters[randomIndex];
//     }
//     console.log(result);
// }
// getrandomUppercase(5);



// //getting lowercase letter
// function getrandomLowerCase(){
//     const lowerletters='abcdefghijklmnopqrstuvwxyz';
//     let lowerResult='';
//     for(let i=0;i<lowerletters.length;i++){
//         let index= Math.floor(Math.random()*lowerletters.length);
//         lowerResult+=lowerletters[index];
//     } 
//     console.log(lowerResult);
// }
// getrandomLowerCase();




// //getting random numbers
// function getrandomNum(min,max){
//     let getNum= Math.floor(Math.random()*max);
//     console.log(getNum)
// }
//  getrandomNum(1,100);



//getinradomInteger

function getRandomInteger(max, min){
    let integer= Math.floor(Math.random()*(max-min))+min;
    console.log(integer)
}
getRandomInteger(100,3);