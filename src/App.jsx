import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TeacherPage from './pages/Teacher/TeacherPage';
import AdminPage from './pages/Admin/AdminPage';
import StudentPage from './pages/Student/StudentPage';
import LoginPage from './pages/Login/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login"/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path='/admin' element={<AdminPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
