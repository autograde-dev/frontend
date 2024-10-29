import React from "react";
import { Link } from "react-router-dom";  
import styles from "./StudentMenu.module.css";

const StudentMenu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Panel del Estudiante</h2>
      <div className={styles.grid}>
        <Link to="/examsAvailable" className={styles.option}>
          EXAMENES DISPONIBLES
        </Link>
        <Link to="/resultsStudent" className={styles.option}>
          RESULTADOS DE MIS EXAMENES
        </Link>
      </div>
    </div>
  );
};
  
export default StudentMenu;
  