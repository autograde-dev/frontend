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

const CreateExam = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'hour'));
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/teacher');
  };

  const handleAssignQuestions = () => {
    navigate('/assignQuestions');
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
          />
          <TextField
            label="Descripción"
            multiline
            rows={5}
            variant="outlined"
            placeholder="Añade una descripción"
            fullWidth
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
            <StudentList />
          </Box>
        </Grid>
      </Grid>

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
            onClick={handleAssignQuestions}
          >
            ASIGNAR PREGUNTAS
          </Button>
      </Box>
    </Box>
  );
};

export default CreateExam;
