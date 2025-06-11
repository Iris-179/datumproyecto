
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'
import {UserCard} from '../components/UserCard'




export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]) 
  const [Loading, setLoading] = useState(true)
  const [error, setError] =useState(null)

  useEffect (() => {
    const obtenerUsuarios =async () => {
      try {
        const res =  await fetch(
          'https://datum-q26q.onrender.com/api/usuarios/'
      
      );
       
        const data =await res.json()
        setUsuarios(data.datos);

      } catch (error) {
        console.log("error")
        setError(error)      
      } finally {
      setLoading(false);
      }
    }
    


  obtenerUsuarios()
  }, [])


   if (error) {
    return<h1 style={{ color: 'red'}}>Hubo un error</h1>
  }

  if (Loading) {
    return <h1>Estoy cargando...</h1>
  }
  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 100,
      justifyContent:'center'
    
    }}>
      
      {usuarios.map((usuarios) => (
      <UserCard
         nombre={usuarios.nombre}
         email={usuarios.email}
         id={usuarios._id}>

        </UserCard>
      
      
        
  ))
}  
</div>
    



)}
