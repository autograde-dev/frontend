import { useState, useRef, useEffect } from "react";
import * as Minio from "minio";
import {
  minioAccessKey,
  miniobuket,
  minioPort,
  minioSecretKey,
  minioUrl,
} from "../../../env";

export const useExamen = () => {
  

  // Form 
 
 

  const handleChange = (e) => {
     setForm({
        ...form,
        [e.target.name] : e.target.value
     })
  }

  const [examen, setFileExamen] = useState(null);
  const fileInputRefExamen = useRef();

  const minioClient = useRef(
    new Minio.Client({
      endPoint: minioUrl,
      port: minioPort,
      useSSL: true,
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    })
  );

  const [calificacion, setFileCalificion] = useState(null);
  const fileInputRefCalificacion = useRef();

  const handleFileChangeExamen = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileExamen(null);
        return;
      }
      setFileExamen(selectedFile);
    }
  };

  const handleFileChangeCalificacion = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileCalificion(null);
        return;
      }
      setFileCalificion(selectedFile);
    }
  };

  const handleFileInputExamenClick = () => {
    fileInputRefExamen.current.click();
  };

  const handleFileInputCalificaionClick = () => {
    fileInputRefCalificacion.current.click();
  };

  const uploadExamenMinion = async () => {
    const exists = await minioClient.bucketExists(miniobuket);
    if (!exists) {
      return;
    }
    const result = await minioClient.current.fPutObject(
      miniobuket,
      examen.name,
      file
    );
  };

  const uploadCalificaionMinion = async () => {
    const exists = await minioClient.bucketExists(miniobuket);
    if (!exists) {
      return;
    }
    const result = await minioClient.current.fPutObject(
      miniobuket,
      calificacion.name,
      calificacion
    );
  };



  return {
    examen,
    calificacion,
    fileInputRefCalificacion,
    fileInputRefExamen,
    handleFileInputExamenClick,
    handleFileInputCalificaionClick,
    handleFileChangeExamen,
    handleFileChangeCalificacion,
    handleChange
  };
};
