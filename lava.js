// setting fs
import fs from 'fs';
// right here were gonna set LAVA args
const memory = {};
const [command, arg1, arg2] = lineFromLavaFile.split(" ");
const filename = process.argv[2];
const fileContent = fs.readFileSync(filename, 'utf-8');
const lines = fileContent.split('\n');
for (const lineFromLavaFile of lines) {
  
 if (!lineFromLavaFile.trim()) continue;
 const [ command, arg1, arg2 ] = lineFromLavaFile.trim().split(" ");

     if (arg1 === undefined) {
         console.error("Lava Syntax Error: This command requires an argument!");
         continue;
}


const realValue = Number(arg2); 
if (isNaN(realValue)) {
    memory[arg1] = arg2; 
} else {
    memory[arg1] = realValue; 
}
if (command === "set") {
    memory[arg1] = realValue;
    console.log(`[Lava] Successfully stored ${arg1}`);
} 

else if (command === "print") {
    const output = memory[arg1] !== undefined ? memory[arg1] : arg1;
    console.log(output);
} 

else if (command === "flow") {
    if (memory[arg1] !== undefined) {
        memory[arg1] += Number(arg2);
    } else {
        console.error(`Lava Error: Variable ${arg1} does not exist yet!`);
    }
} 

else {
    // Catch-all rule for when someone types a command Lava doesn't recognize yet
    console.error(`Lava Syntax Error: Unknown command "${command}"`);
}


