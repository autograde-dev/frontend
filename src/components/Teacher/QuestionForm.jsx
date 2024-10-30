import React, { useState } from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button, FormControl, FormLabel, RadioGroup, Radio, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const QuestionForm = () => {
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { type: 'text', prompt: '', options: [] }]);
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleAddOption = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.push('');
        setQuestions(updatedQuestions);
    };

    const handleDeleteOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(updatedQuestions);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Formulario de Preguntas</Typography>
            {questions.map((question, index) => (
                <Box key={index} sx={{ marginBottom: 3, padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                    {/* Enunciado de la Pregunta */}
                    <TextField
                        label="Enunciado de la pregunta"
                        fullWidth
                        value={question.prompt}
                        onChange={(e) => handleQuestionChange(index, 'prompt', e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />

                    {/* Tipo de Pregunta */}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Tipo de Pregunta</FormLabel>
                        <RadioGroup
                            row
                            value={question.type}
                            onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                        >
                            <FormControlLabel value="text" control={<Radio />} label="Campo de Texto" />
                            <FormControlLabel value="checkbox" control={<Radio />} label="Selección Múltiple" />
                            <FormControlLabel value="radio" control={<Radio />} label="Selección Única" />
                            <FormControlLabel value="file" control={<Radio />} label="Subir Archivo" />
                        </RadioGroup>
                    </FormControl>

                    {/* Campos de Respuesta según Tipo de Pregunta */}
                    {question.type === 'checkbox' || question.type === 'radio' ? (
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="subtitle1">Opciones</Typography>
                            {question.options.map((option, optionIndex) => (
                                <Box key={optionIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                    <TextField
                                        label={`Opción ${optionIndex + 1}`}
                                        fullWidth
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                                        sx={{ marginRight: 1 }}
                                    />
                                    <IconButton color="error" onClick={() => handleDeleteOption(index, optionIndex)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))}
                            <Button variant="outlined" onClick={() => handleAddOption(index)}>Agregar Opción</Button>
                            {/* Botón para cancelar la pregunta */}
                            <Button variant="outlined" color="error" onClick={() => handleDeleteQuestion(index)}>
                                Cancelar Pregunta
                            </Button>
                        </Box>

                    ) : question.type === 'file' ? (
                        <Typography sx={{ marginTop: 2, fontStyle: 'italic' }}>Este campo permite subir un archivo.</Typography>
                    ) : null}
                </Box>
            ))}
            <Button variant="contained" onClick={handleAddQuestion}>Agregar Pregunta</Button>
        </Box>
    );
};

export default QuestionForm;
