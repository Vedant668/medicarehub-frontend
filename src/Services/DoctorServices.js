import axios from "axios";


//-----------------------------------------------------------------------to login as admin---------------------------

export async function doctorLogin(credentials){
    const response = await axios.post("http://127.0.0.1:4900/admin/login",credentials);
    return response.data;
}