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

export async function saveUser(userData){
   
    try {
        const response=await axios.post("http://127.0.0.1:4900/user",userData);
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

export async function userLogin(credentials){
    const response = await axios.post("http://127.0.0.1:4900/student/login",credentials);
    return response.data;
}