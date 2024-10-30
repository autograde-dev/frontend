import React, { useState } from 'react';
import './CreateQuestion.css'; // Asegúrate de que la ruta sea correcta
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CreateQuestion = () => {
  const [questionName, setQuestionName] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [expectedValue, setExpectedValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/teacher'); 
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(), // Genera un ID único
      name: questionName, // Mapeo al campo "name"
      description: questionContent, // Mapeo al campo "description"
      test_values: inputValue, // Mapeo al campo "test_values"
      test_results: expectedValue // Mapeo al campo "test_results"
    };
    setQuestions([...questions, newQuestion]);
    setQuestionName('');
    setQuestionContent('');
    setInputValue('');
    setExpectedValue('');
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter(question => question.id !== id));
  };

  const handleCreateExam = () => {
    console.log('Examen creado con las siguientes preguntas:', questions);
    navigate('/exam-created');
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
        Creación de Preguntas
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: '800px', width: '100%' }}>
        
        <Grid item xs={12}>
          <TextField
            label="Nombre de la pregunta"
            variant="outlined"
            placeholder="Añade el nombre de la pregunta"
            fullWidth
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Descripción de la pregunta"
            multiline
            rows={4}
            variant="outlined"
            placeholder="Añade el contenido de la pregunta"
            fullWidth
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Valores de entrada"
            variant="outlined"
            placeholder="Añade el valor de entrada"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Resultados esperados"
            variant="outlined"
            placeholder="Añade el resultado esperado"
            fullWidth
            value={expectedValue}
            onChange={(e) => setExpectedValue(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Preguntas Agregadas
          </Typography>
          <Box component="table" sx={{ width: '100%', margin: 'auto', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Valores de Entrada</th>
                <th>Resultados Esperados</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.name}</td>
                  <td>{question.description}</td>
                  <td>{question.test_values}</td>
                  <td>{question.test_results}</td>
                  <td>
                    <Button 
                      variant="contained" 
                      color="error" 
                      sx={{ height: '35px' }} 
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Box>
        </Grid>
      </Grid>

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
          className="button-custom" 
          onClick={handleCancel}
        >
          CANCELAR
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          className="button-custom" 
          onClick={handleAddQuestion}
        >
          AÑADIR PREGUNTA
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          className="button-custom" 
          onClick={handleCreateExam}
        >
          CREAR EXAMEN
        </Button>
      </Box>
    </Box>
  );
};

export default CreateQuestion;
