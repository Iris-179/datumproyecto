import React from 'react'
import { Link } from 'react-router'

export const Inicio = () => {
  return (
    <div
    style={{
      minHeight: '100vh',
      background: 'grey',
       display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'left',
      alignItems: 'center',
      textAlign: 'center',
    }}>

     <img 
        style={{    
          width:'100%' 
        
      }}
     
     src='src\assets\fondopaginainicio.png'/>
   
  
   
  

   
      <img 
      style={{
        marginLeft: -1100,
        borderRadius: 200,
        transform: 'translateY(-1100px)'
        
      
        
       
      }}
     
      
       src='src/assets/LogoDatum.jpg'/>
  <div>
      <h1 
      style={{
       
        fontSize: 50,
        color: 'white',
        maxwidth: '500',
        transform: 'translateY(-1050px)',
        marginLeft: -1100
        
        }}>
  
          
          La App #1 para gestion de usuarios
        </h1>
      
  
      </div>
      <div>
   
    <p
    style={{
       
        fontSize: 20,
        color: 'black',
        width: 1500, 
         transform: 'translateY(-500px)'
        }}>
  
    
      <h1>"Amplíe las capacidades de sus aplicaciones con nuestra API de base de datos, una herramienta poderosa y flexible que simplifica la interacción con su base de datos</h1>
<h2>Beneficios:</h2>
<h3>Facilidad de uso:</h3>
Diseñada para ser intuitiva y fácil de integrar, nuestra API requiere un mínimo de configuración y documentación completa para facilitar el desarrollo.
<h3>Mayor flexibilidad:</h3>
Permite el acceso a datos de diversas fuentes y formatos, adaptándose a diferentes necesidades de desarrollo.
<h3>Mayor seguridad:</h3>
La API incluye mecanismos de autenticación y autorización para proteger los datos y evitar accesos no autorizados.
<h3>Funcionalidades avanzadas:</h3>
Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) con facilidad y gestionar transacciones de forma eficiente.
<h3>Escalabilidad:</h3>
La API está diseñada para soportar grandes volúmenes de datos y tráfico, garantizando el rendimiento de sus aplicaciones.
Soporte completo:
Ofrecemos un equipo de soporte dedicado para responder a sus preguntas y ayudarle a solucionar problemas. 

    </p>
</div>
    <div
    style={{
      background: 'grey',
      display: 'flex',
      gap:  20,
          transform: 'translateY(-300px)',
         
    }}>
      
      
      <Link 
      to='/usuarios'
      style={{
        background:'black',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none',
         borderRadius: 50
      }}>
      
      Ver Usuarios
      </Link>

       <Link 
       to='/registro'
       style={{
        background:'black',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none',
         borderRadius: 50
       }}
       
       >Crear</Link>
  
</div>
  
      </div>
  )}
    




