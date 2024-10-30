import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { mapRoles } from '../config/roles';
import { useAuth } from './AuthContext';



function LoginForm() {

    const { setUserRole } = useAuth();
    const [formData, setFormData] = useState({
        client_id: '',
        grant_type: '',
        username: '',
        password: '',
        client_secret: '',

    });

    const selectedRole = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear el objeto FormData
        const data = new FormData();
        data.append('client_id', formData.client_id);
        data.append('grant_type', formData.grant_type);
        data.append('username', formData.username);
        data.append('password', formData.password);
        data.append('client_secret', formData.client_secret);


        // Enviar la solicitud con axios
        try {
            const response = await axios.post(
                'https://tu-dominio-de-keycloak/auth/realms/tu-realm/protocol/openid-connect/token',
                data
            );

            const token = response.data.access_token;

            // Guardar el token en el local storage
            localStorage.setItem('token', token); //guarda el token

            //Decodificar el token para obtener el rol de usuario
            const decodedToken = jwtDecode(token);
            const roles = decodedToken.realm_access.roles;

            //Encontrar el rol que coincida con 'mapRoles'
            const userRole = roles.find(role => mapRoles[role]);
            //Redirigir el usuario a su panel según el Rol
            if (userRole) {
                setUserRole(userRole);
                navigate(mapRoles[userRole]); //Redirecciona con base en el rol
            } else {
                alert('Rol no autorizado')
            }

        } catch (error) {
            console.error('Error de autenticación:', error);
            alert('Error de autenticación')
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-white font-roboto text-white'>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-6">Login</h2>

            <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleChange}
                className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
            />
            <select value={selectedRole} className='w-full mb-4 p-2 bg-gray-700 text-white rounded'>
                <option value="">Rol</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
                <option value="admin">Admin</option>
            </select>
            <button className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded" type="submit">Iniciar sesión</button>
        </form>
        </div>
    );
}

export default LoginForm;