class Curso {
    constructor(id,nombre,modalidad, nivel, precio, cantidad){

    this.id = id
    this.nombre = nombre;
    this.modalidad = modalidad;
    this.nivel = nivel;
    this.precio = precio;
    this.cantidad = 1;
    
}
}
class Alumno {
    constructor(nombre, apellido, email, telefono, usuario, contraseña ,pais, ciudad, codigoPostal){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.telefono = telefono;
    this.usuario = usuario
    this.contraseña = contraseña
    this.pais = pais
    this.ciudad = ciudad
    this.codigoPostal = codigoPostal
    
}
}

const alumnoGonza = new Alumno ("Gonzalo", "Bustos Isasa","bustosgonza@gmail.com", 43081353, "@gonchi", 112358,"Argentina", "Victoria", 1644)


const arrayAlumnos = [alumnoGonza];
console.log(arrayAlumnos);


const cursoIntro = new Curso (1,"Introduccion a la medicina estetica", "Teorica", "Base", 150000, );
const cursoFormacion = new Curso (2,"Formacion practica general", "Practica", "Intermedio", 300000, )
const cursoRostro = new Curso (3,"Rejuvenecimiento facial", "Practica & teorica" , "Avanzado", 750000, );
const cursoCuerpo = new Curso (4,"Rejuvenecimiento corporal", "Practica & teorica", "Avanzado", 750000, );
const master = new Curso (5,"Master prescencial en rejuvenecimiento integral con la Dra. Isasa", "Practica", "Profesional", 1000000, );

const Cursos = [cursoIntro, cursoFormacion, cursoRostro, cursoCuerpo, master];
console.log(Cursos);

const arrayCarrito =[];


const contenedorCurso1 = document.getElementById("contenedorCurso1");


const mostrarCurso1 =() => {
    Cursos.forEach (Curso => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
        <div class = "card" >
           <img src= "files/diploma.png" class = "card-img-tom imgCursos" >
            <div class = "card-body" >
             <h2> ${Curso.nombre} </h2>
             <h5> Nivel: ${Curso.nivel} </h5>
             <p> Modalidad: ${Curso.modalidad} </p>
             <p> Precio: $${Curso.precio} </p>
             <button class = "btn colorBoton" id = "Boton${Curso.id}"> Comprar </button>
            </div>
        </div>`;

        contenedorCurso1.appendChild(card);

    })
}

mostrarCurso1();


const registrarme = document.getElementById(registroNuevo);
registrarme.addEventListener("click", () => {
    altaAlumno (); {
    let nombre = document.getElementById(validationCustom01);
    let apellido = document.getElementById(validationCustom02) ; 
    let email = document.getElementById(validationEmail);
    let telefono = document.getElementById(validationNumber) ;
    let usuario = document.getElementById(validationCustomUsername);
    let contraseña = document.getElementById(validationPassword);
    let pais = document.getElementById(validationCustom03) ;
    let ciudad = document.getElementById(validationCustom04) ;
    let codigoPostal = document.getElementById(validationCustom05);
    let alumno = new Alumno (nombre, apellido, email, telefono, usuario,contraseña, pais, ciudad, codigoPostal);
    arrayAlumnos.push (alumno);
    console.log(arrayAlumnos);
}
});



