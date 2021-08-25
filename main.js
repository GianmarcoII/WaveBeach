$(function(){
    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.mobile');
    powerMenu(menu,mobile);
});

const powerMenu = function mobileMenu(menu,mobileMenu){
    try{
        $(mobileMenu).click(function(e){
            $(menu).toggleClass("open");
            e.preventDefault();
        });
    }catch(e){
        console.error(e);
    }
}