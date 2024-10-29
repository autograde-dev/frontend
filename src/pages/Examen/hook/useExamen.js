import { useState, useRef, useEffect } from "react";
import {
  minioAccessKey,
  miniobuket,
  minioPort,
  minioSecretKey,
  minioUrl,
} from "../../../env";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const useExamen = () => {
  // Form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [examen, setFileExamen] = useState(null);
  const fileInputRefExamen = useRef();
 
  const minioClient = useRef(
    new S3Client({
      endpoint: minioUrl, // Cambia esto a tu endpoint de MinIO
      region: "us-east-1", // Puedes usar cualquier región válida
      credentials: {
        accessKeyId: minioAccessKey, // Usa tus credenciales de MinIO
        secretAccessKey: minioSecretKey,
      },
      forcePathStyle: true, // Necesario para compatibilidad con MinIO
    })
  );

  const [calificacion, setFileCalificion] = useState(null);
  const fileInputRefCalificacion = useRef();

  const handleFileChangeExamen = async (e) => {
    debugger
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileExamen(null);
        return;
      }
      setFileExamen(selectedFile);
      await uploadMinion(selectedFile)
    }
  };

  const handleFileChangeCalificacion = async (e) => {
    debugger
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileCalificion(null);
        return;
      }
      setFileCalificion(selectedFile);
      await uploadMinion(selectedFile);
    }
  };

  const handleFileInputExamenClick = () => {
    fileInputRefExamen.current.click();
  };

  const handleFileInputCalificaionClick = () => {
    fileInputRefCalificacion.current.click();
  };

  const uploadMinion = async (file) => {
    const command = new PutObjectCommand({
      Bucket: miniobuket,
      Key: file.name,
      Body: file,
      ContentType: file.type,
    });
    try {
      const result = await minioClient.current.send(command);
      alert("Archivo subido")
    } catch (error) {
      console.error(error);
      alert("Ocurrio un erro al subir archivo")
    }
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
    handleChange,
  };
};
