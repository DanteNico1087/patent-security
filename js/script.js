verifyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const matricula = document.getElementById('matricula').value.trim().toLowerCase();
  const modelo = document.getElementById('modelo').value.trim().toLowerCase();
  const color = document.getElementById('color').value.trim().toLowerCase();

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

  // Convertir datos de la base de datos a minúsculas
  const isVerified = autos.autos.some(auto => 
      auto.matricula.toLowerCase() === matricula && 
      auto.modelo.toLowerCase() === modelo && 
      auto.color.toLowerCase() === color
  );

  if (isVerified) {
      verifyResult.textContent = 'Acceso permitido';
      verifyResult.classList.remove('alert');
      verifyResult.style.color = 'green';
  } else {
      verifyResult.textContent = '¡Alerta de seguridad!';
      verifyResult.classList.add('alert');
      verifyResult.style.color = 'white';
  };

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
