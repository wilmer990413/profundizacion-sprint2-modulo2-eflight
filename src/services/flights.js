import axios from 'axios';
const endpointFlights = 'http://localhost:3000/vuelos';

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