import { Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "./AllCss.css"; 

export function Clinispecial() {
   
   return (
      <Container className="Clinispecial">
      <section className="section section-specialities">
         <div className="container-fluid">
            <div className="section-header text-center">
               <h2>Clinic and Specialties</h2>
               <p className="sub-title">Find experienced doctors across all specialties</p><br></br>
            </div>
            <div className="row justify-content-center">
               <div className="col-md-10">
                  <div className="specialities d-flex justify-content-around">
                     <a href="#">
                        <div className="speicality-img" >
                           <img src="https://www.quickobook.com/assets/img/specialities/general_physician.png" className="img-fluid" alt="General Physician" />       
                        </div>
                        <p>General Physician</p>
                     </a>

                     <a>
                     <div className="speicality-img">
                     <LinkContainer to="/neuro"><img src="https://www.quickobook.com/assets/img/specialities/specialities-02.png" className="img-fluid" alt="Neurology" /></LinkContainer>
                     
                     </div>
                     <p>Neurology</p>
                     </a>
                     
                    

                     <a>
                        <div className="speicality-img">
                        <LinkContainer to="/urolo">
                          <img src="https://www.quickobook.com/assets/img/specialities/specialities-01.png" className="img-fluid" alt="Urology" />
                         </LinkContainer>  
                        </div>
                        <p>Urology</p>
                     </a>

                     <a >
                        <div className="speicality-img">
                         <LinkContainer to="/ortho">
                           <img src="https://www.quickobook.com/assets/img/specialities/specialities-03.png" className="img-fluid" alt="Orthopedic" />
                           </LinkContainer>
                        </div>
                        <p>Orthopedic</p>
                     </a>

                     <a href="#" >
                        <div className="speicality-img">
                           <img src="https://www.quickobook.com/assets/img/specialities/specialities-04.png" className="img-fluid" alt="Cardiologist" />
                           
                        </div>
                        <p>Cardiologist</p>
                     </a>
                     <a href="#" >
							<div class="speicality-img">
								<img src="https://www.quickobook.com/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Dentist"/>
								
							</div>	
							<p>Dentist</p>
						</a>
				
                  </div>
               </div>
            </div>
         </div>
      </section></Container>
   );
}
