const url ="https://665c939a3e4ac90a04da0103.mockapi.io/usuarios/usuarios"

import axios from 'axios'

export const getAll = async () => {
    try{
    const { data: usuarios } = await axios.get(url)
        return usuarios
    }
    catch(error) {
        console.error("Error Usuarios GET", error)
        return []
    }


};


