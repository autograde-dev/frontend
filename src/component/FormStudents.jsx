import styles from "./FormStudents.module.css"
import { useFormEstudiantes } from './useFormStudents';

const FormEstudiantes = () => {

  const {formData, handleChange, handleSubmit} = useFormEstudiantes()

  return (
    <div className={styles.formContainer}>
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <h2>Registrar Estudiante</h2>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Nombres</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Añade los nombres"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Añade un correo electrónico"
            />
          </div> 
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Apellidos</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Añade los apellidos"
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

