import {useState,useRef, useEffect} from "react"
import * as Minio from 'minio';

export const useExamen = () => {
  const [examen, setFileExamen] = useState(null);
  const fileInputRefExamen = useRef();

  const minioClient = useRef();

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
  

  const uploadExamenMinion = () => {

  }


  useEffect(() => {
   minioClient.current = new Minio.Client({
        endPoint: 'play.min.io',
        port: 9000,
        useSSL: true,
        accessKey: 'Q3AM3UQ867SPQQA43P2F',
        secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
      })
  },[])

  return {
    examen,
    calificacion,
    fileInputRefCalificacion,
    fileInputRefExamen,
    handleFileInputExamenClick,
    handleFileInputCalificaionClick,
    handleFileChangeExamen,
    handleFileChangeCalificacion
  }
};
