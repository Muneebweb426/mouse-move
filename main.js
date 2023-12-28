const mouse1 = document.querySelector('.mouse-c')
const mouse2 = document.querySelector('.mouse-d')


document.addEventListener('mousemove',(e) => {
    mouse1.style.cssText = mouse2.style.cssText = "left :"  + e.clientX +"px;"+"top :" +e.clientY +"px;"
}) 













































