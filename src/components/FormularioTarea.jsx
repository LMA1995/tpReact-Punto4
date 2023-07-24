import { Form,Button } from 'react-bootstrap';
import React, { useState } from 'react';
import ListaTareas from './ListaTareas';
import '../../src/App.css'

const FormularioTarea = () => {
    const [tarea,setTarea]=useState('');
    const [listaTareas, setListaTareas]=useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        //guardar la tarea en el array listaTareas
       setListaTareas([...listaTareas, tarea]);
        //limpiar el value del input
        setTarea('')
    };
    const borrarTarea = (tareaBorrar)=>{
        let listaTareasFiltrada = listaTareas.filter((itemTarea)=> itemTarea !== tareaBorrar);
        setListaTareas(listaTareasFiltrada)
      }
    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
         
        </Form.Group>
      </Form>
      <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
        </>
    );
};

export default FormularioTarea;