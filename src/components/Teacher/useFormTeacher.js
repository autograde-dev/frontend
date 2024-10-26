import React, { useState } from 'react';
import axios from 'axios';

export const useFormTeacher = () => {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    documento: '',
    correo: ''
  });
  
  const [mensaje, setMensaje] = useState(''); // Estado para manejar mensajes

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData); // Verifica qué datos se envían
  
    try {
      const response = await axios.post('http://localhost:8081/docentes/insertar/', formData);
      console.log('Respuesta del servidor:', response.data);
      setMensaje('Datos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setMensaje('Error al enviar los datos');
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    mensaje // Devolver el mensaje para mostrarlo en el componente
  };
};
