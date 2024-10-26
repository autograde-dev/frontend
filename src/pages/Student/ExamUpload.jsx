import React, { useState } from 'react';
import { Box, Button, Typography, Pagination } from '@mui/material';

function ExamUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Por favor, cargue un archivo antes de enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Archivo subido a MinIO con éxito. Nombre del archivo: ' + data.savedFileName);
      } else {
        const errorText = await response.text();
        console.error('Error al enviar el archivo:', errorText);
        alert('Error al subir el archivo. Detalles: ' + errorText);
      }
    } catch (error) {
        console.error('Error de red o de servidor:', error);
        alert('Error al enviar el archivo. Verifica la consola para más detalles.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '80vh',
        pt: 6,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#e9f2ff',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 600,
          width: '100%',
          mx: 'auto',
          mt: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Ejercicio 1
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          Aquí va el enunciado del ejercicio que debe resolver el estudiante.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              display: 'block',
              margin: '0 auto',
              padding: '10px',
              border: '2px dashed #BCDAFC',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '80%',
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            fontWeight: 'bold',
            borderRadius: 2,
            width: '60%',
            mb: 2,
          }}
        >
          Enviar
        </Button>

        <Pagination count={10} color="primary" sx={{ mt: 3 }} />
      </Box>
    </Box>
  );
}

export default ExamUpload;
