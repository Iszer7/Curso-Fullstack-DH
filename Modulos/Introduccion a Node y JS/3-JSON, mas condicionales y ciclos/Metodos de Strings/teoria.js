/* ==========================
.length
- Retorna la cantidad de caracteres de un string
========================== */

var serie = "Mad Men"
serie.length; //--> Devuelve 7

/* ==========================
.indexOf()
- Busca uno o más caracteres dentro del string al que le aplicamos el método
========================== */

var saludo = "¡Hola! Estamos programando";
saludo.indexOf('Estamos') //--> Devuelve 7

/*
    ¡ -> 0
    H -> 1
    o -> 2
    l -> 3
    a -> 4
    ! -> 5
      -> 6
    E -> 7
    s -> 
    
    etc...
*/

// Si solo pasamos una letra, el valor de retorno será la primera coincidencia
saludo.indexOf('o') //--> Devuelve 2.

// Si no encuentra lo que pasemos por parametro, el valor de retorno sera -1
saludo.indexOf('Asado') //--> Devuelve -1
saludo.indexOf('9') //--> Devuelve -1
saludo.indexOf('x') //--> Devuelve -1

/* ==========================
.slice()
- Corta y devuelve una parte del string donde se aplica
========================== */

var frase = "Breaking Bad Rules!";

frase.slice(9, 12) //--> Devuelve 'Bad'
frase.slice(13) //--> Devuelve 'Rules'
frase.slice(-10) //--> ¿Qué devuelve esto? Tarea para casa :)

/* ==========================
trim()
- Elimina espacio al princio y final de un string
- NO recorta los espacios intermedios
========================== */

var nombreCompleto = "        Homero Simpson     ";
nombreCompleto.trim(); //--> Devuelve "Homero Simpson";

/* ==========================
split()
- Separa un string en varios strings a través del caracter o caracteres que indiquemos
========================== */

var frase = "En una galaxia muy muy lejana";
frase.split(' ') //--> Aclaramos que corte este string donde encuentre ' ' (espacios)
// Devuelve entonces ['En', 'una', 'galaxia', 'muy', 'muy', 'lejana...'];

/* ==========================
replace()
- Reemplaza una parte de un string por otra
========================== */

var otraFrase = 'Aguante Python!';
frase.replace('Phyton', 'JS') //--> Devuelve 'Aguante JS!'
frase.replace('Phy', 'JS') //--> Devuelve Aguante 'Aguante JSton!'