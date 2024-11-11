const outputTab= document.getElementById('password-output');
const copyBtn= document.getElementById('copy-btn');
const showLen= document.getElementById('pswd-len');
const upperCase= document.getElementById('uppercase');
const lowerCase= document.getElementById('lowercase');
const number= document.getElementById('numbers');
const symbol= document.getElementById('symbols');
const passSlider= document.getElementById('slider');
const colorIndicator= document.getElementById('indicator')
const copymsg= document.getElementById('copy-msg');
const generateBtn= document.getElementById('gen-pass');
const allCheckbox= document.querySelectorAll("input[type=checkbox]")


let password='';
let passwordLength=10;
let Specialsymbol='!@#$%^&*()_-+=}{][\|;:.,/?><~';
let checkCount=0;
handleSlider()

//1.slider function
//iska kaam itna hai bs ye password ko ui pr reflect krvata hai bs

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

//3.getinradomInteger

function getRandomInteger(max, min){
    return Math.floor(Math.random()*(max-min))+min;
    
}

//4.getting random number

function getrandomNum(){
    //we only want to get the number from 0-9
    return getRandomInteger(0,9);
}

//5.getting randomUppercase letter

function getrandomUppercase(){
    //this method will convert random integer to character and the number are ascii value of capital letters
    return String.fromCharCode(getRandomInteger(65,91))
}

//6.getting randomlowercase letter
function getrandomlowercase(){
    return String.fromCharCode(getRandomInteger(97,123))
}

//7.getting randomSymbols

function getRanSymbols(){
    const randNum= getRandomInteger(0,Specialsymbols.length);
    return Specialsymbols.charAt[randNum];
}
getRanSymbols()

//8.color change

function calStrength(){
    let hasUpper = upperCase.checked;
    let hasLower = lowerCase.checked;
    let hasNumber = number.checked;
    let hasSymbol = symbol.checked;

    // Reset all indicators
    document.getElementById('strong').classList.add('hidden');
    document.getElementById('medium').classList.add('hidden');
    document.getElementById('weak').classList.add('hidden');

    // Determine and show the correct indicator
    if (hasUpper && hasLower && (hasSymbol || hasNumber) && passwordLength >= 8) {
        setIndicator('#008000'); // Strong
        document.getElementById('strong').classList.remove('hidden');
    } 
    else if ((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6) {
        setIndicator("#ffb343"); // Medium
        document.getElementById('medium').classList.remove('hidden');
    } 
    else {
        setIndicator("#ff2c2c"); // Weak
        document.getElementById('weak').classList.remove('hidden');
    }
}

// 10.copy content to clipboard

async function copyContent() {
    //this is an api used to copy something on clipboard, it will return promise
    //jo bhi outputtab pr show hoga vo sab dikhega
    const response= await navigator.clipboard.writeText(outputTab.value);
     
    try {
        if(!response.ok){
            throw new Error('api couldnt get fetched');
        }
        copymsg.innerText='Copied';
    } catch (e) {
        copymsg.innerText='failed';
        
    }
    // to make copy span visible
    //this makes any css made in copybtn visible for sometimes
    copymsg.classList.add('active');

    //to make copt span hide
    setTimeout(()=>{
        copymsg.classList.remove('active');
    },2000);

}

  //11. well add a event listener to handle the slider moving then the length of password will be changed

  passSlider.addEventListener("input", (e)=>{
    passwordLength= e.target.value;
    handleSlider(); 
  })

  //12.password copy

  copyBtn.addEventListener(('click'),()=>{
    if(outputTab.value){
        copyContent();
    }
  });

  //13.making a checkbox checked default

function handleCheckBoxes(){
    checkCount=0;
    allCheckbox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++
    })
    //special condition

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}

allCheckbox.addEventListener('change', handleCheckBoxes);

  //14.main generate password
  generateBtn.addEventListener('click',()=>{
    if(checkCount<=0)
        return;

    if(passwordLength<checkCount){
        passwordLength=checkCount;
    }

    //lets put the main selection stuff

    let funArr=[];

    if(upperCase.checked){
        funArr.push(getrandomUppercase);
    }
    if(lowerCaserCase.checked){
        funArr.push(getrandomlowercase);
    }
    if(number.checked){
        funArr.push(getrandomNum);
    }
    if(Specialsymbol.checked){
        funArr.push(getRanSymbols);
    }

    //compulsory condition
    for(let i=0; i<funArr.length;i++){
        password+=funArr[i]
    }

    //remaining condition
    for(let i=0;i<passwordLength-funArr.length;i++){
        let rndIndex= getRandomInteger(0,funArr.length);
        password+=funArr[rndIndex]()
    }


    //shuffle the password
    password= shuffulePassword(Array.from(password));

    //show in UI
    outputTab.value=password;

    //calculating the strength
    calStrength();
  })

  //shuffle password algo -
  //Fisher Yates Method

// Shuffle password using Fisher-Yates
function shufflePassword(passwordArray) {
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[randomIndex]] = [passwordArray[randomIndex], passwordArray[i]];
    }
    return passwordArray.join('');
}