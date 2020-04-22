import React, { useState, createContext } from 'react';

export const ButtonContext = createContext();


export const ButtonProvider = (props) => {
    const [buttons,setButtons] = useState(true);
    return (
        <ButtonContext.Provider value={[buttons,setButtons]}>
            {props.children}
        </ButtonContext.Provider>
    );
}


