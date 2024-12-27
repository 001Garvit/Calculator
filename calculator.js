let resultField = document.getElementById('res');

function Solve(value) {
    resultField.value += value; 
}

function Clear() {
    resultField.value = ''; 
}

function Back() {
    resultField.value = resultField.value.slice(0, -1);
}

function Result() {
    try {
        resultField.value = eval(resultField.value); 
    } catch (error) {
        resultField.value = 'Error'; 
    }
}
