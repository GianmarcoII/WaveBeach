$(function(){
    alert('I do not take credit or rights for the images used on the website. The use of multimedia content is for representative purposes only. All rights go to their respective authors. ');
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
