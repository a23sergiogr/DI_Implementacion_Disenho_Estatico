document.addEventListener("DOMContentLoaded", function() {
    const img1 = {
        images: [
            "img/ropa/img1/1.webp",
            "img/ropa/img1/2.webp",
            "img/ropa/img1/3.webp"
        ]
    };

    const images = {
        img1: img1,
    };

    let currentIndices = {
        img1: 0,
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
        
        // Update arrow ID references to match the new HTML structure
        const leftArrow = imgElement.closest('.product').querySelector('.arrow.left');
        const rightArrow = imgElement.closest('.product').querySelector('.arrow.right');

        leftArrow.addEventListener('click', () => {
            currentIndices[imgId] = (currentIndices[imgId] - 1 + images[imgId].images.length) % images[imgId].images.length; 
            changeImage(imgId);
        });

        rightArrow.addEventListener('click', () => {
            currentIndices[imgId] = (currentIndices[imgId] + 1) % images[imgId].images.length;
            changeImage(imgId);
        });
    });
});