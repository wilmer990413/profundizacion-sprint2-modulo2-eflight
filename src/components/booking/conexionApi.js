import axios from "axios";

const API_BOOKINK = "http://localhost:3000/";
const endpointsTickets = "tickets";

export const getBooking = async () => {
    try {

        const { data } = await axios.get(`${API_BOOKINK}${endpointsTickets}`);
        console.log(data)
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}