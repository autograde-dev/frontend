import React from "react";
import { Link } from "react-router-dom";  
import styles from "./TeacherMenu.module.css";

const TeacherMenu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Panel del Profesor</h2>
      <div className={styles.grid}>
        <Link to="/formStudent" className={styles.option}>
          REGISTRAR ESTUDIANTE
        </Link>
        <Link to="/createExam" className={styles.option}>
          CREAR EXAMEN
        </Link>
        <Link to="/resultsTeacher" className={styles.option}>
          VER RESULTADOS
        </Link>
      </div>
    </div>
  );
};
  
export default TeacherMenu;
  