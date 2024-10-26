import express from 'express';
import multer from 'multer';
import { Client } from 'minio'; // Cambia aquí
import cors from 'cors';

const app = express();
const PORT = 3001; // O cualquier puerto que prefieras

// Configuración de CORS
app.use(cors());

// Configuración de MinIO
const minioClient = new Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',   // Reemplaza con tu access key de MinIO
    secretKey: 'minioadmin'     // Reemplaza con tu secret key de MinIO
});

// Configuración de multer para manejar archivos subidos
//const upload = multer({ dest: 'uploads/' });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se ha subido ningún archivo.' });
    }

    const bucketName = 'mybucket';
    const objectName = req.file.originalname; // Usa el nombre original del archivo
    const fileBuffer = req.file.buffer; // Archivo en memoria

    // Subir el archivo directamente desde el buffer
    minioClient.putObject(bucketName, objectName, fileBuffer, (err, etag) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al subir el archivo a MinIO.' });
        }

        console.log('Nombre del archivo guardado:', objectName);
        res.status(200).json({
            message: 'Archivo subido a MinIO con éxito.',
            savedFileName: objectName
        });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
