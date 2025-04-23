import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { TbCoinFilled } from "react-icons/tb";
import TopLogo from "../../public/Logo-&-OtherPicture/Top-King-Vector.png";
import PropTypes from 'prop-types';
function Header({ Coin }) {
    return (

        <Navbar expand="lg" className="bg-body-tertiary shadow-lg bg-white rounded" >

            <Container>

                <Navbar.Brand href="#"><Image style={{ maxHeight: '150px' }} src={TopLogo} alt="Football Logo" ></Image><b>Scorer King Vector</b></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">

                    <Nav className="mx-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='text-center' href="#action1"><b>Home</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action2"><b>Fixture</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action3"><b>Teams</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action4"><b>Schedules</b></Nav.Link>
                    </Nav>

                    <center>
                        <b style={{ border: '3px solid black', padding: '12.5px', borderRadius: '10px', }}>{Coin} Coin <TbCoinFilled size={35} color="goldenrod" /> </b>
                    </center>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

Header.propTypes = {

};

export default Header;