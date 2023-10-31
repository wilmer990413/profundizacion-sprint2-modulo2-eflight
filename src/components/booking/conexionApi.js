import axios from "axios";

const API_BOOKINK = "https://miniback-books-app-i9fd.onrender.com/";
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