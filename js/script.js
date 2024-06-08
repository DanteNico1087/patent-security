verifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const matricula = document.getElementById('matricula').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;

    // Obtener los datos de la base de datos simulada
    const autos = {
      "autos": [
        {
          "matricula": "ABC123",
          "modelo": "Toyota",
          "color": "Rojo",
          "id": "1ad5"
        },
        {
          "matricula": "XYZ789",
          "modelo": "Honda",
          "color": "Azul",
          "id": "c1b6"
        },
        {
          "id": "5aec",
          "matricula": "KGF398",
          "modelo": "Nissan",
          "color": "Gris"
        },
        {
          "id": "4eba",
          "matricula": "sdh456",
          "modelo": "Ford",
          "color": "Verde"
        }
      ]
    };

    // Verificar si los datos ingresados coinciden con los de la base de datos
    const isVerified = autos.autos.some(auto => auto.matricula === matricula && auto.modelo === modelo && auto.color === color);

    if (isVerified) {
        verifyResult.textContent = 'Acceso permitido';
        verifyResult.classList.remove('alert');
        verifyResult.style.color = 'green';
    } else {
        verifyResult.textContent = '¡Alerta de seguridad!';
        verifyResult.classList.add('alert');
        verifyResult.style.color = 'white';
    }
});

clearVerifyForm.addEventListener('click', () => {
    // Resetear el formulario
    verifyForm.reset();
    // Limpiar el mensaje de resultado
    verifyResult.textContent = '';
    // Remover cualquier clase de alerta
    verifyResult.classList.remove('alert');
    // Restablecer el color del texto
    verifyResult.style.color = '';
});
