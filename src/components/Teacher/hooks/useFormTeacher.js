import { useState } from 'react';
import axios from 'axios';

export const useFormTeacher = () => {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    documento: '',
    correo: '',
    contrasena: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);

    try {
      const response = await axios.post('URL_DEL_BACKEND', formData);
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
    mensaje
  };
};
