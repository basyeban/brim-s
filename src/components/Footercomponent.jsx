import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footercomponent() {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 class
            fw-bold>Brimso_Solo</h3>
            <p className="desc">Menawarkan berbagai pilihan dessert dan pastry homemade, kami telah berdiri sejak 2020 dan menyediakan hampers istimewa untuk berbagai acara spesial.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp">
                  <p className="m-1"> +62 857-0769-9834/+62 857-0775-2877</p>
                </i>
              </Link>
            </div>
            </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Menu</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Outlet</Link>
          </Col>
          <Col lg="4" className="mt-g-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribe">
            <input type="text" placeholder="Subscribe"></input>
            <button className='btn rounded-end rounded-0' style={{ backgroundColor: '#c0915e', color: 'white' }} >Subscribe</button>
            </div>
            <div className="social mt-3">
              <a href="https://wa.me/6285707699834" class="fa-brands fa-whatsapp"></a>
              <a href="https://www.instagram.com/brimso_solo/" class="fa-brands fa-instagram"></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold"> Brimso_Solo </span>,
            All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footercomponent
