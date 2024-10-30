import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import StudentList from './StudentList';
import { useNavigate } from 'react-router-dom';
import QuestionForm from './QuestionForm';

const CreateExam = () => {
  const [examName, setExamName] = useState('');
  const [examDescription, setExamDescription] = useState('');
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'hour'));
  const [questions, setQuestions] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/teacher');
  };

  const handleAssignExam = () => { // Empaqueta los datos del examen

    const examData = {
      name: examName,
      description: examDescription,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      questions,
      students,
    };
    console.log("Datos del examen asignado:", examData);  // Log para enviar los datos al server

  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        boxSizing: 'border-box',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" component="h1" sx={{
        textAlign: 'center',
        fontFamily: "'Arial', sans-serif",
        fontWeight: 'bold',
        marginBottom: '2rem'
      }}>
        Creación de Examen
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: '1300px', width: '100%' }}>

        {/* Nombre y Descripción */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Nombre"
            variant="outlined"
            placeholder="Añade el nombre del examen"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          />
          <TextField
            label="Descripción"
            multiline
            rows={5}
            variant="outlined"
            placeholder="Añade una descripción"
            fullWidth
            value={examDescription}
            onChange={(e) => setExamDescription(e.target.value)}
          />
        </Grid>

        {/* Inicio y Fin */}
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
              <DateTimePicker
                label="Inicio del examen"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <DateTimePicker
                label="Final del examen"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>
          </LocalizationProvider>
        </Grid>

        {/* Selección de Estudiantes */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Seleccione los estudiantes que presentarán el examen
          </Typography>
          <Box sx={{ maxWidth: '700px', margin: 'auto' }}>
            <StudentList setStudents={setStudents} /> {/* Pasamos la función de actualización */}
          </Box>
        </Grid>
      </Grid>

      {/* Creador de Preguntas para Examen */}
      <QuestionForm setQuestions={setQuestions} />
      {/* Botones */}
      <Box sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        maxWidth: '500px',
        justifyContent: 'center',
        marginTop: 5,
      }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ width: '100%', height: '45px', fontSize: '18px' }}
          onClick={handleCancel}
        >
          CANCELAR
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '100%', height: '45px', fontSize: '18px' }}
          onClick={handleAssignExam}
        >
          ASIGNAR EXAMEN
        </Button>
      </Box>
    </Box>
  );
};

export default CreateExam;
