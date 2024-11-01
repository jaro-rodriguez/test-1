// Función para pedir notas al usuario y llenar la tabla
function pedirNotas() {
    const ramos = ["HTML", "CSS", "JavaScript"];
    const tabla = document.getElementById("tabla-notas");

    ramos.forEach(ramo => {
        let nota1 = parseFloat(prompt(`Ingresa la primera nota para ${ramo}`));
        let nota2 = parseFloat(prompt(`Ingresa la segunda nota para ${ramo}`));
        let nota3 = parseFloat(prompt(`Ingresa la tercera nota para ${ramo}`));

        let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

        let fila = `
            <tr>
                <td>${ramo}</td>
                <td>${nota1}</td>
                <td>${nota2}</td>
                <td>${nota3}</td>
                <td>${promedio}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}

// Llamar a la función para iniciar el proceso
pedirNotas();
