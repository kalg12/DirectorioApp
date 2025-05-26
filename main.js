//En JS tenemos las funciones de tipo flecha
//Utilzaremos fetch qué es un método para consumir una API

/* Defino en un arreglo las imagenes a utilizar */
const arregloDeImagenes = [
  "./src/images/01.jpeg",
  "./src/images/02.jpeg",
  "./src/images/03.jpeg",
  "./src/images/04.jpeg",
  "./src/images/05.jpeg",
  "./src/images/06.jpeg",
  "./src/images/07.jpg",
  "./src/images/08.webp",
  "./src/images/09.png",
  "./src/images/10.jpg",
];

//Paso 1: Función flecha
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola
    .then((data) => {
      //La data de la api la vamos a llevar al HTML
      //Paso 1.- Definimos las constantes que vamos a usar y el HTML que vamos a afectar
      const contenedor = document.getElementById("contenedor");

      /* Aquí vamos a facilitarnos la vida con ForEach */
      data.forEach(
        (personita, index) =>
          (contenedor.innerHTML += `

<div class="card" style="width: 18rem;">
  <img src=${arregloDeImagenes[index]} class="card-img-top" alt="usuario">
  <div class="card-body">
    <h5 class="card-title">${personita.name}</h5>
    <p class="card-text">Información de contacto de la persona</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Correo electrónico:${personita.email}</li>
    <li class="list-group-item">Calle:${personita.address.street}</li>
    <li class="list-group-item">Departamento:${personita.address.suite}</li>
  </ul>
</div>

      `)
      );
    })
    //Descubrir que hacer en caso de que no me corresponda
    .catch((error) => console.log(error));

  //EL DOM - Document Object Model
  // Semana 2: Apartir de esta sesión, vamos a identificar a los elementos del HTML con un "id"

  //Creo una constante y le paso como valor el id del H1 que está en la línea 17 de mi HTML
  //con getElementById
  const titulo = document.getElementById("tituloEncabezado");

  //Imprimo la variable titulo pero con el atributo textContent
  console.log(titulo.textContent);
};

consumirApi();
