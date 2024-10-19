import React, { useState } from 'react';

export const useFormEstudiantes = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contrasena: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
      };

      return {
        formData,
        handleChange,
        handleSubmit
      }
}