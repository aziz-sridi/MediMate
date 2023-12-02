import { Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const AppointmentCard = ({ title, description, imgUrl,button }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="appo-imgbx">
        <img src={imgUrl} />
        <div className="appo-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <HashLink to="/addappointment">
          <button> {button}</button>
          </HashLink>
        </div>
      </div>
    </Col>
  )
}
