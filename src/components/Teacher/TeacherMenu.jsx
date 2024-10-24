import React from "react";
import { Link } from "react-router-dom";  // We need this for navigation
import styles from "./TeacherMenu.module.css";

const TeacherMenu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Panel del Profesor</h2>
      <div className={styles.grid}>
        <Link to="/registrarEstudiante" className={styles.option}>
          REGISTRAR ESTUDIANTE
        </Link>
        <Link to="/misEnunciados" className={styles.option}>
          MIS ENUNCIADOS
        </Link>
        <Link to="/misParciales" className={styles.option}>
          MIS PARCIALES
        </Link>
        <Link to="/calendarioParciales" className={styles.option}>
          CALENDARIO DE PARCIALES
        </Link>
        <Link to="/resultados" className={styles.option}>
          RESULTADOS
        </Link>
      </div>
    </div>
  );
};
  
  export default TeacherMenu;
  