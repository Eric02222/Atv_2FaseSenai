import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// let usuarioLogado = 'Gill Bates'
const [usuarioLogado, setUsuarioLogado] = useState('')
const [usuarios, setUsuarios] = useState ([{
    nome: 'Carlos',
    senha: '123456',
    email: 'carlos@gmail.com'
}])

let idadeUsuario = '55'

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            usuarios,
            setUsuarios
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
