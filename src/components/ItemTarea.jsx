import { ListGroup,Button } from 'react-bootstrap';
import '../../src/App.css'

const ItemTarea = ({nombreTarea,borrarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'> 
        {nombreTarea}
        <Button variant='danger' onClick={()=>borrarTarea(nombreTarea)}>Borrar</Button>
            
        </ListGroup.Item>
    );
};

export default ItemTarea;