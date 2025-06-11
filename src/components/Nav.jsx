import React from 'react'
import { Link } from 'react-router'

export const Nav = () => {
  return (
        <div
    style={{
      height: '100%',
      width: '100%',
    background: 'black',
      display: 'flex',
      gap:  20,
      justifyContent: 'center',
      

    }}>
       <Link 
      to='/Inicio'
      style={{
        background:'grey',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none',
        borderRadius: 15
      }}>
      
      Inicio
      </Link>
      <Link 
      to='/usuarios'
      style={{
        background:'grey',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none',
        borderRadius: 15
      }}>
      
      Ver usuarios
      </Link>

       <Link 
       to='/registro'
       style={{
        background:'grey',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none',
        borderRadius: 15
       }}
       
       >Crear</Link>
      


    </div>
  )
}
