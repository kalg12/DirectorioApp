//En JS tenemos las funciones de tipo flecha
//Utilzaremos fetch qué es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola
    .then((data) => console.log(data))
    //Descubrir que hacer en caso de que no me corresponda
    .catch((error) => console.log(error));

  //EL DOM - Document Object Model
  // Semana 2: Apartir de esta sesión, vamos a identificar a los elementos del HTML con un "id"

  //Creo una constante y le paso como valor el id del H1 que está en la línea 17 de mi HTML
  //con getElementById
  const titulo = document.getElementById("tituloEncabezado");

  //Imprimo la variable titulo pero con el atributo textContent
  console.log(titulo.textContent);

  //La data de la api la vamos a llevar al HTML
};

consumirApi();
