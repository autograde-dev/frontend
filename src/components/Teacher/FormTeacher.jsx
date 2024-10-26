import React from 'react';
import { useFormTeacher } from "./hooks/useFormTeacher"
import './FormTeacher.css';

const FormTeacher = () => {
  const { formData, handleChange, handleSubmit } = useFormTeacher();

  return (
    <div className="registro">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2 className="registrotitle">Registro Profesores</h2>
        <div className="contenedor">
          <div className="columna">
            <label>Primer Nombre</label>
            <input
              type="text"
              name="primerNombre"
              value={formData.primerNombre}
              onChange={handleChange}
              placeholder="Añade el primer nombre"
            />
          </div>
          <div className="columna">
            <label>Segundo Nombre</label>
            <input
              type="text"
              name="segundoNombre"
              value={formData.segundoNombre}
              onChange={handleChange}
              placeholder="Añade el segundo nombre"
            />
          </div>
        </div>
        <div className="contenedor">
          <div className="columna">
            <label>Primer Apellido</label>
            <input
              type="text"
              name="primerApellido"
              value={formData.primerApellido}
              onChange={handleChange}
              placeholder="Añade el primer apellido"
            />
          </div>
          <div className="columna">
            <label>Segundo Apellido</label>
            <input
              type="text"
              name="segundoApellido"
              value={formData.segundoApellido}
              onChange={handleChange}
              placeholder="Añade el segundo apellido"
            />
          </div>
        </div>
        <div className="contenedor">
          <div className="columna">
            <label>Documento</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Añade el documento de identidad"
            />
          </div>
          <div className="columna">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
            />
          </div>
        </div>
        <div className="contenedor-contra">
          <div className="columna">
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="Añade una contraseña"
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
