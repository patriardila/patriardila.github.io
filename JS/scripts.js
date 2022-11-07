
    const btn_menu = document.querySelector(".main-btn")
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items=document.querySelector('.main-links')
            menu_items.classList.toggle('show')
        })
    }
