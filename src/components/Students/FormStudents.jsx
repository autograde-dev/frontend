import styles from "./FormStudents.module.css"
import { useFormEstudiantes } from './hooks/useFormStudents';

const FormEstudiantes = () => {

  const {formData, handleChange, handleSubmit} = useFormEstudiantes()

  return (
    <div className={styles.formContainer}>
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <h2>Registrar Estudiante</h2>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Primer Nombre</label>
            <input
              type="text"
              name="primerNombre"
              value={formData.primerNombre}
              onChange={handleChange}
              placeholder="Añade el primer nombre"
            />
          </div>
          <div className={styles.formGroup}>
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
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Primer Apellido</label>
            <input
              type="text"
              name="primerApellido"
              value={formData.primerApellido}
              onChange={handleChange}
              placeholder="Añade el primer apellido"
            />
          </div>
          <div className={styles.formGroup}>
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
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Documento</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Añade el documento"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Programa</label>
            <input
              type="text"
              name="programa"
              value={formData.programa}
              onChange={handleChange}
              placeholder="Añade el programa"
            />
          </div>
        </div>  
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Añade un correo electrónico"
              />
          </div> 
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="Añade una contraseña"
            />
          </div>
        </div>  
        <button type="submit" className={styles.button}>REGISTRAR</button>
      </form>
    </div>
  );
};

export default FormEstudiantes;

