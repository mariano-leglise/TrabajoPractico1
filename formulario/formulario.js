document.addEventListener("DOMContentLoaded", function() {

    const jsonUrl = 'carreras.json';

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('carrera');
            data.carreras.forEach(carrera => {
                const option = document.createElement('option');
                option.value = carrera.id;
                option.textContent = carrera.nombre;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar las carreras:', error));
});
