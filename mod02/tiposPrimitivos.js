var myName = "Thiago";
var myAge = 100;
var number = 10;
//arrays
var myNames = ["Thiago", "Levi", "Ramos", "da", "Costa"];
var myBooleans = [true, false, false];
var myStrings = ["Thiago", "Levi", "Ramos", "da", "Costa"];
//type any
var ortherNames = ["thiago", "diego", "chico", "pedro"];
ortherNames.push(100);
console.log(ortherNames);
var ortherNames2 = [true, "diego", "chico", []];
ortherNames2.push(false);
console.log(ortherNames2);
//functions and types
function firstLetterUpperCase(name) {
    var firstLetter = name[0].toUpperCase();
    var nameWithFirstLetterUpperCase = name.replace(name[0], firstLetter);
    return nameWithFirstLetterUpperCase;
}
console.log(firstLetterUpperCase('levi'));
