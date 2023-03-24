import { useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  //states
  const [ pacientes, setPacientes ] = useState( () => JSON.parse(localStorage.getItem('pacientes')) || []);
  const [ paciente, setPaciente ] = useState({});

  // useEffect( ()=>{
  //   const obtenerLocalStorage = () =>{
  //     //revisamos el localstorage
  //     const pacientesLocalStorage = JSON.stringify(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes( pacientesLocalStorage )

  //   }
  //   obtenerLocalStorage();
  // }, [])
  //guardar en localStorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  },[pacientes])

  const deletePatient = (id) => {
    const pacientesActualizados = pacientes.filter( ( paciente ) => paciente.id !== id );
    setPacientes(pacientesActualizados)
  };

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = { pacientes }
          setPacientes = {setPacientes}
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = { setPaciente }
          deletePatient = { deletePatient }
        />
      </div>
      
    </div>
  )
}

export default App
