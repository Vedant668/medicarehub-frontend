import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function PaymentGateway() {

    const [fees, setFees] = useState("1000");

    const handleChange = (e) => {
        setFees(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
       
        console.log("Payment started");
        console.log(fees);




            const url='http://localhost:9090/paymentGateway';

            try {
                // Send the payment request to the server using Axios
                const response = await axios.post(url, { fees });
                console.log("Payment successful");
                console.log(response.data); // Log the response from the server
            } catch (error) {
                console.error("Payment failed");
                console.error(error); // Log any errors that occur during the request
            }


    }

    return (
        <div>
            <Col lg={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Fees</b></Form.Label>
                        <Form.Control disabled type="text" placeholder="1000" name="fees" value={fees} onChange={handleChange}/>
                    </Form.Group>
                    <Button style={{backgroundColor:"rgb(0,102,102)"}} type="submit">
                        Pay
                    </Button>
                </Form>
            </Col>
        </div>
    );
}
