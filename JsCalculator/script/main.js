const keys = [
    ...document.querySelectorAll('.key'),
    ...document.querySelectorAll('.equal'),
    ...document.querySelectorAll('.zero')
];

const keyCodeList=keys.map(touch=>touch.dataset.key);

const result = document.querySelector('.result');





document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    console.log(value);
    calulate(value);
});



document.addEventListener('click', (e) => {
 const value = e.target.dataset.key;
 calulate(value);
});

const calulate = (value) => {
if(keyCodeList.includes(value)){
switch (value) {
    case '8':
    result.textContent = '';
    break;
    case '13':
    case '187':
        const calcul = eval(result.textContent);
        result.textContent =calcul;
break;
    default:
        const indexKeyCode = keyCodeList.indexOf(value);    
        const key = keys[indexKeyCode];
        result.textContent += key.innerHTML;
}

}

}