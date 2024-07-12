let currdisvalv = '';

function appendToDisplay(value) {
    currdisvalv += value;
    document.querySelector('#display').value = currdisvalv;
}

function clearDisplay() {
    currdisvalv = '';
    document.querySelector('#display').value = currdisvalv;
}

function calculateResult() {
    try {
        const result = eval(currdisvalv);
        document.querySelector('#display').value = currdisvalv + '=' + result;
        currdisvalv = result.toString();
    } catch (e) {
        document.querySelector('#display').value = 'Error';
    }
}