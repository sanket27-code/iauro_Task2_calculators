var operation = document.querySelector(".operation");

function display(num) {
    operation.value += num;
}

function Clear() {
    operation.value = "";
    result.value = ""
}

function popout() {
    operation.value = operation.value.slice(0, -1);
}

function validate(screenValue){
    if(screenValue === ""){
        alert("Please enter any number for operation!")
        return true;
    }
}

function pi() {
    operation.value = validate(operation.value)? "": operation.value * Math.PI;
}
function inv() {
    operation.value = validate(operation.value)? "": parseFloat((1 / operation.value).toFixed(4));
}
function sin() {
    operation.value = validate(operation.value)? "": parseFloat(Math.sin(operation.value * Math.PI / 180).toFixed(3));
}
function cos() {
    operation.value = validate(operation.value)? "": parseFloat(Math.cos(operation.value * Math.PI / 180).toFixed(3));
}
function tan() {
    operation.value = validate(operation.value)? "": parseFloat(Math.tan(operation.value * Math.PI / 180).toFixed(3));
}
function ln() {
    operation.value = validate(operation.value)? "": parseFloat(Math.log(operation.value) / Math.log(Math.E).toFixed(3));
}
function logb10() {
    operation.value = validate(operation.value)? "": parseFloat(Math.log10(operation.value).toFixed(3));
}
function mul_e() {
    operation.value = validate(operation.value)? "": parseFloat((operation.value * Math.E).toFixed(4));
}
function expo() {
    operation.value = validate(operation.value)? "": parseFloat(Math.pow(Math.E, operation.value).toFixed(3));
}
function sq() {
    operation.value = validate(operation.value)? "":parseFloat(Math.pow(operation.value, 2).toFixed(3));
}
function cube() {
    operation.value = validate(operation.value)? "": parseFloat(Math.pow(operation.value, 3).toFixed(3));
}
function sqrt() {
    operation.value = validate(operation.value)? "": parseFloat(Math.sqrt(operation.value).toFixed(3));
}
function cbrt() {
    operation.value = validate(operation.value)? "": parseFloat(Math.cbrt(operation.value).toFixed(3));
}
function rFact(num) {
    if (num == 0) { return 1; }
    else { return num * rFact(num - 1); }
}
function facto() {
    operation.value = validate(operation.value)? "": rFact(operation.value);
}