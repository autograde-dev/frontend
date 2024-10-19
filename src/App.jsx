import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import FormStudentsPage from './pages/FormStudentsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/estudiante" element={<StudentPage />} />
        <Route path="/profesor" element={<TeacherPage />} />
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path="/formstudent" element={<FormStudentsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
