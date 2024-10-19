import React, { useState } from 'react';
// import { login } from '../services/authService'; para cuando el Back esté listo

const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login({ email, password });
        onLoginSuccess(user);

    };

    return (
        <div>
            <h1>Página de Login en Construcción</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
