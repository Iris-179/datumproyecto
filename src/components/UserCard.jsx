import React from 'react'
import { Link } from 'react-router'







export const UserCard = ({ nombre, email, id }) => {
  return (
  <div
      style={{
      
        background: 'grey',
        padding: 10,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        width:350,
        height:350
        
        
      }}>
        <div
        styles={{
          borderRadius: 200,
        }}>
          <img 
      style={{
      
        borderRadius: 200,
      
        
      
        
       
      }}
     
      
       src='src/assets/LogoDatumcard.jpg'/>
          
        </div>
          <h2>{nombre}</h2>
          <h3>{email}</h3>
          
    
          <Link 
          to={'/usuario/' + id}
          
          style={{
        background:'black',
        color: 'white',
        padding: '6px 12px',
        twxDecoration: 'none'
      }}>
  
      Ver detalles</Link>
          </div>
  
)}