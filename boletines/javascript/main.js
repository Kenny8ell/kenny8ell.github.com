
//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close")

//Recorrerlos

links.forEach(function (link){

  //Agregar un evento "click" a cada uno de ellos
  link.addEventListener("click", function(event){
    event.preventDefault();

    let content = document.querySelector('.content');

    //Quitarle la clase de animación que ya tiene
    content.classList.remove("animate__slideInDown");

    //Agregar clase para animar su salida
    content.classList.add("animate__slideOutUp");

    setTimeout(function(){
      location.href = "/boletines";
    },600)
  });
});
