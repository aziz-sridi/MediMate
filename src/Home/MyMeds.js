import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import add from "../assets/img/addButton.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { HashLink } from 'react-router-hash-link';

export const MyMeds = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    } 
  };

  return (
    <section className="mymeds" id="mymeds">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="med-bx wow zoomIn">
                        <h2>your medications</h2>
                        <p>here you can keep track of your medications and how much is left in them</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme med-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>med1</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>med2</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>med3</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>med4</h5>
                            </div>
                            <div className="item addmed"> 
                            <HashLink to="addmed">
                              <button>
                              <img src={add} alt="Image" />
                              <h5>add a med</h5>
                                 </button>
                                 </HashLink>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
