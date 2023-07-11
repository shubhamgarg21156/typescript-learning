const logDetails = (uid : string | number, item : string) => {
    console.log(`${item} has uid of ${uid}`)
}

const greet = (user : {name : string, uid : string | number}) => {
    console.log(`${user.name}`);
}

//Here we are using string | number type again and again, so we can use type aliases
type StringOrNum = string | number;
const log = (uid : StringOrNum, item : string) => {
    console.log(`${item} has uid of ${uid}`)
}

//we can make type aliases of object too
type objWithName = { name : string, uid : StringOrNum};
const greetAgain = (user : objWithName) => {
    console.log(`${user.name}`);
}
