let output = document.querySelector('#output')
let operators = document.querySelectorAll('.operators')
let backspace = document.querySelector('.backspace')
let btnClear =document.querySelector('#clear')
let tempArray = [];

function display(value) {
    if(value === '.' && tempArray.includes('.')){
        return;
    }else {

        output.value += value;
        tempArray.push(value);
    }
}
function clear() {
    output.value = "";
}
//
operators.forEach((ops)=>{
    ops.addEventListener('click', (e)=>{
        output.value += e.target.innerText;
        
    })

})
document.querySelector('.backspace').
addEventListener('click', ()=>{
    let outputArray = output.value.split('');
    outputArray.pop();
    output.value = outputArray.join('')
    
})
btnClear.addEventListener('click', clear)

function calculate() {
    if (output) {
        let result = eval(output.value);

        if (result === Infinity || result === -Infinity) {
            output.value = "ERROR";
        }else{
            output.value = result;
        }
    }if (error) {
        output.value = "Error"
    }
}
