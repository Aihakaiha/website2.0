var b = 0;
function stress(){
    var a = parseInt(document.getElementById("stressbutton-input").value, 10);
    a = isNaN(a) ? 1 : a;
    b = b+=a;
    document.getElementById("stressh").innerHTML = b;
}
