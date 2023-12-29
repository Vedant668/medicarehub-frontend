import axios from "axios";


//-----------------------------------------------------------------------to login as doctor---------------------------

export async function doctorLogin(credentials){
    const response = await axios.post("http://localhost:9090/doctorLogin",credentials);
    return response.data;
}