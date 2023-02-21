function theRace(input) {
 
    for (let line of input) {
        let pattern = /([#$%*&])([A-Za-z]+)\1=(\d+)!!(.+)/g;
        let match = pattern.exec(line);
        if (match) {
            let name = match[2];
            let length = Number(match[3]);
            let code = match[4];
            let validLength = checkLength(length, code);
            if (validLength) {
                let newCode = geohashCode(length, code);
                return result(name, newCode);
            }
        }
        else {
            console.log("Nothing found!");
        }
    }
    function checkLength(length, code) {
        if (length != code.length) {
            console.log("Nothing found!");
            return false;
        }
        return true;
    }
    function geohashCode(length, code) {
        let result = '';
        for (let char of code) {
            let value = char.charCodeAt() + length;
            result += String.fromCharCode(value);
        }
        return result;
    }
    function result(name, code) {
        console.log(`Coordinates found! ${name} -> ${code}`);
    }
}