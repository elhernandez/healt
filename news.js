document.addEventListener('DOMContentLoaded', function() {
    const newsText = document.getElementById('news-text');
    const currentImage = document.getElementById('current-image');

    let imageIndex = 0;
    const imageUrls = [
        "https://drive.google.com/file/d/1cUjyJ2hs9YTo2b8rgdz_wAbNfk5PPfb8/view?usp=sharing",
        "https://tu-dominio.com/images/imagen2.jpg",
        "https://tu-dominio.com/images/imagen3.jpg"
    ]; // Añade las URLs de tus imágenes aquí

    function fetchNews() {
        // Aquí puedes poner tu lógica para obtener el texto de noticias de una API, si es necesario
        // Si tienes una API para el texto y las imágenes, usa el código que te proporcioné anteriormente
        newsText.textContent = "Últimas noticias sobre medicina regenerativa."; // Ejemplo de texto estático

        // Inicia el ciclo de imágenes
        startImageCycle();
    }

    function startImageCycle() {
        if (imageUrls.length > 0) {
            setInterval(() => {
                currentImage.src = imageUrls[imageIndex];
                imageIndex = (imageIndex + 1) % imageUrls.length;
            }, 6000); // Cambia la imagen cada 6 segundos
        }
    }

    fetchNews();
});

