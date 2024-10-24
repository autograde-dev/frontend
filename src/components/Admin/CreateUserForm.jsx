import React from "react";
import { useState } from "react";

const CreateUserForm = () => {
    const [isOpen, setisOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`User ${username} with role ${role} created.`);
    };

    return (
        <div className="mb-6">
            <button
                onClick={() => setisOpen(!isOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
                {isOpen ? 'Cerrar' : 'Crear Usuario'}
            </button>


            {isOpen && (
                <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded">
                    <h2 className="text-xl mb-4 text-white">Crear nuevo Usuario</h2>

                    <input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
                    />
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
                    >
                        <option value="">Seleccionar rol</option>
                        <option value='admin'> Admin </option>
                        <option value='student'> Estudiante </option>
                        <option value='teacher'> Profesor </option>

                    </select>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
                    >
                        Crear Usuario
                    </button>
                </form>
            )}
        </div>
    )
};

export default CreateUserForm;