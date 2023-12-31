

import {deleteStudent} from "../Services/PatientServices";


// export function DoctorDashboard(){

//     const {userState, updateState} =useUserContext();
//     let doctorId = userState.loginId;

//     useEffect(() => {
//         // try {
//         //     async function fetchData() {
//         //         let response = await getAppointmentsByDocterId(doctorId);
//         //         console.log(response);
//         //     }
//         //     fetchData();
//         // }
//         // catch (error) {
//         //     console.log(error);
//         // }
//     }, []);

//     return(
//         <Container>
           
//         </Container>
//     )
// }
import { useUserContext } from "../Context/Context";
import { getAppointmentsByDoctorId } from "../Services/DoctorServices";
import { Button, Container, Table, Modal ,Row} from "react-bootstrap";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export function DoctorDashboard() {

    // const [students, setStudents] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();

    const {userState, updateState} =useUserContext();
    let doctorId = userState.loginId;

    //---------------------------------------------to open the delete confirmation modal-------------------------------------------------------------------

    const [showDialog, setShowDialog] = useState(false);

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }


    //-----------------------------------to delete entry of learner onclicking delete-----------------------------------------------------------------------

    // const [selectedPhone, setSelectedPhone] = useState();

    // const handleDeleteClick = async () => {

    //     try {
    //         const response = await deleteStudent(selectedPhone);
    //         console.log(response);
    //         await populateStudentState();
    //         closeModalDialog();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    //-----------------------------------to fetch learner from database-----------------------------------------------------------------------------

    // async function populateStudentState() {
    //     try {
    //         const data = await getAppointmentsByDocterId(doctorId);
    //         console.log(data);
    //          setAppointments(data);
    //          console.log(appointments);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    useEffect(() => {

        if(userState.loginId)
             populateAppointmentsState();
    }, [userState.loginId]);


    async function populateAppointmentsState() {
        try {
            const data = await getAppointmentsByDoctorId(userState.loginId);
            console.log(data);
    
            setAppointments(data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(appointments)

    return (
        <Container className="LearnerList" style={{padding:'100px',color:'white'}}>
            <Row><h1>Appointment List</h1></Row>
            {appointments.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            
                        <th> Appointment date</th>
                        <th> Appointment Time</th>
                        <th> Symptoms</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((s,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{s.appdate}</td>
                                        <td>{s.apptime}</td>
                                        <td>{s.symptoms}</td>
                                        <td>{s.height}</td>
                                        <td>{s.weight}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openModalDialog();
                                            }}>Delete</Button>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(`/edit/${s.id}`);
                                               navigate(`/edit/${s.id}`, { state: { appointmentData: s } });
                                            }}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        // handleDeleteClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}