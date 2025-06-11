


export const BotonDeEliminar = ({id}) => {
    function eliminar () {
        fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id, {
        method:'DELETE'

    })
    alert ('Usuario eliminado con exito')
    window.location.replace('/')
}

return(
<button onClick= {eliminar} className="informa"> Eliminar</button>
)}
