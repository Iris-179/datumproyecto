import React from 'react'
import {useState} from 'react'
import { useParams} from 'react-router'

export const Editar= () => {
    const { id } = useParams ()
     
    const[usuario, setUsuario] =useState({
        nombre:'',
        email:'',
        activo:false,
        contraseña:''

})
function manejarCambio(evento) {
    const {name, value}= evento.target
    setUsuario((prev) =>({
        ...prev,
        [name]: value
    }))
  }

        async function manejarEnvio(evento) {
            evento.preventDefault()

        
            try{
                await fetch (
        'https://datum-q26q.onrender.com/api/usuarios/' + id,
        
                    {
                        method: 'PUT',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(usuario)                        
                    }
                )
                  alert ('Usuario editado con exito')
    window.location.replace('/')
            }catch (err){
                console.log(err)

            }finally {
                setExito(true)
                setUsuario({
                    nombre:'',
                    email:'',
                    activo: false,
                    contraseña:''
                })

            }

        }
    return ( 
        <div
       style={{     color: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 20,
                     marginTop: 20,
                    fontSize:40}}
           >
            Editar Usuario
         

                <form
                onSubmit={manejarEnvio}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 20,
                    borderRadius: 20

                }}>
                    <input
                    type ='text'
                      placeholder='Nombre'
                      name='nombre'
                      value={usuario.nombre}
                      onChange={manejarCambio}
                      />
                      <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={usuario.email}
                      onChange={manejarCambio}
                      />
                      <select
                      name='activo'
                      id=''
                      onChange={manejarCambio}
                      value={usuario.activo}>
                      <option value={true}>Verdadero</option>
                      <option value={false} selected>
                        Falso </option>
                     </select>
                     <input
                     type='password'
                     placeholder='Contraseña'
                     name='contraseña'
                     value={usuario.contraseña}
                     onChange={manejarCambio}
                     />
                      <button type='submit'>Enviar</button>{''}
                      </form>
        

</div>

            )
        }