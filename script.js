alert("Hello");
console.log("Hello");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
function btnClick(n1, n2) {
    let x = parseFloat(n1.value);
    let y = parseFloat(n2.value);
    let z = x + y;
    alert(z);
}