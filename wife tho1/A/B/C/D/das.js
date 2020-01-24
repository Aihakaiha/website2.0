window.onload = function(){
    var val = "";
    var a = document.getElementById("ankka");
    var b = document.getElementById("kana");
    var c = document.getElementById("kissa");
    var d = document.getElementById("kissanpentu");
    var e = document.getElementById("koira");
    var f = document.getElementById("sammakko");
    var g = document.getElementById("vuohi");
    var h = document.getElementById("apina");
    var i = document.getElementById("elefantti");
    var j = document.getElementById("hanhi");
    var k = document.getElementById("sorsa");
    var l = document.getElementById("käärme");
    var m = document.getElementById("hämähäkki");
    var n = document.getElementById("lehmä");
    var o = document.getElementById("hirvi");
    var p = document.getElementById("peura");
    var q = document.getElementById("possu");
    a.onclick = function(){
        a.style.color = "red";
        val += "1";
    }
    b.onclick = function(){
        b.style.color = "red";
        val += "2";
    }
    c.onclick = function(){
        c.style.color = "red";
        val += "3";
    }
    d.onclick = function(){
        d.style.color = "red";
        val += "4";
    }
    e.onclick = function(){
        e.style.color = "red";
        val += "5";
    }
    f.onclick = function(){
        f.style.color = "red";
        val += "6";
    }
    g.onclick = function(){
        g.style.color = "red";
        val += "7";
    }
    h.onclick = function(){
        h.style.color = "red";
        val += "8";
    }
    i.onclick = function(){
        i.style.color = "red";
        val += "9";
    }
    j.onclick = function(){
        j.style.color = "red";
        val += "10";
    }
    k.onclick = function(){
        k.style.color = "red";
        val += "11";
    }
    l.onclick = function(){
        l.style.color = "red";
        val += "12";
    }
    m.onclick = function(){
        m.style.color = "red";
        val += "13";
    }
    n.onclick = function(){
        n.style.color = "red";
        val += "14";
    }
    o.onclick = function(){
        o.style.color = "red";
        val += "15";
    }
    p.onclick = function(){
        p.style.color = "red";
        val += "16";
    }
    q.onclick = function(){
        q.style.color = "red";
        val += "17";
    }
    var oof = document.getElementById("screen");
    var time = 20;
    var reset = 5;
    function check(){
        if (val == "341"){
            document.getElementById("value").innerHTML = val;
            clearInterval(id);
            console.log("WON");
        }else if(time == 0){
            oof.style.display = ""
            document.getElementById("time").innerHTML = "20";
        }
        else{
            document.getElementById("value").innerHTML = val;
            time--;
            console.log(val)
            document.getElementById("time").innerHTML = time;
        }
    }
    var id = setInterval(check, 1000)
}