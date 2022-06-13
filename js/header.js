let Extender = document.getElementById('menu-extender');
let HeaderInputs = document.getElementById('header-input');
let pfp = document.getElementById('profile-picture');

let backdrop = document.getElementById('backdrop');

let isOpen = true;
let mobile = false;

Extender.style.transform = "rotate(45deg)";

if(window.innerWidth <= 750){
    backdrop.style.display = "block"; 
}

Extender.addEventListener('click', () => {
    switch (isOpen) {
        case true:
            Extender.style.transform = "rotate(0deg)";
            HeaderInputs.style.height = '0px';      
            backdrop.style.display = "none"; 
            isOpen = false;

            setTimeout( () => {
                HeaderInputs.classList.toggle('active');
            }, 200);

            break;

        case false:
            HeaderInputs.classList.toggle('active');
            HeaderInputs.style.height = '0px';
            Extender.style.transform = "rotate(45deg)";    
            backdrop.style.display = "block"; 

            setTimeout( () => {
                HeaderInputs.style.height = '190px';
            }, 50);
            
            isOpen = true;

            break;
    }   
})

window.addEventListener('resize', () => {

    if(window.innerWidth <= 750){
        mobile = true;
    }
    if(window.innerWidth > 750){
        mobile = false;
    }

    if(mobile == true){
        HeaderInputs.style.height = '190px'; 
        if(isOpen == true){
            backdrop.style.display = 'block';
        }
    }
    if(mobile == false){
        HeaderInputs.style.height = '70px';
        if(isOpen == true){
            backdrop.style.display = "none"; 
        }
        if(isOpen == false){
            HeaderInputs.classList.toggle('active');
            Extender.style.transform = "rotate(45deg)"; 
            isOpen = true;
        }
    }

});