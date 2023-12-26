// import { useContext, useState } from "react"
// import { ApplicationContext } from "../context/context";
// import { loginHandle } from "../utils/authAction";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import React from 'react';
// import "./Login.css";


// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBInput,
//     MDBCardBody,
//     MDBCard
//   }
//   from 'mdb-react-ui-kit';




// const Login= ()=> {
//     const navigate = useNavigate();
//     const [userData,setUserData] = useState({
//         email: "",
//         password: "",
//     });
//     const {setCurrentUser} =  useContext(ApplicationContext);

//     const [error, setError] = useState("");

//     const handleUserInfoChange = (e) =>{
//         setUserData({...userData,[e.target.name]:e.target.value});
//     };

//     const handleOnLogin = async () => {
//         try {
//             setError("");
//             const {email,password}= userData;
//             if(!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
//                 setError("Enter a valid email");
//                 return;
//             }

//             if(!password){
//                 setError("Enter a valid password");
//                 return;
//             }

//             let response = await loginHandle(userData);
//             if(response.status){
//                 setCurrentUser({
//                     first_name: response?.data?.first_name,
//                     last_name: response?.data?.last_name,
//                     phone_number: response?.data?.phone_number,
//                     type: response?.data?.type,
//                     email: response?.data?.email,
//                     token: response?.data?.token,
//                     _id: response?.data?._id,
//                     isLoggedIn: true,
//                   });
          
//                   localStorage.setItem("first_name", response?.data?.first_name);
//                   localStorage.setItem("last_name", response?.data?.last_name);
//                   localStorage.setItem("phone_number", response?.data?.phone_number);
//                   localStorage.setItem("type", response?.data?.type);
//                   localStorage.setItem("email", response?.data?.email);
//                   localStorage.setItem("_id", response?.data?._id);
//                   localStorage.setItem("token", JSON.stringify(response?.data?.token));
//                   localStorage.setItem("isLoggedIn", true);

//                 toast.success("User login successful");
//                 navigate("/home");
//             }
//         }catch(err){
//             console.log(err);
//             setError(err?.response?.data?.message|| "something went wrong");
//         }
//     };

//     const onKeyDown = (e) => {
//         const code  = e.keyCode?e.keyCode:e.which;
//         if(code == 13){
//             e.preventDefault();
//             handleOnLogin();
//         }
//     };

//     return(
//         <>
//             <MDBContainer fluid>

// <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//   <MDBCol col='12'>

//     <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//       <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//         <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//         <p className="text-white-50 mb-5">Please login here</p>

//         <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address'  name="email" type='email' size="lg" value={userData.email} id="email" onChange={handleUserInfoChange} onKeyDown={onKeyDown}/>


//         <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' type='password' size="lg" name="password"
//                             id="password"
//                             value={userData.password}
//                             onChange={handleUserInfoChange}
//                             onKeyDown={onKeyDown}/>
//         {error && error === "Enter a valid password"?(
//                                 <div style={{color:"red",fontSize:"14px"}}>
//                                     <p>Password must be :</p>
//                                     <li>at least 8 character long</li>
//                                     <li>at least 1 symbol</li>
//                                     <li>at least 1 lower case</li>
//                                     <li>at least 1 upper case</li>
//                                     </div>
//                             ):null}

//         <div>
//         <MDBBtn className='fw-bold mx-2 px-5' color='white' size='lg' style={{ visibility: 'visible' }} type="submit" onClick={handleOnLogin}>
//                     Login
//         </MDBBtn>
//         </div>

//         {/* <div className='d-flex flex-row mt-3 mb-5'>
//           <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='facebook-f' size="lg"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='twitter' size="lg"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='google' size="lg"/>
//           </MDBBtn>
//         </div> */}

//         <div>
//           <p className="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>

//         </div>
//       </MDBCardBody>
//     </MDBCard>

//   </MDBCol>
// </MDBRow>

// </MDBContainer>
//         </>
//     );
// };

// export default Login;