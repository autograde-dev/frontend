import React from 'react';
import { useFormTeacher } from './useFormTeacher';
import './FormTeacher.css';

const FormTeacher = () => {
  const { formData, handleChange, handleSubmit } = useFormTeacher();

  return (
    <div className="registro">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2 className="registrotitle">Registro Profesores</h2>
        <div className="contenedor">
          <div className="columna">
            <label>Nombres</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombres"
            />
          </div>
          <div className="columna">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div className="contenedor">
          <div className="columna">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
            />
          </div>
          <div className="columna">
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="contenedorboton">
          <button type="submit" className="btn">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTeacher;

