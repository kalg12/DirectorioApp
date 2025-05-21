//En JS tenemos las funciones de tipo flecha
//Utilzaremos fetch qué es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola
    .then((data) => {
      //La data de la api la vamos a llevar al HTML
      //Paso 1.- Definimos las constantes que vamos a usar y el HTML que vamos a afectar
      const nombre = document.getElementById("nombre");
      const nombreUsuario = document.getElementById("nombreUsuario");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const website = document.getElementById("website");
      const street = document.getElementById("street");
      const contenedor = document.getElementById("contenedor");

      nombre.innerText = data[6].name;
      nombreUsuario.innerText = data[6].username;
      email.innerText = data[6].email;
      phone.innerText = data[6].phone;
      website.innerText = data[6].website;
      street.innerHTML = `<h1>${data[6].address.street}</h1>`;

      /* Persona 2 */
      const nombreDos = document.getElementById("nombreDos");
      const nombreUsuarioDos = document.getElementById("nombreUsuarioDos");
      const emailDos = document.getElementById("emailDos");
      const phoneDos = document.getElementById("phoneDos");
      const websiteDos = document.getElementById("websiteDos");
      const streetDos = document.getElementById("streetDos");

      nombreDos.innerText = data[5].name;
      nombreUsuarioDos.innerText = data[5].username;
      emailDos.innerText = data[5].email;
      phoneDos.innerText = data[5].phone;
      websiteDos.innerText = data[5].website;
      streetDos.innerHTML = `<h1>${data[5].address.street}</h1>`;

      /* Aquí vamos a facilitarnos la vida con ForEach */
      console.log(data);

      data.forEach(
        (personita, index) =>
          (contenedor.innerHTML += `
            <p>${personita.name}</p>
            <p>${personita.username}</p>
            <p>${personita.email}</p>
            <p>${personita.phone}</p>
            <p>${personita.website}</p>
            <hr>
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
