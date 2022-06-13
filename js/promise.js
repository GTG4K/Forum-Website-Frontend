function newColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

let logoContainer = document.querySelector(".logo-container");
let logoColor = document.querySelector("#logo-color");

logoContainer.addEventListener("click", () => {
    let newLogo = new Promise((resolve, reject) =>{
        let colorRGB = newColor();
        logoColor.style.color = colorRGB;


        if(logoColor.style.color == colorRGB){
            resolve("color changed");
        }else{
            reject('no new color for you!!!');
        }
    })

    newLogo.then((message)=>{

        console.log("PROMISE SUCCESS " + message);
    }).catch((message) =>{
        console.log(message);
    });
});

