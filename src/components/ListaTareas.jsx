import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';
import '../../src/App.css'

const ListaTareas = ({propsListaTareas,borrarTarea}) => {
  return (
    <ListGroup>
      {
        propsListaTareas.map((tarea,index) => <ItemTarea key={index} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
      
    </ListGroup>
  );
};

export default ListaTareas;