import React, { useState } from 'react';
import axios from 'axios';

export const useFormEstudiantes = () => {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    documento: '',
    programa: '',
    correo: '',
    contrasena: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Para manejar el estado de envío
  const [error, setError] = useState(null); // Para manejar errores

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post('URL_BACKEND', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Datos enviados exitosamente:', response.data);
    } catch (err) {
      console.error('Error al enviar datos:', err);
      setError('Ocurrió un error al enviar los datos');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error
  };
};
