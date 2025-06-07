import { useState } from 'react';
import '../assets/styles/LoginRegister.css';
import { toast } from 'react-toastify';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit = (e) => {
           e.preventDefault()

      // Hito 2: Validaciones

      if (!email.trim() || !password.trim() || !confirm.trim()) {
        toast.error("Todos los campos son obligatorios");
        return;
      }
      if (password.length < 6) {
        toast.error("La contraseña debe tener al menos 6 caracteres");
        return;
      }
  
      if (password !== confirm) {
        toast.error("Las contraseñas no coinciden");
        return;
      }

      toast.success('¡Registro exitoso!');
      }
    
  return (
    <>
    <form action="form" id='idRegister' onSubmit={handleSubmit}>

        <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            value={email} 
            placeholder='Escribe aquí tu email'
            id='email' 
            name='email'
            onChange={(e) => setEmail(e.target.value)} 
            />

        <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            placeholder='Escribe aquí tu password'
            name="password"
            id="password" 
            onChange={(e) => setPassword(e.target.value)} 
            />

        <label htmlFor="confirm">Confirmar contraseña:</label>
          <input 
            type="password" 
            value={confirm} 
            placeholder='Confirmar password'
            name="confirm" 
            id="confirm" 
            onChange={(e) => setConfirm(e.target.value)} 
            />

        <button className='registerbtn' type='submit'> Register </button>
    </form>
    </>
  )
}

export default Register