/* 
    Función de barra de busqueda
*/
function search_web() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('list');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

/*
Array/objs para pintar patrocinadores con una función
*/

var patrocinador =  [{
        Image : "img/LOGO_CINESA_2.png"
    },
    {
        Image : "img/LOGO_CINESA_2.png"
    },
    {
        Image : "img/LOGO_CINESA_2.png"
    },
    {
        Image : "img/LOGO_CINESA_2.png"
    }
    ]



    for (let i = 0; i < patrocinador.length; i++) {
      document.getElementById('patrocinadores').innerHTML +=
        "<div class='patrocinador'>" + '<img src ='+patrocinador[i].Image +'>'+ '</div>'
    }
  
