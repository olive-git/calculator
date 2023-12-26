import React, {Component, useState} from 'react';

export function Counter(){
    const [count, setCount] = useState(0)
    const handleClick = function(e){
        e.preventDefault()
        setCount(count => count + 1)
    }
    return <button onClick={handleClick} className='btn btn-outline-primary'>Nombre : {count} </button>
}