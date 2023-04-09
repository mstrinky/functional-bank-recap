function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
const newDepositAmount = getInputFieldValueById('deposit-field');
console.log(newDepositAmount);
})