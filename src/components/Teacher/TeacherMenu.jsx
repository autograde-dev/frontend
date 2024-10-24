import React from "react";
import { Link } from "react-router-dom";  // We need this for navigation
import styles from "./TeacherMenu.module.css";

const TeacherMenu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Panel del Profesor</h2>
      <div className={styles.grid}>
        <Link to="/formStudent" className={styles.option}>
          REGISTRAR ESTUDIANTE
        </Link>
        <Link to="/myStatements" className={styles.option}>
          MIS ENUNCIADOS
        </Link>
        <Link to="/myPartials" className={styles.option}>
          MIS PARCIALES
        </Link>
        <Link to="/PartialsCalendar" className={styles.option}>
          CALENDARIO DE PARCIALES
        </Link>
        <Link to="/results" className={styles.option}>
          RESULTADOS
        </Link>
      </div>
    </div>
  );
};
  
  export default TeacherMenu;
  