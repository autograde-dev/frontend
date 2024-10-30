import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TeacherPage from './pages/Teacher/TeacherPage';
import AdminPage from './pages/Admin/AdminPage';
import StudentPage from './pages/Student/StudentPage';
import LoginPage from './pages/Login/LoginPage';
import FormStudentsPage from './pages/Student/FormStudentsPage';
import FormTeacherPage from './pages/Teacher/FormTeacherPage';
import CreateExamPage from './pages/CreateExam/CreateExamPage';
import ExamenPage from './pages/Examen/ExamenPage';
import { AssignQuestionsPage } from './pages/CreateExam/assignQuestionPage';


function App() {


  return (
    <Router>
      <div>


        <Routes>

          <Route path="/login" element={<LoginPage />} />
          {/* Rutas protegidas 
       <Route path="/" element={<ProtectedRoute isAllowed={auth()} />}>
            <Route path="/student" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/formStudent" element={<FormStudentsPage />} />
            <Route path="/formteacher" element={<FormTeacherPage />} />
      </Route>    */}


          {/* Rutas sin protección */}
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/formStudent" element={<FormStudentsPage />} />
          <Route path="/formteacher" element={<FormTeacherPage />} />
          <Route path="/createExam" element={<CreateExamPage />} />
          <Route path="/examen" element={<ExamenPage />} />
          <Route path="/assignQuestions" element={<AssignQuestionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;