let headerDistance=HEADER.offsetTop;

window.onscroll= function (){
    FixedScroll();
}


function FixedScroll(){
    if(window.pageYOffset > headerDistance){
        HEADER.style.position="fixed";
        HEADER.style.top="0";
        HEADER.style.boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)";
        HEADER.style.animation="dropAnimation .5s ease-out";
    }else{
        HEADER.style.position="relative";
        HEADER.style.boxShadow="none";
    }
}
