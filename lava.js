// setting fs
import fs from 'fs';
// right here were gonna set LAVA args
const memory = {};
const [command, arg1, arg2] = lineFromLavaFile.split(" ");
const filename = process.argv[2];

if (arg1 === undefined) {
    console.error("Lava Syntax Error: This command requires an argument!");
}


const realValue = Number(arg2); 
if (isNaN(realValue)) {
    memory[arg1] = arg2; 
} else {
    memory[arg1] = realValue; 
}


