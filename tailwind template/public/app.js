const outputTab= document.getElementById('password-output');
const copyBtn= document.getElementById('copy-btn');
const showLen= document.getElementById('pswd-len');
const upperCase= document.getElementById('uppercase')
const lowerCase= document.getElementById('lowercase')
const Number= document.getElementById('numbers')
const symbol= document.getElementById('symbols')

const generateBtn= document.getElementById('gen-pass');

// function genPass(){

// }
// genPass();

// //uppercase letter
// function randomUppercase(){
//     const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result='';
//     for(let i=0;i<letters.length;i++){
//         let randomIndex= Math.floor(Math.random() *letters.length)
//         result+= letters[randomIndex];
//     }
//     console.log(result);
// }
// randomUppercase(5);


//lowercase letter
function randomLowerCase(){
    const lowerletters='abcdefghijklmnopqrstuvwxyz';
    let lowerResult='';
    for(let i=0;i<lowerletters.length;i++){
        let index= Math.floor(Math.random()*lowerletters.length);
        lowerResult+=lowerletters[index];
    } 
    console.log(lowerResult);
}
randomLowerCase();