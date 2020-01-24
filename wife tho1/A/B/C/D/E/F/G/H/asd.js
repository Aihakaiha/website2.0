window.onload = function(){
    var a = ""
    var yks = document.getElementById("1");
    var kaks = document.getElementById("2");
    var koli = document.getElementById("3");
    var neli = document.getElementById("4");
    var viis = document.getElementById("5");
    var kuus = document.getElementById("6");
    yks.onclick = function(){
        a += "1";
    }
    kaks.onclick = function(){
        a += "2";
    }
    koli.onclick = function(){
        a += "3";
    }
    neli.onclick = function(){
        a += "4";
    }
    viis.onclick = function(){
        a += "5";
    }
    kuus.onclick = function(){
        a += "6"
    }
    function test(){
        if (a=="166632"){
            window.open("../../../../B.html", "_self");
            clearInterval(id)
        }else{
            document.getElementById("dog").innerHTML = a;
        }
    }
    var id = setInterval(test, 100)
}