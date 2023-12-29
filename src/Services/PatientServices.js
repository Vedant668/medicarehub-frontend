import axios from "axios";

//------------------------------------------------to fetch the data of learner-------------------------------------------

export async function fetchuser(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/user");
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------to save the data of User-------------------------------------------

export async function savePatient(patientData){
   
    try {
        const response=await axios.post("http://localhost:9090/register",patientData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------to delete the data of learner-----------------------------------------

export async function deleteStudent(Phone){
    try {
       const response = await axios.delete(`http://127.0.0.1:4900/student/${Phone}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------to fetch unique learner by phone number----------------------------
export async function fetchStudentByPhone(Phone){
    try {
        const response = await axios.get(`http://127.0.0.1:4900/student/${Phone}`);
        return response.data;
     } catch (error) {
         console.log(error);
     }
}


//---------------------------------------------------------to update learner data by phone number--------------------------------

export async function updateStudent(updatedData,Phone){
    try {
        const response = await axios.put(`http://127.0.0.1:4900/student/${Phone}`,updatedData);
        return response.data;
     } catch (error) {
         console.log(error);
     }
}

//--------------------------------------------------------to login as learner--------------------------------------------------

export async function patientLogin(credentials){
    const response = await axios.post("http://localhost:9090/patientLogin",credentials);
    return response.data;
}