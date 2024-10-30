import React from "react";
import { Link } from "react-router-dom";
import styles from "./examen.module.css";
import { useExamen } from "./hook/useExamen";

const ExamenPage = () => {
  const {
    fileInputRefCalificacion,
    fileInputRefExamen,
    handleFileInputExamenClick,
    handleFileInputCalificaionClick,
    handleFileChangeExamen,
    handleFileChangeCalificacion,
  } = useExamen();

  return (
    <div className={styles.container}>
      <input
        type="file"
        onChange={handleFileChangeExamen}
        style={{ display: "none" }}
        ref={fileInputRefExamen}
      />
      <input
        type="file"
        onChange={handleFileChangeCalificacion}
        style={{ display: "none" }}
        ref={fileInputRefCalificacion}
      />
      <h2 className={styles.title}>Subir Examenes y calificaciones</h2>
      <div className={styles.grid}>
        <div className={styles.option} onClick={handleFileInputExamenClick}>
          SUBIR EXAMEN
        </div>
        <div
          className={styles.option}
          onClick={handleFileInputCalificaionClick}
        >
          SUBIR CALIFICAIONES
        </div>
      </div>
    </div>
  );
};

export default ExamenPage;
