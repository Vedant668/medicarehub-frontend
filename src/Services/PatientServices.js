import axios from "axios";

let url='http://localhost:9090';
//------------------------------------------------to fetch the data of learner-------------------------------------------

export async function fetchuser(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/user");
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------to save the register patient-------------------------------------------

export async function savePatient(patientData){
   
    try {
        const response=await axios.post("http://localhost:9090/register",patientData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



//----------------------------------------------------------to fetch unique learner by phone number----------------------------
// export async function fetchStudentByPhone(Phone){
//     try {
//         const response = await axios.get(`http://127.0.0.1:4900/student/${Phone}`);
//         return response.data;
//      } catch (error) {
//          console.log(error);
//      }
// }


//---------------------------------------------------------to update learner data by phone number--------------------------------

// export async function updateStudent(updatedData,Phone){
//     try {
//         const response = await axios.put(`http://127.0.0.1:4900/student/${Phone}`,updatedData);
//         return response.data;
//      } catch (error) {
//          console.log(error);
//      }
// }

//--------------------------------------------------------to login as Patient--------------------------------------------------

export async function patientLogin(credentials){
    const response = await axios.post("http://localhost:9090/patientLogin",credentials);
    return response.data;
}


//----------------------------------------------------to save appointment-------------------------------------------

export async function bookAppointment(appData){
   
    try {
        console.log('appdata',appData)
        const response=await axios.post(url+"/bookAppointment?patientId="+appData.patientId+"&doctorId="+appData.doctorId,appData);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
