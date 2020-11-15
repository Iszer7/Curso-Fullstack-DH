let bcrypt = require('bcrypt');

let password = 'holaesunacontrasenia';

let passwordQueNoEsVerdadera = 'holaesunacontraseni';

let resultado = bcrypt.hashSync(password, 10);

let validacion = bcrypt.compareSync(password, resultado);

let validacion2 = bcrypt.compareSync(passwordQueNoEsVerdadera, resultado);

console.log(password);
console.log(resultado);
console.log(validacion);
console.log(validacion2);