import React from 'react'
import { Link } from 'react-router'


export const Error404 = () => {
  return (
  <div 
    style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

  }}>
    <h1>Error404</h1>
    <p>Lo aentimos, no encontramos etsa pagina</p>
    <Link 
    to='/' 
    style={{
    background: 'black',
    color: 'white',
    padding: '6px 12px',
    texDecoration: 'none'
    }}>Volver al inicio</Link>
    
  </div>
  )
}
