import NavBarExpand from "../navBar/NavBarExpand";
import Button from "react-bootstrap/esm/Button";
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

const Dashboard = () => {
  return (

    <div id="dashboard-container">
      <header style={{ width: "100vw", height: "100%" }}>
        <NavBarExpand />
      </header>
      <div className="d-flex flex-column justify-content-center align-items-center vh-40 text-center" style={{
        backgroundImage: "linear-gradient(to bottom,rgb(33, 37, 41),rgb(255, 135, 70))",
        height: "75vh",
      }}>
        <h1 className="text-white">Tienda para autos</h1>
        <h4 className="text-white">Lavame</h4>
        <Button variant="outline-light">
          Ingresar
        </Button>
      </div>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg"
              alt="First slide"
              style={{ filter: "brightness(50%)" }}
            />
              

            <Carousel.Caption className="carousel-caption">
              <h1 className="text-white">Tienda para autos</h1>
              <h4 className="text-white">Lavame</h4>
              <Button variant="outline-light">
                Ingresar
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.autoplusdigital.com.ar/wp-content/uploads/2023/04/autos-2.jpg"
              alt="Second slide"
              style={{ filter: "brightness(50%)" }} />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NNC7TA7K2NG5HM2REZSAE244XE.jpg"
              alt="Third slide"
              style={{ filter: "brightness(50%)" }}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Dashboard;