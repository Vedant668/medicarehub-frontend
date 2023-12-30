

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
import { getAppointmentsByDocterId } from "../Services/DoctorServices";
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
        populateStudentState();
    }, []);


    async function populateStudentState() {
        try {
            const data = await getAppointmentsByDocterId(doctorId);
            console.log(data);
    
            // Map the required data fields from the Appointments array
            const mappedAppointments = data.map((appointment) => ({
                id: appointment.id,
                name: appointment.patient.Name,
                username: appointment.patient.Username,
                password: appointment.patient.Password,
                gender: appointment.patient.Gender,
                phone: appointment.patient.Phone,
                email: appointment.patient.Email,
                // Add more fields as needed
            }));
    
            setAppointments(mappedAppointments);
            console.log(mappedAppointments);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container className="LearnerList" style={{padding:'100px',color:'white'}}>
            <Row><h1>Appointment List</h1></Row>
            {appointments.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Admin    Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((s) => {
                                return (
                                    <tr>
                                        <td>{s.Name}</td>
                                        <td>{s.Username}</td>
                                        <td>{s.Password}</td>
                                        <td>{s.Gender}</td>
                                        <td>{s.Phone}</td>
                                        <td>{s.Email}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openModalDialog();
                                                // setSelectedPhone();
                                            }}>Delete</Button>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(`/edit/${}`);
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