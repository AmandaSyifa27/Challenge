import { Offcanvas, Navbar, Nav, Container, Form, Row, Col, FormGroup } from 'react-bootstrap';
import Footer from "../Components/Footer";
import 'semantic-ui-react'
import { Input, Label } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarCard from '../Components/CarCard';

    const SearchPage = (props) => {

        const [search, setSearch] = useState()
        const [data, setData] = useState()
        const [input, setInput] = useState()

        const handleChange = (e) => {
            setSearch(e.target.value);

        };

   

        const handleSubmit = () => {
            setData([]);
        }

        useEffect(() => {
            axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car`)
            .then((res) => setInput(res.data))
            .catch((err) => console.log(err));
        })

        return (
            <div>
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
                                <Navbar.Offcanvas
                                // id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                >
                                <Offcanvas.Header closeButton>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="side-bar justify-content-end flex-grow-1 pe-3 color-black">
                                    <Nav.Link href="#Our_Services" >Our Service</Nav.Link>
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
                        </div>
                        <div className="imgcar">
                            <img src="img_car2.png" alt="" />
                        </div>
                    </div>
                </header>   
                <Form onSubmit={handleSubmit}> 
                    <Row>
                        <Col>
                            <FormGroup className='formcari'>
                                <Label>
                                Nama Mobil
                                </Label>
                                <Input onChange={(e) => handleChange(e)} 
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
                                <option>Tersedia</option>
                                </select>
                        </FormGroup> 
                        </Col>
                        <Col>
                            <button onClick={handleSubmit}><strong>Cari Mobil</strong></button>
                        </Col>
                    </Row>
                </Form>
                <Footer />
            </div>
        );
    };


export default SearchPage;