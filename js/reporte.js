let contador= 20262451;

function AgregarAlumnos(){
    const tabla = document.getElementById("ReporteAlumnos").getElementsByTagName("tbody")[0];
    const nuevoalumno = tabla.insertRow()

    nuevoalumno.insertCell(0).textContent=contador;
    nuevoalumno.insertCell(1).textContent="Nuevo Alumno";
    nuevoalumno.insertCell(2).textContent="Ingenieria de Requsitos";
    nuevoalumno.insertCell(3).textContent="10";

    contador++;

}