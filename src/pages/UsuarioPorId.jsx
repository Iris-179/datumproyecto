import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router'
import {BotonDeEliminar} from '../components/BotonDeEliminar'



export const UsuarioPorId =() => {
    const {id} = useParams()
    const [usuario, setUsuario] = useState({})
    const [Loading, setLoading] = useState(true)
   const [error, setError] =useState(null)
    

    useEffect (() => {
        const obtenerUsuarioPorId = async() => {
        try {
            const res = await fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id)
            const data = await res.json ()
            setUsuario (data.datos)
            
        } catch (err){
            setError (err)
            console.log ('hay un error:', err)
        }
        finally {
            setLoading (false)

        }
    }
    obtenerUsuarioPorId ()


}, [id])
 if (error) {
    return<h1 style={{ color: 'red'}}>Hubo un error</h1>
  }

  if (Loading) {
    return <h1>Estoy cargando...</h1>
  }

return (
    <div
    
      style={{
      
        background: 'grey',
        padding: 10,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        
        
      }}>
       
  
  
        <h1>Informacion del Usuario:
         {usuario._id}</h1>
        
            <h1>nombre:{usuario.nombre}</h1>
            <h2>email:{usuario.email}</h2>
            <h3>estado:{usuario.activo? 'es activo' : 'es inactivo'}</h3>
            <h4>fecha:{usuario.fechaCreacion}</h4>
            
           

        
  

    
    <Link 
          to={'/usuario/editar/' + id}
          
          style={{
        background:'black',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none'
      }}>
  
      Editar</Link>
      
    <BotonDeEliminar id={id}></BotonDeEliminar>
   
    </div>
)} 

 
