/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y 
que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
*/

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

/* Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
*/

// Solución

function contarOvejas(ovejas) {
  // aquí tu magia
  const solucion = ovejas.filter(({ name, color }) => {
    let lowerName = name.toLowerCase();
    console.log(
      color === "rojo" && lowerName.includes("n") && lowerName.includes("a")
    );
    return (
      color === "rojo" && lowerName.includes("n") && lowerName.includes("a")
    );
  });
  return solucion;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

if (Object.keys(ovejasFiltradas).length > 0) {
  let contenedor = document.getElementById("container");
  let pre = document.createElement("pre");
  let code = document.createElement("code");
  code.textContent = JSON.stringify(ovejasFiltradas, null, 4);
  pre.append(code);
  contenedor.append(pre);
}

//console.log(ovejasFiltradas);
