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


function App() {

  const [user, setUser] = useState(null); // Estado para el usuario

  const login = () => {
    setUser({ id: 1, name: 'John', roles: ['admin'] }); // Simula un inicio de sesión
  };

  const logout = () => {
    setUser(null); // Cierra sesión
  };

  const auth = () => {
    const token = localStorage.getItem("token")
    return Boolean(token)
  }

  return (
    <Router>
      <div>

      
      <Routes>

        <Route path="/login" element={<LoginPage />} />
       {/* Rutas protegidas */}
       <Route path="/" element={<ProtectedRoute isAllowed={auth()} />}>
            <Route path="/student" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/formStudent" element={<FormStudentsPage />} />
            <Route path="/formteacher" element={<FormTeacherPage />} />
      </Route>    
      </Routes>
      </div>
    </Router>
  );
}


export default App;