let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementsByClassName("progress-value");
    let pos = document.documentElement.scrollTop;

    let caleHeight = document.documentElement.scrollHeight -
     document.documentElement.clientHeight;
     let ScrollValue = Math.round((pos * 100) / caleHeight);
     if(pos>100){
        scrollProgress.style.display = "grid";
     }
     else{
        scrollProgress.style.display = "none";
     }
     scrollProgress.addEventListener("click", () =>{
     document.documentElement.scrollTop = 0;
     });

     scrollProgress.style.background =  `conic-gradient(#f59305 ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
