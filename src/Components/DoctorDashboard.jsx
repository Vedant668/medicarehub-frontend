import { useUserContext } from "../Context/Context";
import { getAppointmentsByDoctorId ,deleteAppointment} from "../Services/DoctorServices";
import { Button, Container, Table, Modal ,Row} from "react-bootstrap";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export function DoctorDashboard() {

    

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


    //-----------------------------------to delete entry of appointment onclicking delete-----------------------------------------------------------------------

    const [selectedPhone, setSelectedPhone] = useState();
    const [appId, setSelectedAppId] = useState();

    const handleDeleteClick = async () => {
        console.log(appId);
        try {
            const response = await deleteAppointment(appId);
            console.log(response);
            await populateAppointmentsState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    //-----------------------------------to fetch learner from database-----------------------------------------------------------------------------

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
                                                setSelectedAppId(s.id);
                                            }}>Reject Appointment</Button>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(`/edit/${s.id}`);
                                               navigate(`/edit/${s.id}`, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
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
                         handleDeleteClick();
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