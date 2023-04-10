function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elemnetId){
    const element = document.getElementById(elemnetId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue ;
}

function setTextElementValueById(elementId , newValue){
    const textElement =document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){

const newDepositAmount = getInputFieldValueById('deposit-field');
// console.log(newDepositAmount);

const previousDepositTotal = getTextElementValueById('deposit-total');
// console.log(previousDepositTotal);

const newDepositTotal = previousDepositTotal + newDepositAmount;
setTextElementValueById('deposit-total', newDepositTotal);

const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal);
})