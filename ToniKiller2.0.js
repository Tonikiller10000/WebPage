const NavBar = document.getElementById("NavBar");

let prevScrollPos = window.pageYOffset;


window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos){
        NavBar.classList.remove("NavBar_Active");}
    else{
        NavBar.classList.add("NavBar_Active");};
    prevScrollPos = currentScrollPos;
    }

function randcollor(){
    return Math.floor(Math.random()*16777216).toString(16);//16777216 = 255*255*255(RGB)
}



