
//referencias para la fecha
const numeroAño = document.getElementById('numeroAño');
const numeroDia = document.getElementById('numeroDia');
const nombreDia = document.getElementById('nombreDia');
const hora = document.getElementById("hora")


const getDate = () => { //funcion flecha
    const fecha = new Date(); //metodo new Date() para obtener la fecha actual
    
    //se usa el metodo toLocaleString() del metodo date() que convierte el objeto Date en una cadena de texto utilizando el formato de fecha y hora local del usuario. Esto significa que la cadena de texto resultante tendrá un formato que es apropiado para la región geográfica del usuario.
    //se dejara "en" ingles, puede ser "es", "fr", "ja",etc. Luego se le especifica que se necesita, day, year, hour, etc
    numeroDia.textContent = fecha.toLocaleString('en', { day: 'numeric' }); /* numeric = dia numerico */
    nombreDia.textContent = fecha.toLocaleString('en', { weekday: 'long' }); /* dia de la semana, long = palabra completa */
    nombreMes.textContent = fecha.toLocaleString('en', { month: 'short' }); /* short = mes recortado */
    numeroAño.textContent = fecha.toLocaleString('en', { year: 'numeric' }); /* año en numero */
    
    //guardando la hora en español para luego concatenarla y enviarla al dom
    let hr = fecha.toLocaleString('es', { hour: '2-digit' });
    let min = agregarCero(fecha.toLocaleString('es', { minute: '2-digit' }));
    let seg = agregarCero(fecha.toLocaleString('es', { second: '2-digit' })); //se le añadio una funcion adhicional para añadirle un 0 en caso que solo sea un digito
    hora.textContent =  `${hr}:${min}:${seg}` ; //concatenando con templateString

};
getDate()
setInterval(getDate ,1000); //setInterval llama a la funcion cada 1 s, para que la funcion se actualice y asi los segundos cambien


function agregarCero(segundos) { //funcion usada para agregar 0 en caso que solo sea un digito
    if (segundos < 10) {
      return '0' + segundos;
    }
    return segundos;
  }


// Lista de tareas
const lista = document.getElementById('lista'); //aca se guardan las tareas
let cantidad = document.getElementById("cantidad"); 
let contador = 0;


//cuando el usuario envie el formulario haciendo click en + ,se llamara esta funcion
function todoList(e) {
    e.preventDefault(); //evitar que el input del form actualice la pagina y se pierda el contenido
    const { value } = e.target.inputTarea; //se accede al name del inputTarea y se guarda el valor ingresado por el usuario  
    if(!value) return; // si no hay value (no se ingreso nada en el input) return, osea no se guarda y se detiene la funcion value == ""
    //en caso que no se si se ingrese algo, sigue la funcion...

    const tarea = document.createElement('div'); //se crea un elemento "div" y se guarda en la const tarea
    tarea.classList.add('tarea'); //se le adhiere la clase tarea de css
    tarea.textContent = value; //se le da un valor de value
    lista.prepend(tarea); // se agrega tarea al contenedor y se le agrega al comienzo de la lista con prepend   
    
    tarea.addEventListener('click', tachar) //se le agrega la funcion tachar al hacerle click a tarea
    e.target.reset(); //se limpia el input del texto que tenga

    let btnEliminar = document.createElement("button"); /* Se crea un boton eliminar*/
    btnEliminar.textContent = "x";
    btnEliminar.classList.add('btnEliminar');    //se le agrega la clase btnEliminar usada en css
    tarea.appendChild(btnEliminar);

    contador = contador + 1; /* contador++ */
    cantidad.textContent = contador; /* se realiza igualdad entre cantidad de html y variable contador de JS */


    /* se le agrega la funcionalidad e btnElimnar para que elimine la tarea al hacerle click */
    btnEliminar.onclick = ()=>{
        tarea.remove()
        contador = contador -1; //ademas del contador restara 1
        cantidad.textContent = contador; //se iguala cantidad a contador
    }
};


const tachar = e => {
    e.target.classList.toggle('tachada');  //al hacerle click al elemento creado se agrega la clase tachada, al volver a clickearlo se le quita
};




/* Funcionalidad unicamente usada para las pulsaciones del boton + en caso de estar escribiendo algun texto en el input */
//se usa el evento input, este se produce cuando el usuario escribe o modifica el contenido de un elemento input o textarea.
const inputTarea = document.getElementById('inputTarea');
const button = document.getElementById('button');

inputTarea.addEventListener('input', function() {
    if (inputTarea.value.length > 0) { //si hay algo escrito en el value de input...
      button.classList.add('pulsacion');    
    } else {
      button.classList.remove('pulsacion');
      button.classList.add('normal');
    }
});

button.addEventListener('click', function() {  //al hacer click en el boton +  vuelve a la normalidad el mismo
    button.classList.remove('pulsacion');
    button.classList.add('normal');
  });












