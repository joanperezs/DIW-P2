
window.addEventListener("DOMContentLoaded", (event) => {

    const menubton = document.getElementById("menu")
    const nav = document.querySelector("header nav")

    menubton.addEventListener("click", (event) => {
        menubton.classList.toggle("salir")
        nav.classList.toggle("visible")
    })
})