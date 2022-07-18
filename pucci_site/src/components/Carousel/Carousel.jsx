import Carousel from 'react-bootstrap/Carousel';
import MonogramHarness from './../../assets/images/products/monogram-harness.jpg';
import CorgiSofa from './../../assets/images/products/gucci-sofa-corgi.jpg';
import GucciPets from './../../assets/images/products/gucci-pets.png'
import BlueCat from './../../assets/images/products/blue-cat.jpg'

import "./Carousel.css";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MonogramHarness}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>NEW IN: PET COLLECTION</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CorgiSofa}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>NEW IN: PET COLLECTION</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BlueCat}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>NEW IN: PET COLLECTION</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GucciPets}
          alt="Fourth slide"
        />

        <Carousel.Caption>
        <h3>NEW IN: PET COLLECTION</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}

export default CarouselFade;