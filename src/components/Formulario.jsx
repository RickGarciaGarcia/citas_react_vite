import {useState,useEffect} from 'react';
import Error from './Error';
import Paciente from './Paciente';

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError] = useState(false);
  //Este se va a ejecutar cada que paciente cambie
  useEffect( ()=>{
    //revisamos que el arreglo esta vacio o no
    if( Object.keys(paciente).length > 0 ){
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [ paciente ]);
  
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion formulario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ){
      setError(true);
      return;
    }
    setError(false)

    //Objeto Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    }

    if( paciente.id ){
      //editando el registro
      //console.log(objetoPaciente) Es el que va a estar actualizado
      objetoPaciente.id = paciente.id
      //console.log(paciente) es el que no esta actualizado
      const pacientesActualizados = pacientes.map( (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados);
      setPaciente({}) 

    }else{
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-4">

        {error && <Error mensaje = 'Todos los campos son obligatorios' /> }
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full
           p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre}
           onChange={ (e) => setNombre(e.target.value) } />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">Nombre propietario</label>
          <input id="nombrePropietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full
           p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario}
           onChange={ (e) => setPropietario(e.target.value) } />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email contacto propietario</label>
          <input id="email" type="email" placeholder="E-mail" className="border-2 w-full
           p-2 mt-2 placeholder-gray-400 rounded-md" value={email}
           onChange={ (e) => setEmail(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="fechaDeAlta">Fecha de alta</label>
          <input id="fechaDeAlta" type="date" className="border-2 w-full
           p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha}
           onChange={ (e) => setFecha(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea name="" id="sintomas" placeholder="Describe los sintomas" className="w-full border-2 pt-2 mt-2 placeholder-gray-400 rounded-md" value={sintomas}
           onChange={ (e) => setSintomas(e.target.value) }></textarea>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}/>
      </form>
    </div>
  )
}

export default Formulario

