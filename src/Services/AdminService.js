import axios from "axios";

let url='http://localhost:9090';

export async function adminLogin(credentials){
    const response = await axios.post((url+"/adminLogin"),credentials);
    return response.data;
}
//-----------------------------------------------------------------------to appointments by doctorId---------------------------
export async function getAppointments(doctorId){

    
    const response = await axios.get(`${url}/fetchAllApointments`);
    
    return response.data;
}



//----------------------------------------------------------------------fetch patients--------------------------
export async function getPatients(){

    
    const response = await axios.get(`${url}/fetchPatients`);
    
    return response.data;
}

//----------------------------------------------------------------------fetch patients--------------------------
export async function getDoctors(){

    
    const response = await axios.get(`${url}/fetchDoctors`);
    
    return response.data;
}

//----------------------------------------------------------------------fetch patients--------------------------
export async function getAdmins(){

    
    const response = await axios.get(`${url}/fetchAdmins`);
    
    return response.data;
}


//-----------------------------------------------------------------------to update appointment by appointmentId and doctorId---------------------------

export async function updateAppointmentsByAppIdAndDocId(doctorId,credentials){

    
    const response = await axios.put(`${url}/updateByDoctor/${doctorId}`,credentials);
    
    return response.data;
}

//----------------------------------------------------------to delete the appointment -----------------------------------------

export async function deleteAppointment(appId){
    try {
       const response = await axios.delete(url+`/rejectAppointmentByDoctor/${appId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}


//----------------------------------------------------------Remove Patient -----------------------------------------

export async function removePatient(patientId){
    try {
        console.log("patient remove : ", patientId)
       const response = await axios.delete(url+`/removePatient/${patientId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------Remove Doctor -----------------------------------------

export async function removeDoctor(doctorId){
    try {
       const response = await axios.delete(url+`/removeDoctor/${doctorId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------Remove Admin -----------------------------------------

export async function removeAdmin(adminId){
    try {
       const response = await axios.delete(url+`/removeAdmin/${adminId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}