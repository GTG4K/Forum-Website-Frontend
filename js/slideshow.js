const slideshowImages = document.querySelectorAll(".slideshow-img");
let radioBtnDiv = document.querySelector(".radio-buttons");
let leftbtn = document.querySelector(".left");
let rightbtn = document.querySelector(".right");

const NextImageDelay = 3000; //3 seconds
let currentImageCount = 0;
intervalRunning = true;

slideshowImages[currentImageCount].style.opacity = 1;

// INITIAL SETUP
for (let i = 0; i < slideshowImages.length; i++){
    let radioLabel = document.createElement("label");
    radioLabel.classList.add("radio-button")
    radioBtnDiv.appendChild(radioLabel);
    let radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioLabel.appendChild(radioInput);
    let radioSpan = document.createElement("span");
    radioSpan.classList.add("checkmark");
    radioLabel.appendChild(radioSpan);
    if(i==0){
        radioLabel.classList.add("checked") ;
    }
}

let radioButtons = document.querySelectorAll(".radio-button");

function nextImg(){
    slideshowImages[currentImageCount].style.opacity = 0;
    radioButtons[currentImageCount].classList.remove("checked");
    currentImageCount = (currentImageCount + 1) % slideshowImages.length;
    slideshowImages[currentImageCount].style.opacity = 1;
    radioButtons[currentImageCount].classList.add("checked");
}

function resetInterval(){
    clearInterval(slideshowInterval);
    intervalRunning = false;
    setTimeout(()=>{
        if(intervalRunning == false){
            slideshowInterval = setInterval(nextImg, NextImageDelay);
            intervalRunning = true;
        }
    },1000);
}

let slideshowInterval = setInterval(nextImg, NextImageDelay);
console.log(slideshowInterval);


//ON CLICK EVENTS
for (let i = 0; i < radioButtons.length; i++){
    radioButtons[i].addEventListener("click", ()=> {
        let checkedButton = document.querySelector(".radio-button.checked");
        checkedButton.classList.remove("checked");
        radioButtons[i].classList.add("checked");
        slideshowImages[currentImageCount].style.opacity = 0;
        currentImageCount = i;
        slideshowImages[currentImageCount].style.opacity = 1;

        resetInterval();
    });
}

leftbtn.addEventListener("click", ()=>{

    let imagecount = slideshowImages.length;

    if(currentImageCount==0){
        slideshowImages[currentImageCount].style.opacity = 0;
        radioButtons[currentImageCount].classList.remove("checked");
        currentImageCount = imagecount - 1;
        slideshowImages[currentImageCount].style.opacity = 1;
        radioButtons[currentImageCount].classList.add("checked");

        resetInterval()
    }else{
        slideshowImages[currentImageCount].style.opacity = 0;
        radioButtons[currentImageCount].classList.remove("checked");
        currentImageCount = (currentImageCount - 1) % slideshowImages.length;
        slideshowImages[currentImageCount].style.opacity = 1;
        radioButtons[currentImageCount].classList.add("checked");

        resetInterval()
    }
});

rightbtn.addEventListener("click", ()=>{
    
    slideshowImages[currentImageCount].style.opacity = 0;
    radioButtons[currentImageCount].classList.remove("checked");
    currentImageCount = (currentImageCount + 1) % slideshowImages.length;
    slideshowImages[currentImageCount].style.opacity = 1;
    radioButtons[currentImageCount].classList.add("checked");

    resetInterval()
});
