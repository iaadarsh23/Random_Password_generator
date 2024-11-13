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
const msg1= document.getElementById('text2');

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

function getRandomInteger(min, max){
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
    const randNum= getRandomInteger(0,Specialsymbol.length);
    return Specialsymbol.charAt(randNum);
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
       
        msg1.innerText="Congrats! You’ve built a fortress, \n and not even an army of hackers is \n getting through this bad boy."; 
    } 
    else if ((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6) {
        setIndicator("#ffb343"); // Medium
        document.getElementById('medium').classList.remove('hidden');
        
        msg1.innerText = "This house has 'break-in' vibes.\n Add some locks before the \n skeletons move in.";

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

allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxes);
});


  //14.main generate password
  generateBtn.addEventListener('click', () => {
    // Clear previous password
    password = "";

    if (checkCount <= 0) return;

    // Adjust passwordLength to be at least as long as the number of selected types
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // Initialize an array of functions based on selected options
    let funArr = [];

    if (upperCase.checked) {
        funArr.push(getrandomUppercase);
    }
    if (lowerCase.checked) {
        funArr.push(getrandomlowercase);
    }
    if (number.checked) {
        funArr.push(getrandomNum);
    }
    if (symbol.checked) {
        funArr.push(getRanSymbols);
    }

    // 1. Add one character for each selected type to satisfy the compulsory condition
    for (let i = 0; i < funArr.length; i++) {
        password += funArr[i]();
    }

    // 2. Calculate the remaining length to reach `passwordLength`
    for (let i = 0; i < passwordLength - funArr.length; i++) {
        let rndIndex = getRandomInteger(0, funArr.length);
        password += funArr[rndIndex]();
    }

    // 3. Shuffle the password
    password = shufflePassword(Array.from(password));

    // 4. Show password in the UI
    outputTab.value = password;

    // 5. Calculate the strength of the password
    calStrength();
    document.getElementById('text').style.marginTop='8%';
    document.getElementById('text2').classList.remove('hidden');  
});


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