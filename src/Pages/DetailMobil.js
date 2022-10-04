import Footer from "../Components/Footer";
import { Offcanvas, Navbar, Nav, Container, Form, Row, Col, FormGroup } from 'react-bootstrap';
import { Input, Label } from "reactstrap";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const DetailMobil = () => {

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };
    const [ detail, setDetail ] = useState({});
    const [ carDetail, setCarDetail ] = useState(false);

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/{id}`)
        .then((res) => setDetail(res.data))
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setCarDetail(true);
    }, []);

    return (
        <>
        <div className="header2">
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
        ))};
        </div>
            <Form> 
            <Row>
                <Col>
                    <FormGroup className='formcari'>
                        <Label>
                        Nama Mobil
                        </Label>
                        <Input 
                        placeholder="Ketik nama/tipe mobil"
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup className='formcari'>
                        <Label>Kategori</Label>
                        <select>
                            <option disabled selected option>Masukan Kapasitas Mobil</option>
                            <option>2-4 orang</option>
                            <option>4-6 orang</option>
                            <option>6-8 orang</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className='formcari'>
                        <Label for="examplePassword">Harga</Label>
                        <select>
                            <option disabled selected option>Masukan Harga Sewa per Hari</option>
                            <option>Rp.400.000</option>
                            <option>Rp.400.000-Rp.600.000</option>
                            <option>Rp.400.000</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className='formcari'>
                        <Label for="examplePassword">
                        Status
                        </Label>
                        <select>
                        <option>Disewa</option>
                        <option>Tidak Disewa</option>
                        </select>
                </FormGroup> 
                </Col>
                <Col>
                    <button><strong>Cari Mobil</strong></button>
                </Col>
            </Row>
        </Form>

        {!!Object.keys(detail).length ? (
            <div className="detail-container my-5">
                <div className="row">
                    <div className="col-8">
                        <div className="detail-card">
                            <strong>
                                <h6><strong>Tentang Paket</strong></h6><br />
                                <h6><strong>Include</strong></h6> <br/>
                                <ul>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <br />
                                <h6><strong>Exclude</strong></h6><br/>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>ika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <Accordion flush open={open} toggle={toggle}>
                                    <AccordionItem>
                                    <AccordionHeader targetId="1"><h6><strong>Refund, Reschedule, Overtime</strong></h6></AccordionHeader>
                                    <AccordionBody accordionId="1">
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                    </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </strong>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="detail-img">
                            <img src={detail.image}/>
                            <div className="dcard-content">
                                <h6><strong>{detail.name}</strong></h6>
                                <p>{detail.category}</p>
                                <div className="space-between">
                                    <p><strong>Total</strong></p>
                                    <p><strong>Rp{detail.price}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <p></p>
        )}

        <Footer />
        </>
    );
};

export default DetailMobil;
