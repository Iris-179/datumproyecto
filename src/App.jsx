import { BrowserRouter, Route, Routes }  from "react-router"
import {Error404}   from './pages/Error404'
import  {Inicio}  from './pages/Inicio'
import  {Nav}  from './components/Nav'
import {Usuarios}  from './pages/Usuarios'
import  {UsuarioPorId}  from './pages/UsuarioPorId'
import {Registro} from './pages/Registro'
import {Editar} from './pages/Editar'





function App() {
  return (
  <BrowserRouter> hola aqui estoy
  
  <Nav></Nav>
  <Routes>

  <Route path = '/' element={<Inicio></Inicio>}></Route>
  <Route path = '/registro' element={<Registro></Registro>}></Route>
  <Route path = '/usuarios' element={<Usuarios></Usuarios>}></Route>
  <Route path = '/usuario/:id' element={<UsuarioPorId></UsuarioPorId>}></Route>
  <Route path = '/usuario/editar/:id' element={<Editar></Editar>}> </Route>
  <Route path = '*' element={<Error404></Error404>}></Route>
    
  </Routes>

</BrowserRouter>
  )
}

export default App