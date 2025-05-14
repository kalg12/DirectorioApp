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
};

consumirApi();

// TAREA EN INGLÉS HACER TODO
//Consumir otra API y mostrar la data en consola como acá arriba 👆🏼
