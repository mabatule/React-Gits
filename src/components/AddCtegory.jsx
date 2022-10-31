
import React, { useState } from 'react'

export const AddCtegory = ({onAddCategory}) => {


    const [inputValue, setinputValue] = useState('One punch');

    const onInputChange = ({target})=>{
        setinputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        onAddCategory(inputValue);
        setinputValue('');
    }



    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
        
    )
}