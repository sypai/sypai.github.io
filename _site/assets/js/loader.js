const loader = document.querySelector('.loader');
const load_main = document.querySelector('.load_main');
const load = document.querySelector('.load');

function init(){
    setTimeout(() => {
        // load.classList.add("center-load");
        loader.style.opacity = 0;
        loader.style.display = 'none';
        load.style.display = 'none';

        load_main.style.display ='block';
        setTimeout(() =>  {
            // load.classList.remove("center-load");
            load_main.style.opacity =1;
        },10);

    }, 2000);
}

init();