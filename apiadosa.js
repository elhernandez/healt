const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const imagesDir = path.join(__dirname, 'portada');

// Middleware para servir archivos estáticos en 'public'
app.use(express.static('public'));

// Endpoint para obtener las imágenes en formato JSON
app.get('/api/images', (req, res) => {
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pueden leer las imágenes' });
        }

        // Filtra solo las imágenes (por ejemplo, .jpg, .png)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

        // Selecciona 3 imágenes al azar
        const selectedImages = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            selectedImages.push(imageFiles[randomIndex]);
        }

        // Envía la respuesta en formato JSON
        res.json(selectedImages.map(img => `/portada/${img}`));
    });
});

// Servir las imágenes
app.use('/portada', express.static(imagesDir));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
