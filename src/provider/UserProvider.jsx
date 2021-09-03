import React,{ createContext, useState} from "react";


export const UserContext = createContext({});

export const UserProvider = (props)=>{
    const {children}=props;
    const [userInfo,setInfo]=useState({});
    return(
    <UserContext.Provider value={{userInfo,setInfo}}>
        {children}
    </UserContext.Provider>
    );
}