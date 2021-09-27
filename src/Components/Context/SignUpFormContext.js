import React, { useState } from 'react';
export const SignUpFormContext=React.createContext();
export const FormProvider=(props)=>{
    const [form,setForm] = useState({});
    return(
        <SignUpFormContext.Provider value={[form,setForm]}>
            {props.children}
        </SignUpFormContext.Provider>
    )
}