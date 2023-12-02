import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AppointmentCard } from "./AppointmentCard";
import hospital from "../assets/img/hospital.webp";
import button from "../assets/img/button.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

export const Appointments = () => {

  const Appointments = [
    {
      title: "Dr Aziz Sridi",
      description:<p>dentist 23/07/2023<br></br>11 AM<br></br> Sousse</p> ,
      imgUrl: hospital,
    },
    {
      title: "Dr Aziz Sridi",
      description: <p>dentist 23/07/2023<br></br>11 AM<br></br> Sousse</p> ,
      imgUrl: hospital,
    },
    {
      title: "Dr Aziz Sridi",
      description: <p>dermato 23/05/2023<br></br>10 AM<br></br> Sousse</p> ,
      imgUrl: hospital,
    },
    {
      title: "Dr Aziz Sridi",
      description: <p>emato 23/05/2023<br></br>10 AM<br></br> Sousse</p> ,
      imgUrl: hospital,
    },
    {
      title: "Dr Aziz Sridi",
      description: <p>psy 23/05/2023<br></br>10 AM<br></br> Sousse</p> ,
      imgUrl: hospital,
    },
   
    { 
       imgUrl: button,
      button:" Add",
    }
      
  ];
  
  return (
    <section className="appointment" id="appointment">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>doctor appointments</h2>
                <p>you can check / add doctor appointments at anytime </p>
                <Tab.Container id="appointments-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Appointments.map((appointment, index) => {
                            return (
                              <AppointmentCard
                                key={index}
                                {...appointment}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>nothing's here yet</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>nothing's here yet</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
