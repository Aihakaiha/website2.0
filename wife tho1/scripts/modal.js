window.onload = function(){
    var modal = document.getElementById("modal_lontoo");
    var img = document.getElementById("lontoo_img");
    var mimg = document.getElementById("img_lontoo");
    var caption = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        mimg.src = this.src;
        caption.innerHTML = this.alt;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
        modal.style.display = "none";
    }
    var praha_modal = document.getElementById("modal_praha");
    var praha_img = document.getElementById("praha_img");
    var praha_mimg = document.getElementById("img_praha");
    var praha_caption = document.getElementById("praha_caption");
    praha_img.onclick = function(){
        praha_modal.style.display = "block";
        praha_mimg.src = this.src;
        praha_caption.innerHTML = this.alt;
    }
    var praha_span = document.getElementsByClassName("close")[1];
    praha_span.onclick = function(){
         praha_modal.style.display = "none";
}
    var pietari_modal = document.getElementById("modal_pietari");
    var pietari_img = document.getElementById("pietari_img");
    var pietari_mimg = document.getElementById("img_pietari");
    var pietari_caption = document.getElementById("pietari_caption");
    pietari_img.onclick = function(){
        pietari_modal.style.display = "block";
        pietari_mimg.src = this.src;
        pietari_caption.innerHTML = this.alt;
}
    var pietari_span = document.getElementsByClassName("close")[2];
    pietari_span.onclick = function(){
        pietari_modal.style.display = "none";
}
    var amsterdam_modal = document.getElementById("modal_amsterdam");
    var amsterdam_img = document.getElementById("amsterdam_img");
    var amsterdam_mimg = document.getElementById("img_amsterdam");
    var amsterdam_caption = document.getElementById("amsterdam_caption");
    amsterdam_img.onclick = function(){
        amsterdam_modal.style.display = "block";
        amsterdam_mimg.src = this.src;
        amsterdam_caption.innerHTML = this.alt;
}
    var amsterdam_span = document.getElementsByClassName("close")[3];
    amsterdam_span.onclick = function(){
        amsterdam_modal.style.display = "none";
}
    var berliini_modal = document.getElementById("modal_berliini");
    var berliini_img = document.getElementById("berliini_img");
    var berliini_mimg = document.getElementById("img_berliini");
    var berliini_caption = document.getElementById("berliini_caption");
    berliini_img.onclick = function(){
        berliini_modal.style.display = "block";
        berliini_mimg.src = this.src;
        berliini_caption.innerHTML = this.alt;
}
    var berliini_span = document.getElementsByClassName("close")[4];
    berliini_span.onclick = function(){
        berliini_modal.style.display = "none";
}}
