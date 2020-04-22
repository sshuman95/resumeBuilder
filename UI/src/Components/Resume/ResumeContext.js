import React, { useState, createContext } from 'react';

export const ResumeContext = createContext();


export const ResumeProvider = (props) => {
    const [resume, setResume] = useState(
        {header:{name:"",email:"",phone:"",address:""},skills:[],education:[{organization:"",date:"",details:""}]}
    )

    return (
        <ResumeContext.Provider value={[resume,setResume]}>
            {props.children}
        </ResumeContext.Provider>
    );
}


