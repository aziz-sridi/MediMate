import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/medicament.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["how can we help you"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to medica+</span>
                  <h1>{`Hi There`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "how can we", "help you", "today" ]'><span className="wrap">{text}</span></span></h1>
                  <p>- find the medications you need <br></br>- stay on top of refills<br></br> - manage your healthcare needs with medication reminders <br></br>- appointment scheduling</p>
                  <HashLink to='/login'>
                    <button className="ConnectButton" onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink >
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
