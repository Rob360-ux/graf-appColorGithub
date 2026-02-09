const rojo = document.getElementById('rojo'), verde = document.getElementById('verde'), azul = document.getElementById('azul');
const numRojo = document.getElementById('numRojo'), numVerde = document.getElementById('numVerde'), numAzul = document.getElementById('numAzul');
const picker = document.getElementById('picker');
const visualizacion = document.getElementById('visualizacion'), hexCode = document.getElementById('hexCode');

function updateUI(r, g, b) {
    // Sincronizar Sliders
    rojo.value = r; verde.value = g; azul.value = b;
    // Sincronizar Números
    numRojo.value = r; numVerde.value = g; numAzul.value = b;
    // Sincronizar Cuadro y Hex
    const hex = "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1).toUpperCase();
    visualizacion.style.backgroundColor = `rgb(${r},${g},${b})`;
    hexCode.innerText = hex;
    picker.value = hex; // Sincroniza el picker
}

// Evento para Sliders y Números
[rojo, verde, azul, numRojo, numVerde, numAzul].forEach(input => {
    input.addEventListener('input', (e) => {
        let r = rojo.value, g = verde.value, b = azul.value;
        if (e.target.type === 'number') {
            r = numRojo.value; g = numVerde.value; b = numAzul.value;
        }
        updateUI(r, g, b);
    });
});

// Evento para Color Picker
picker.addEventListener('input', (e) => {
    const hex = e.target.value;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    updateUI(r, g, b);
});