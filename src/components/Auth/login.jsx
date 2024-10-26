import React, { useState } from 'react';
import { mapRoles } from '../config/roles';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (mapRoles[role]) {
            navigate(mapRoles[role]); //Redirecciona con base en el rol
        } else {
            alert('Rol no encontrado');
        }
    };

    /*if (email && password && mapRoles[role]) {
      const token = 'tu_token_aqui'; // Reemplaza esto con el token real que obtengas
      localStorage.setItem('token', token); // Guardar el token en localStorage
      navigate(mapRoles[role]); // Redirigir según el rol
  } else {
      alert('Por favor, completa todos los campos y selecciona un rol válido.');
  }
};*/

    return (
        <div className="h-screen flex justify-center items-center bg-gray-900 font-roboto text-white">
          <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-6">Login</h2>
    
            <input 
              type="text" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full mb-4 p-2 bg-gray-700 text-white rounded" 
            />
    
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full mb-4 p-2 bg-gray-700 text-white rounded" 
            />
    
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
    
            <button 
              type="submit" 
              className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Login
            </button>
          </form>
        </div>
      );
    };
export default Login;