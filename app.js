
function formularioDeDatos(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let telefono = document.getElementById("tel").value;
    let carrera = document.getElementById("cars").value;
    let email = document.getElementById("gmail").value;
    let curso = document.getElementById("curs").value;
    let ciudad = document.getElementById("ciudad").value;

    if (edad >= 18){
        alert("Eres mayor de edad✅")
        alert(`
            Registro:
            Nombre: ${name}
            Edad: ${edad}
            Telefono: ${telefono}
            Carrera escogida: ${carrera}
            Correo: ${email}
            Curso escogido: ${curso}
            Cuidad: ${ciudad}
        `)
    }else{
        alert("Eres menor de edad, no puede seguir el registro ❌")
    }
}   