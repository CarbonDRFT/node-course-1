// GLOBALS - NO WINDOW !!

// __dirname   - path to current directory
// __filename  - file name
// require     - functions to use modules (CommonJS)
// module      - info about current module (file)
// Process     - info about env where the program is being executed

// Modules

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
