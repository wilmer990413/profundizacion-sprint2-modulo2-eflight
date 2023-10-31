import axios from 'axios';
const endpointFlights = 'https://miniback-books-app-i9fd.onrender.com/vuelos';

export const listFlights = async () => {
    try {
        const response = await axios.get(endpointFlights);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else{
            return response.data;
        }
    } catch(e) {
        console.error(e);
    }
}

export const FindFlightById = async (id) => {
    try {
        const response = await axios.get(endpointFlights+"/"+id);
        if(response.status !== 200){
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }else{
            return response.data;
        }
    } catch(e) {
        console.error(e);
    }
}
