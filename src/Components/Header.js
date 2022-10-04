import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {

    return (
        <header>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <div className="logo">
                            <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="34" fill="#0D28A6"/>
                            </svg>
                        </div>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas className="navig"
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="side-bar justify-content-end flex-grow-1 pe-3 color-black">
                            <Nav.Link href="#Our_Services">Our Service</Nav.Link>
                            <Nav.Link href="#Why_Us">Why Us</Nav.Link>                            
                            <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                            <Nav.Link href="#FAQ">FAQ</Nav.Link>                     
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <div className="container1">
                <div className="article1">
                    <h1 className="a1"><strong>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</strong></h1>
                    <br />
                    <p className="a2"><strong>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</strong></p>
                <button className="a3" onClick={(e) => {
                    e.preventDefault(window.location.href="/search")
                }}><strong>Mulai Sewa Mobil</strong></button>
                </div>
                <div className="imgcar">
                    <img src="img_car2.png" alt="" />
                </div>
            </div>
        </header>   
    );
};

export default Header;