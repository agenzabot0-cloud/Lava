// setting fs
import fs from 'fs';
// right here were gonna set LAVA args
const [command, arg1, arg2] = lineFromLavaFile.split(" ");
const filename = process.argv[2];

if (arg1 === undefined) {
    console.error("Lava Syntax Error: This command requires an argument!");
}

