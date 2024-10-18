var scrollPos = 0;
window.addEventListener('scroll', function () {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // Si se está desplazando hacia arriba
        this.document.getElementById("header").style.backgroundColor = "#f6f6f6"
        this.document.getElementById("header").style.top = "0"
        this.document.getElementById("filtros").style.top = "200px"
    }
    else {
        // Si se está desplazando hacia abajo
        this.document.getElementById("header").style.backgroundColor = "#f6f6f6"
        this.document.getElementById("header").style.top = "-200px"
        this.document.getElementById("filtros").style.top = "20px"
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});