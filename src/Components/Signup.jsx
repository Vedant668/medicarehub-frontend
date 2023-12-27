// import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./AllCss.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Signup() {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   pnone_number: "",
  //   city: "",
  //   age: "",
  //   gender: "",
  //   type : "",
  //   password: "",
  // });
  // const navigate = useNavigate();

  // const [error, setError] = useState("");

  // const { currentUser, setCurrentUser } = useContext(ApplicationContext);
  // console.log("current user", currentUser);

  // const handleOnSignUp = async () => {
  //   try {
  //     setError("");
  //     const { name, email, password } = userData;
  //     if (!name) {
  //       setError("Enter a valid name");
  //       return;
  //     }
  //     if (!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
  //       setError("Enter a valid email");
  //       return;
  //     }
  //     if (
  //       !password ||
  //       !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
  //     ) {
  //       setError("Enter a valid password");
  //       return;
  //     }

  //     let response = await signUp(userData);
  //     if (response.status) {
  //       console.log('came here11',currentUser)
  //       setCurrentUser({
  //         name: response?.data?.first_name,
  //         phone_number: response?.data?.phone_number,
  //         type: response?.data?.type,
  //         email: response?.data?.email,
  //         token: response?.data?.token,
  //         _id: response?.data?._id,
  //         isLoggedIn: true,
  //       });

  //       localStorage.setItem("first_name", response?.data?.first_name);
  //       localStorage.setItem("phone_number", response?.data?.phone_number);
  //       localStorage.setItem("type", response?.data?.type);
  //       localStorage.setItem("email", response?.data?.email);
  //       localStorage.setItem("_id", response?.data?._id);
  //       localStorage.setItem("token", JSON.stringify(response?.data?.token));
  //       localStorage.setItem("isLoggedIn", true);


  //     console.log('came hhere 44')
  //   } catch (err) {
  //     console.log("error", err);
  //     return;
  //   }
  // };

  // console.log('current User0',currentUser)

  // const handleUserInfoChange = (e) => {
  //   setUserData({ ...userData, [e.target.name]: e.target.value });
  // };

  // const onKeyDown = (e) => {
  //   const code = e.keyCode ? e.keyCode : e.which;
  //   if (code === 13) {
  //     e.preventDefault();
  //     handleOnSignUp();
  //   }
  // };

  return (
    <>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
    Healing Hands <br />
      <span style={{color: 'hsl(218, 81%, 75%)'}}>Your Health, Our Priority</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
      quibusdam tempora at cupiditate quis eum maiores libero
      veritatis? Dicta facilis sint aliquid ipsum atque?
    </p>

  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'saturate(200%) blur(25px)' }}>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='12'>
            <MDBInput wrapperClass='mb-4 text-white' label='Name' id='Name' type='text'/>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4 text-white' label='Email' id='email' type='email' />
        
        <MDBRow>
        <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4 text-white' label='Phone Number' id='phone_number' type='number'/>
        </MDBCol>
        <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4 text-white' label='City' id='city' type='text'/>
        </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col='6'>
          <MDBInput wrapperClass='mb-4 text-white' label='Age' id='age' type='number'/>
          </MDBCol>

          <MDBCol col='6'>
          <div className='mb-4'>
              <select className='form-select'  id='gender' >
                <option value='' disabled selected>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            <label className='form-label text-white'>Gender</label>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4 text-white' label='Create Your Password' id='password' type='password'/>
        

        <div className='mb-4'>
                <label className='form-label text-white'>Register as : </label>
                <div className='form-check form-check-inline text-white'>
                  <input
                    className='form-check-input text-white text-white'
                    type='radio'
                    id='userRadio'
                    value='user'
                    name="userType"
                  />
                  <label className='form-check-label' htmlFor='userRadio'>Patient</label>
                </div>
                <div className='form-check form-check-inline text-white'>
                  <input
                    className='form-check-input text-white'
                    type='radio'
                    id='doctorRadio'
                    value='doctor'
                    name="userType"
                  />
                  <label color='success'className='form-check-label text-white' htmlFor='doctorRadio'>Doctor</label>
                </div>
              </div>

        <MDBBtn color='success' className='w-100 mb-4' size='md' type="submit" >sign up</MDBBtn>

        <div className="text-center">

            <p>
              Already have an account?{" "}
              <Link to="/login" className="button-link">
                Sign in
              </Link>
              .
            </p>

          

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
    </>
  );
}

export default Signup;