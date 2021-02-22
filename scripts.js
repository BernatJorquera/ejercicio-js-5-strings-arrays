const esPalindromo = fraseCandidata => {
  fraseAInvertir = fraseCandidata.toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  fraseInversa = "";
  for (let letra in fraseAInvertir) {
    fraseInversa += `${fraseAInvertir.charAt(fraseAInvertir.length - letra - 1)}`;
  }
  return (fraseInversa === fraseAInvertir);
};

const fraseAComprobar = "Dábale .arr??oz a la: zo;rra el abad";

console.log(`La frase \"${fraseAComprobar.replace(/[.,:;()_?¿!¡-]/g, "")}\"\
${esPalindromo(fraseAComprobar) ? "" : " no"} es palíndroma`);
