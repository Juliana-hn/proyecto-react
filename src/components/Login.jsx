import { useState } from 'react';
import '../assets/styles/LoginRegister.css';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
   // Hito 2: Validaciones
   
    if (!email.trim() || !password.trim()) {
        toast.error("Todos los campos son obligatorios");
        return;
    }
    if (password.length < 6) {
        toast.error("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    toast.success('¡Login exitoso!');
    };

  return (
    <>
    <form action="form" id='idLogin' onSubmit={handleSubmit}>
        <label htmlFor="emailId">Email: </label>
          <input 
            type="email" 
            value={email} 
            placeholder='Email'
            id='emailLogin' 
            name='email'
            onChange={(e) => setEmail(e.target.value)} 
            />

        <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            placeholder='Password'
            name="password"
            id="passwordLogin" 
            onChange={(e) => setPassword(e.target.value)} 
            />

        <button className='loginbtn' type='submit'> Login </button>
    </form>
    </>
  )
}

export default Login