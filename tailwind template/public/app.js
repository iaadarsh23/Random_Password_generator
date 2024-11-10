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
let Specialsymbols='!@#$%^&*()_-+=}{][\|;:.,/?><~';
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

//getinradomInteger

function getRandomInteger(max, min){
    return Math.floor(Math.random()*(max-min))+min;
    
}

//getting random number

function getrandomNum(){
    //we only want to get the number from 0-9
    return getRandomInteger(0,9);
}

//getting randomUppercase letter

function getrandomUppercase(){
    //this method will convert random integer to character and the number are ascii value of capital letters
    return String.fromCharCode(getRandomInteger(65,91))
}

//getting randomlowercase letter
function getrandomlowercase(){
    return String.fromCharCode(getRandomInteger(97,123))
}

//getting randomSymbols

function getRanSymbols(){
    const randNum= getRandomInteger(0,Specialsymbols.length);
    return Specialsymbols.charAt[randNum];
}
getRanSymbols()


