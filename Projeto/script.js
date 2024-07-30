function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile alt")

   if(html.classList.contains('light')){
    img.setAttribute('src', 'assets/avatar-light.png')
   }else {
    img.setAttribute('src','assets/avatar.png')
   }

   if(html.classList.contains('light')){
    img.setAttribute('alt', 'icon claro')
   }else {
    img.setAttribute('alt','icon escuro')
   }


}