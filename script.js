console.log("hello");

const grid = document.querySelector('.grid');

for(i = 0;  i < 16; i ++){
    const div = document.createElement('div');
    div.textContent = 'hi!'
    grid.appendChild(div)

}

