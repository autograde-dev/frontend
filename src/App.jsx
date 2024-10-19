// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './component/login';
import Menu from './pages/Menu';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/estudiante" element={<StudentPage />} />
        <Route path="/profesor" element={<TeacherPage />} />
        <Route path='/admin' element={<AdminPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;


//<Route path="/profesor/*" element={<ProfesorPage />} />
//<Route path="/admin/*" element={<AdminPage />} />