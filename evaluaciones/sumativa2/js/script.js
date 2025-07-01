document.getElementById("registro-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const rut = document.getElementById("rut").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!validarRUT(rut)) {
    alert("RUT inválido. Debe tener el formato nnnnnnnn-n y un dígito verificador válido.");
    return;
  }

  if (!validarFechaNacimiento(fechaNacimiento)) {
    alert("Fecha de nacimiento inválida. Debes tener al menos 14 años y usar el formato dd/mm/aaaa.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Correo electrónico inválido. Debe tener el formato direccion@dominio.pais");
    return;
  }

  alert("Formulario enviado correctamente 🎉");
});

// Validación RUT
function validarRUT(rut) {
  const rutRegex = /^\d{7,8}-[\dkK]$/;
  if (!rutRegex.test(rut)) return false;

  const [numero, dv] = rut.split("-");
  return calcularDV(numero) === dv.toUpperCase();
}

function calcularDV(rut) {
  let suma = 0;
  let multiplo = 2;

  for (let i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut[i]) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const resto = 11 - (suma % 11);
  if (resto === 11) return "0";
  if (resto === 10) return "K";
  return resto.toString();
}

// Validación Fecha de Nacimiento
function validarFechaNacimiento(fecha) {
  const fechaRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = fecha.match(fechaRegex);
  if (!match) return false;

  const dia = parseInt(match[1]);
  const mes = parseInt(match[2]);
  const anio = parseInt(match[3]);

  if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 0 || anio > 9999) return false;

  const hoy = new Date();
  const fechaNacimiento = new Date(anio, mes - 1, dia);
  const edad = hoy.getFullYear() - anio;

  if (
    edad < 14 ||
    (edad === 14 &&
      (hoy.getMonth() < mes - 1 || (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)))
  ) {
    return false;
  }

  return true;
}

// Validación Correo Electrónico
function validarEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+$/;
  return emailRegex.test(email);
}