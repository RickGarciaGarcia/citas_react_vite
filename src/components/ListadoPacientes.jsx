//import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ( { pacientes, setPaciente, deletePatient } ) => {
  
    // useEffect(()=>{
    //   if(pacientes.length > 0){
    //     console.log('Paciente nuevo')
    //   }
    // }, [pacientes]);
  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      { pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="mt-5 text-xl text-center mb-10">
        Administra tus {''}
          <span className="text-indigo-600 font-bold">pacientes y citas</span>
        </p>
        { pacientes.map( (paciente)=>( 

          <Paciente 
            key = { paciente.id }
            paciente={ paciente }
            setPaciente = { setPaciente }
            deletePatient = { deletePatient }
          />
            
          ))
        }
      </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="mt-5 text-xl text-center mb-10">
          Comienza agregando pacientes{''}
            <span className="text-indigo-600 font-bold">Aquí apareceran</span>
          </p>
        </>
      )}
      
      
     
    </div>
      
  )
}

export default ListadoPacientes
