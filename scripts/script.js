var scrollPos = 0;
window.addEventListener('scroll', function () {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // Si se está desplazando hacia arriba
        this.document.getElementById("header").style.backgroundColor = "#f6f6f6"
        this.document.getElementById("header").style.top = "0"
        this.document.getElementById("filtros").style.top = "140px"
    }
    else {
        // Si se está desplazando hacia abajo
        this.document.getElementById("header").style.backgroundColor = "#f6f6f6"
        this.document.getElementById("header").style.top = "-200px"
        this.document.getElementById("filtros").style.top = "20px"
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});

document.addEventListener("DOMContentLoaded", function() {
    const img1 = {
        images: [
            "img/ropa/img1/1.webp",
            "img/ropa/img1/2.webp",
            "img/ropa/img1/3.webp"
        ]
    };

    const img2 = {
        images: [
            "img/ropa/img2/1.webp",
            "img/ropa/img2/2.webp"
        ]
    };

    const images = {
        img1: img1,
        img2: img2,
    };

    let currentIndices = {
        img1: 0,
        img2: 0,
    };

    function changeImage(imgId) {
        const imgData = images[imgId];
        const imgElement = document.getElementById(imgId); 

        imgElement.style.transition = "opacity 0.3s ease, filter 0.3s ease"; 
        imgElement.style.filter = "blur(2px)";
        imgElement.style.opacity = "0";
    
        setTimeout(() => {
            imgElement.src = imgData.images[currentIndices[imgId]]; 
            imgElement.style.opacity = "1";
            imgElement.style.filter = "none";
        }, 300); 
    }

    Object.keys(images).forEach(imgId => {
        const imgElement = document.getElementById(imgId); 
        
        document.getElementById(`left-arrow-${imgId}`).addEventListener('click', () => {
            currentIndices[imgId] = (currentIndices[imgId] - 1 + images[imgId].images.length) % images[imgId].images.length; 
            changeImage(imgId);
        });

        document.getElementById(`right-arrow-${imgId}`).addEventListener('click', () => {
            currentIndices[imgId] = (currentIndices[imgId] + 1) % images[imgId].images.length;
            changeImage(imgId);
        });
    });
});