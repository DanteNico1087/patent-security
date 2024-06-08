document.addEventListener('DOMContentLoaded', () => {
    const verifyForm = document.getElementById('verifyForm');
    const loadForm = document.getElementById('loadForm');
    const clearVerifyForm = document.getElementById('clearVerifyForm');
    const clearLoadForm = document.getElementById('clearLoadForm');
    const verifyResult = document.getElementById('verifyResult');
    const loadResult = document.getElementById('loadResult');

    verifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const matricula = document.getElementById('matricula').value;
        const modelo = document.getElementById('modelo').value;
        const color = document.getElementById('color').value;

        // Aquí se debería realizar la verificación con la base de datos

        // Ejemplo de verificación y alerta de seguridad
        const isVerified = (matricula === '123ABC' && modelo === 'Toyota' && color === 'Rojo');
        if (isVerified) {
            verifyResult.textContent = 'Acceso permitido';
            verifyResult.classList.remove('alert');
            verifyResult.style.color = 'green';
        } else {
            verifyResult.textContent = '¡Alerta de seguridad!';
            verifyResult.classList.add('alert');
        }
    });

    loadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newMatricula = document.getElementById('newMatricula').value;
        const newModelo = document.getElementById('newModelo').value;
        const newColor = document.getElementById('newColor').value;

        // Aquí se debería realizar la carga de nuevos datos en la base de datos

        loadResult.textContent = 'Datos cargados exitosamente';
        loadResult.style.color = 'green';
    });

    clearVerifyForm.addEventListener('click', () => {
        verifyForm.reset();
        verifyResult.textContent = '';
        verifyResult.classList.remove('alert');
    });

    clearLoadForm.addEventListener('click', () => {
        loadForm.reset();
        loadResult.textContent = '';
    });
});
