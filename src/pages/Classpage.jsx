import { Container, Row, Col } from 'react-bootstrap';
import { semuaKelas } from '../data/index';
import Faqcomponents from '../components/Faqcomponents';

const Classpage = () => {
  return (
    <div className='kelas-page'>
      <div className='kelas min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center animate__animated animate__fadeInUp
              animate__delay-1s'>Semua Menu</h1>
              <p className='text-center animate__animated animate__fadeInUp
              animate__delay-1s'>Dessert and Pastry yang dibuat secara Homemade</p>
            </Col>
          </Row>
          <Row className='mt-4'>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} md={4} className='shadow rounded' data-aos='fade-up' data-aos-duration='1000' data-aos-delay={kelas.delay}>
                    <img src={kelas.image} alt='unsplash.com' className='w-100 mb-5 rounded-top'/>
                    <div className='star mb-2 px-3'>
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <h5 className='mb-5 px-3'>{kelas.title}</h5>
                    <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                      {/* <p className='m-0 text-primary fw-bold'>{kelas.price}</p> */}
                      <button className='btn rounded-1' style={{ backgroundColor: '#c0915e', color: 'white' }}>Beli Menu</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <Faqcomponents/>
    </div>
  );
}

export default Classpage;
