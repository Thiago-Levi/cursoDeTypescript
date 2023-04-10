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
//return and types
function sum(myNumber1, myNumber2) {
    var sumNumbers = myNumber1 + myNumber2;
    return sumNumbers;
}
console.log(firstLetterUpperCase("levi"));
var names = ["nameA", "nameB", "nameC", "nameD", 10];
//Contextual Typing and inference type
//names.forEach((name) => console.log(name.toUpperCase()));
//types and objects
function resume(user) {
    if (user.school) {
        return "Ol\u00E1 ".concat(user.name, ", tudo bem?. Voc\u00EA tem ").concat(user.age, " anos de idade. e est\u00E1 na escola");
    }
    else {
        return "Ol\u00E1 ".concat(user.name, ", tudo bem?. Voc\u00EA tem ").concat(user.age, " anos de idade.");
    }
}
var myUser = {
    name: "Levis",
    age: 35,
    //school:true
};
resume(myUser);
//union types
var userAge = 20;
userAge = "20";
function showAge(age) {
    return typeof age === "number" ? age++ : "".concat(age);
}
function showObj(user) {
    user.name = "Thiago Levi";
}
//type assentions
var myH1 = document.querySelector("#h1");
console.log(myH1.textContent);
myH1.innerHTML += "<p>Test</p>";
function showPreferFood(myFood) {
    return "hamburger";
}
var myUrl = "www.xxxyyyy";
function requisition(method, myUrl) { }
requisition("GET", myUrl);
var mltpl = function (n1, n2) {
    return n1 * n2;
};
var sbtrctn = function (x1, x2) {
    return x1 - x2;
};
// void return
function showAll(name) {
    console.log(name);
}
function removeElement(el) {
    el.remove();
}
