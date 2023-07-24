import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'


const Titulos = ({titulo}) => {
    return (
        <>
             <h1 className='text-center'>{titulo}</h1>
             <hr className="color-white"/>
            
           
        </>
    );
};

export default Titulos;