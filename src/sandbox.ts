//use tsc --init to create config file

//Now we can change rootDir and outDir path to define path of root directory of ts files and output directory for js files.

//Now just use command tsc -w to run. It will transpile all the ts files in src folder(defined in rootDir) and save js files in public folder(outDir)

//If we want to avoid compilation of ts file outside src folder, we can add "include" : ["src"] in tscconfig