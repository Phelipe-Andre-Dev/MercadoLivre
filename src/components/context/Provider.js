import React, { useState } from "react"
import AppContext from "./AppContext"

function Provider({children}){
     
    const [produtos, setProdutos] = useState([]);
    const [load, setLoad] = useState (true)

    const value ={
        produtos,
        setProdutos,
        load,
        setLoad,
    };

    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export default Provider