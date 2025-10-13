function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none"){ 
      div.style.display = "block";
    } 
    else {
      div.style.display = "none";
    }
}
// esta función es dada por el curso. No quise meterme mucho más con Javascript