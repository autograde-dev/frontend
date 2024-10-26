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
    const command = new PutObjectCommand({
      Bucket: miniobuket,
      Key: examen.name,
      Body: examen,
      ContentType: examen.type,
    });
    const result = await minioClient.current.send(command);
  };

  const uploadCalificaionMinion = async () => {
    const command = new PutObjectCommand({
      Bucket: miniobuket,
      Key: calificacion.name,
      Body: calificacion,
      ContentType: calificacion.type,
    });
    const result = await minioClient.current.send(command);
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
