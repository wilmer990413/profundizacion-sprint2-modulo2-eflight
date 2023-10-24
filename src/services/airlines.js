import axios from 'axios';
const endpointAirlines = 'https://miniback-books-app-i9fd.onrender.com/aerolineas';

export const FindAirlinesById = async (id) => {
    try {
        const response = await axios.get(endpointAirlines+'/'+id);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else{
            return response.data;
        }
    } catch(e) {
        console.error(e);
    }
}