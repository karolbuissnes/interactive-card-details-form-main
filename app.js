var regex = /[a-zA-Z]/;

const formContainer = document.querySelector('.form');
const thanksYou = document.querySelector('.end');
//font card elements
const cardNumber = document.querySelector('.card-number');
const userName = document.querySelector('.user-name');
const month = document.getElementById('month');
const year = document.getElementById('year');

//back card elementes
const cvc  = document.querySelector('.cvc');

//inputs
const cardholderForm = document.querySelector('.cardholderForm');
const cardNumberForm = document.querySelector('.cardNumberForm');
const monthForm = document.querySelector('.monthForm');
const yearForm = document.querySelector('.yearForm');
const CVCForm = document.querySelector('.CVCForm');
const button = document.querySelector('.button')

//errors
const wrongFormatNumberForm = document.querySelector('.wrong-format-number-form')
const itsTooshortNumberForm = document.querySelector(".its-too-short-number-form")
const blankError = document.querySelector('.year-cvc-month-error')
cardholderForm.addEventListener('input',(event)=>{
    userName.innerHTML = event.target.value;
});

let outPutCard = ''

cardNumberForm.addEventListener('input',(event)=>{

    let outputCardNumber = ''

    for(let i = 0; i< event.target.value.length;i++){
        outputCardNumber += event.target.value[i];
        if ((i + 1) % 4 === 0 && (i + 1) !== event.target.value.length) {
            outputCardNumber += " ";
        }
    }
    cardNumber.innerHTML = outputCardNumber 
    outPutCard = outputCardNumber
})

let monthOutput = '';
monthForm.addEventListener('input',(event)=>{
    month.innerHTML = event.target.value
    monthOutput = event.target.value
})
let yearOutput = ''

yearForm.addEventListener('input',(event)=>{
    year.innerHTML = event.target.value
    yearOutput = event.target.value
})

let cvcOutput = ''

CVCForm.addEventListener('input', (event)=>{
    cvc.innerHTML = event.target.value
    cvcOutput = event.target.value
})

button.addEventListener('click', ()=>{
    let x = false,y = false ,z =false ;
    if(outPutCard.length < 16){
        itsTooshortNumberForm.style.display = 'block'
    } else{
        itsTooshortNumberForm.style.display = 'none'
        x = true
    }

    if (regex.test(outPutCard)){
        wrongFormatNumberForm.style.display = 'block'
    } else {
        wrongFormatNumberForm.style.display = 'none'
        y= true;
    }
    if(cvcOutput == '' || yearOutput == '' || monthOutput == ''){
        blankError.style.display = 'block';
    } else{ 
        blankError.style.display = 'none';
        z = true

    }
    if (x && y && z){
        formContainer.style.display = 'none';
        thanksYou.style.display = 'flex';
    }
})