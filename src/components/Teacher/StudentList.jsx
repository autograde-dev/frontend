import React, { useState, useEffect } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from '@mui/material';

const StudentList = () => {
  // Datos de ejemplo hasta tener url del backend
  const [students, setStudents] = useState([
    { id: 1, name: 'Estudiante 1' },
    { id: 2, name: 'Estudiante 2' },
    { id: 3, name: 'Estudiante 3' },
    { id: 4, name: 'Estudiante 4' },
    { id: 5, name: 'Estudiante 5' },
    { id: 6, name: 'Estudiante 6' },
    { id: 7, name: 'Estudiante 7' }
  ]); 

  const [selected, setSelected] = useState([]);

  // Descomentar y agregar la url del Backend
  /*
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('URL_BACKEND/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de estudiantes:', error);
      }
    };

    fetchStudents();
  }, []);
  */

  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((studentId) => studentId !== id) : [...prevSelected, id]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(students.map((student) => student.id));
    } else {
      setSelected([]);
    }
  };

  const handleConfirmSelection = () => {
    console.log("Estudiantes seleccionados:", selected);
  };

  return (
    <Paper>
      <TableContainer style={{ maxHeight: 310, overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < students.length}
                  checked={selected.length === students.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Seleccionar Todos los Estudiantes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} selected={selected.includes(student.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(student.id)}
                    onChange={() => handleSelect(student.id)}
                  />
                </TableCell>
                <TableCell>{student.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleConfirmSelection}>
          ACEPTAR
        </Button>
      </Box>
    </Paper>
  );
};

export default StudentList;
