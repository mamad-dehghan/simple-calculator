const number_1 = document.getElementById('number_1');
const number_2 = document.getElementById('number_2');
const number_3 = document.getElementById('number_3');
const number_4 = document.getElementById('number_4');
const number_5 = document.getElementById('number_5');
const number_6 = document.getElementById('number_6');
const number_7 = document.getElementById('number_7');
const number_8 = document.getElementById('number_8');
const number_9 = document.getElementById('number_9');
const number_0 = document.getElementById('number_0');
const number_dot = document.getElementById('number_dot');
const operator_reverse_sign = document.getElementById('operator_reverse_sign');
const operator_plus = document.getElementById('operator_plus');
const operator_minus = document.getElementById('operator_minus');
const operator_backspace = document.getElementById('operator_backspace');
const operator_clear = document.getElementById('operator_clear');
const operator_clear_all = document.getElementById('operator_clear_all');
const operator_divide = document.getElementById('operator_divide');
const operator_multiply = document.getElementById('operator_multiply');
const operator_resault = document.getElementById('operator_resault');
const resaultBox = document.getElementById('resault_box');

let history = '';
let input_operator;
let resault = '';

const showResault = (parameter) => {
    if (parameter === '')
        resault_box.innerText = '0';
    else
        resault_box.innerText = parameter;
};

const addToResault = (aNumber) => {
    resault += aNumber;
    showResault(resault);
};

const clearAll = () => {
    resault = '';
    history = '';
    input_operator = '';
    showResault(resault);
};

const backspace = () => {
    if (resault.length > 0) {
        resault = resault.slice(0, -1);
        showResault(resault);
    }
};

const calc = () => {
    if (resault === '') {
        return;
    }
    if (history !== '') {
        switch (input_operator) {
            case '+':
                history = (parseFloat(history) + parseFloat(resault)).toString();
                showResault(history);
                break;
            case '-':
                history = (parseFloat(history) - parseFloat(resault)).toString();
                showResault(history);
                break;
            case '*':
                history = (parseFloat(history) * parseFloat(resault)).toString();
                showResault(history);
                break;
            case '/':
                history = (parseFloat(history) / parseFloat(resault)).toString();
                showResault(history);
                break;
            case '+':
                history = (parseFloat(history) + parseFloat(resault)).toString();
                showResault(history);
                break;
            case '=':
                if (resault !== '') {
                    history = resault;
                }
                break;
            default:
                alert('ERROR!!');
                break;
        }
    } else {
        history = resault;
    }
    resault = '';
};

number_0.addEventListener('click', () => { resault === '' ? null : addToResault('0') });
number_1.addEventListener('click', () => { addToResault('1') });
number_2.addEventListener('click', () => { addToResault('2') });
number_3.addEventListener('click', () => { addToResault('3') });
number_4.addEventListener('click', () => { addToResault('4') });
number_5.addEventListener('click', () => { addToResault('5') });
number_6.addEventListener('click', () => { addToResault('6') });
number_7.addEventListener('click', () => { addToResault('7') });
number_8.addEventListener('click', () => { addToResault('8') });

number_9.addEventListener('click', () => { addToResault('9') });
number_dot.addEventListener('click', () => {
    if (resault === '')
        addToResault('0.');
    else if (resault.indexOf('.') === -1)
        addToResault('.');
});

operator_clear.addEventListener('click', () => clearAll());
operator_clear_all.addEventListener('click', () => clearAll());
operator_backspace.addEventListener('click', () => backspace());

operator_plus.addEventListener('click', () => {
    calc();
    input_operator = '+';
});
operator_minus.addEventListener('click', () => {
    calc();
    input_operator = '-';
});
operator_multiply.addEventListener('click', () => {
    calc();
    input_operator = '*';
});
operator_divide.addEventListener('click', () => {
    calc();
    input_operator = '/';
});
operator_reverse_sign.addEventListener('click', () => {
    if (resault !== '') {
        resault = (parseFloat(resault) * (-1)).toString();
        showResault(resault);
    }
});
operator_resault.addEventListener('click', () => {
    calc();
    input_operator = '=';
});