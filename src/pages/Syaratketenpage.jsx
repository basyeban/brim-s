import { Container, Row, Col } from 'react-bootstrap'
import Faqcomponents from '../components/Faqcomponents'

const Syaratketenpage = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className='syarat-ketentuan min-vh-100'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Outlet Kami</h1>
            <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Outlet</p>
          </Col>
        </Row>
        <Row className='pt-5'>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>Lantai basement GrandMall Surakarta</h4>
            <p>Outlet kami saat ini hanya berlokasi di lantai basement GrandMall Surakarta. Dengan lokasi yang strategis, kami berharap dapat melayani pelanggan dari berbagai area di sekitar Surakarta.

GrandMall Surakarta terletak di Jalan Slamet Riyadi No. 273, di kawasan Penumping, Laweyan. Lokasi ini mudah dijangkau dan menjadi salah satu pusat perbelanjaan yang ramai dikunjungi di kota Surakarta.

Kami berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan yang berkunjung ke outlet kami. Dengan suasana yang nyaman dan produk berkualitas, kami berharap pengalaman berbelanja Anda di outlet kami akan selalu memuaskan.</p>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>Festival Culinary</h4>
            <p>
Selain memiliki tempat usaha yang tetap, kami juga menyediakan layanan penjualan keliling di area Surakarta. Hal ini memberi fleksibilitas bagi kami untuk menjangkau pelanggan di berbagai lokasi dan memudahkan mereka mendapatkan produk kami.

Kami rutin berpartisipasi dalam berbagai event dan acara yang diadakan di Surakarta. Keikutsertaan kami dalam event-event ini membantu kami lebih dekat dengan pelanggan serta memperkenalkan produk kami kepada lebih banyak orang.

Dengan berjualan di event-event tersebut, kami berharap dapat memberikan pengalaman yang lebih personal kepada pelanggan. Kehadiran kami di berbagai acara memungkinkan pelanggan untuk menikmati produk kami secara langsung, kapan pun mereka berkunjung.</p>
          </Col>
        </Row>
      </Container>
      </div>
      <Faqcomponents />
    </div>
  )
}

export default Syaratketenpage
