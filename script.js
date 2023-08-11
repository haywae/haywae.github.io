export function clicker() {
    let isOpen = false
    const menu = document.querySelector('.menuList');
    /*document.addEventListener('mousedown', ()=>{
        if (isOpen) {
            menu.style.display = "none"
        }
    })*/
    const button = document.querySelector('.button');
    button.addEventListener('click', ()=>{
        if (!isOpen) {
            menu.style.display = "block";
            isOpen = true
        } else {
            menu.style.display= "none";
            isOpen =false
        }
    })  
}
let itr = [0,1,2]
function changeImages() {
    const images = ["./images/carouselPics/church.jpg", "./images/carouselPics/famagusa.jpg", "./images/carouselPics/kyrenia1.jpg", "./images/carouselPics/kyrenia2.jpg", 
    "./images/carouselPics/kyrenia3.jpg", "./images/carouselPics/monastery.jpg", "./images/carouselPics/old-house.jpg"
    ];
    const slides = document.querySelectorAll(".slideImg");

    const changer = () => {
        if(itr[0] === images.length-1){
            itr[0] = 0 ;
        }if (itr[1] === images.length-1) {
            itr[1] = 0 ;
        }if (itr[2] === images.length-1) {
            itr[2] = 0 ;
        } 
        slides[0].src= images[itr[0]];
        slides[1].src= images[itr[1]];
        slides[2].src= images[itr[2]];
        itr[0] ++, itr[1] ++; itr [2]++;
    }
    changer();
}
document.addEventListener("DOMContentLoaded", ()=> {
    setInterval(changeImages, 15000);
    clicker();
})

