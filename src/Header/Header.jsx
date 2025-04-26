// 🔹 Importing React for component structure and rendering
import React from 'react';

// 🔹 Importing Bootstrap components for responsive navigation bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

// 🔹 Importing an icon for the coin display
import { TbCoinFilled } from "react-icons/tb";

// 🔹 Importing the logo for the header section
import TopLogo from "../../public/Logo-&-OtherPicture/Top-King-Vector.png";

// 🔹 Importing PropTypes for type validation to enforce strict prop checks
import PropTypes from 'prop-types';

/**
 * Header Component:
 * 
 * - Displays a navigation bar with links to different sections.
 * - Shows the user's current coin balance at the top.
 * - Uses React Bootstrap for styling and responsiveness.
 * - Contains a logo and dynamic coin display for a professional UI.
 */

function Header({ Coin }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg bg-white rounded">

            {/* 🔹 Container ensures proper layout and spacing */}
            <Container>

                {/* 🔹 Navbar brand: Displays the logo and title */}
                <Navbar.Brand href="#">
                    <Image
                        style={{ maxHeight: '150px' }}
                        src={TopLogo}
                        alt="Football Logo"
                    />
                    <b>Scorer King Vector</b>
                </Navbar.Brand>

                {/* 🔹 Navbar toggle for mobile responsiveness */}
                <Navbar.Toggle aria-controls="navbarScroll" />

                {/* 🔹 Collapsible navigation menu */}
                <Navbar.Collapse id="navbarScroll">

                    {/* 🔹 Navigation links for different sections */}
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='text-center' href="#action1"><b>Home</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action2"><b>Fixture</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action3"><b>Teams</b></Nav.Link>
                        <Nav.Link className='text-center' href="#action4"><b>Schedules</b></Nav.Link>
                    </Nav>

                    {/* 🔹 Coin display with icon */}
                    <center>
                        <b
                            style={{
                                border: '3px solid black',
                                padding: '12.5px',
                                borderRadius: '10px'
                            }}
                        >
                            {Coin} Coin <TbCoinFilled size={35} color="goldenrod" />
                        </b>
                    </center>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

/**
 * PropTypes validation:
 * - Ensures the `Coin` prop is always provided as a number.
 * - Prevents potential bugs by enforcing strict data types.
 * - Helps other developers understand the expected props for this component.
 */
Header.propTypes = {
    Coin: PropTypes.number.isRequired,  // ✅ `Coin` represents the user's in-game currency balance
};

export default Header;