const ul = document.querySelector('.list');
console.log(ul);

let x;

for (let i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
            x= ul.innerHTML += `<li class="box green box--${i}">${i}</li>`;
    }else if (i % 5 == 0) {
            x=ul.innerHTML += `<li class="box yellow  box--${i}">${i}</li>`;
    }else if ( i % 3 == 0) {
            x=ul.innerHTML += `<li class="box red  box--${i}">${i}</li>`;
    }else {
            x=ul.innerHTML += `<li class="box none  box--${i}">${i}</li>`;
    }                
}
    
console.log(x);


