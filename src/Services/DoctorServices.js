import axios from "axios";


//-----------------------------------------------------------------------to login as doctor---------------------------
let url='http://localhost:9090';

export async function doctorLogin(credentials){
    const response = await axios.post((url+"/doctorLogin"),credentials);
    return response.data;
}

export async function getAllDoctors(){
    const response = await axios.get(url+"/getAllDoctors");
    return response.data;
}
export async function getAppointmentsByDocterId(doctorId){

    const response = await axios.get(url+"/getAppointmentsByDocterId?doctorId="+doctorId);
    return response.data;
}