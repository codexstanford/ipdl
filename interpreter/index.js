
import parser from './src/parser/parser.js';


let program = parser(process.argv[2]);

console.log(JSON.stringify(program, null, 2));