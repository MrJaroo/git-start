function myAlert (){
    let  a = 'Error';
    let b = `<p class="orange">${a}</p>`
    document.querySelector('.test').innerHTML = b;
}

myAlert();