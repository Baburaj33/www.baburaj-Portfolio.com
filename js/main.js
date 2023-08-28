// show menu

const menu_icon = document.querySelector("#nav_menu-icon");
menu_icon.addEventListener("click",()=>{
    const nav = document.querySelector("#nav_menu");
    nav.classList.toggle('show')
})


