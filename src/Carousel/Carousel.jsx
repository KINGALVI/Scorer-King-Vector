// 🔹 Importing React for building component-based UI and handling rendering
import React from 'react';

// 🔹 Importing Bootstrap components for styling and layout
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// import Carousel from 'react-bootstrap/Carousel';

// 🔹 Importing the image for the carousel section to enhance the visual appeal
import Professional_Players from "../../public/Logo-&-OtherPicture/Carousel-Picture.jpg";

// 🔹 Importing PropTypes for type validation to ensure correct prop data
import PropTypes from 'prop-types';

/**
 * Carousel Component:
 *
 * - Displays a promotional banner encouraging users to build their football dream team.
 * - Contains a background image for aesthetics and branding.
 * - Provides a button to claim free in-game credits.
 * - Uses Bootstrap `Card` and `Button` for styling and layout.
 *
 * Props:
 * - `handelSetcoin` (function): Increases the user's coin balance when clicked.
 */

const Carousel = ({ handelSetcoin }) => {
    return (
        <>
            <br />

            {/* 🔹 Main card container for the carousel */}
            <Card className="bg-dark text-white m-2" style={{ borderRadius: '10px' }}>

                {/* 🔹 Background image with dark overlay effect */}
                <div className='d-flex justify-content-center align-items-center'>
                    <Card.Img
                        className='w-100 h-100'  // ✅ Ensures full coverage
                        src={Professional_Players}
                        alt="Card image"
                        style={{ filter: 'brightness(35%)', opacity: 0.8 }} /* ✅ Darkens the background for contrast */ />
                </div>

                {/* 🔹 Overlay content on top of the background image */}
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>

                    <div>

                        {/* 🔹 Title and description */}
                        <div className='text-center pb-2'>

                            <Card.Title>

                                {/* 🔹 This version appears only on medium and larger screens */}
                                <h1 className="d-none d-md-block pb-3"><b>Assemble Your Ultimate Professional Scorer Team !</b></h1>

                                {/* 🔹 This version appears only on small screens */}
                                <h1 className="d-block d-md-none pt-2" style={{ fontSize: '20.5px' }}><b>Assemble Your Ultimate Professional Scorer Team !</b></h1>

                            </Card.Title>

                            <Card.Text>

                                {/* 🔹 This version appears only on medium and larger screens */}
                                <span className="d-none d-md-block pb-1">
                                    <b>
                                        Build your dream football squad and take control of the ultimate team selection !
                                        From <br /> legendary scorers to rising stars , manage your picks, optimize player performance ,
                                        and <br /> create the strongest lineup within your budget. Choose wisely, strategize effectively , <br />
                                        and lead your team to victory on the field !
                                    </b>
                                </span>

                                {/* 🔹 This version appears only on small screens */}
                                <span className="d-block d-md-none" style={{ fontSize: '11.5px' }}>
                                    Build your dream football squad and take control of the ultimate team selection!
                                    Fromlegendary scorers to rising stars, manage your picks, optimize player performance,
                                    and create the strongest lineup within your budget. Choose wisely, strategize effectively,
                                    and lead your team to victory on the field!
                                </span>

                            </Card.Text>

                        </div>

                        {/* 🔹 Button to claim free in-game credits */}
                        <div className='d-flex justify-content-center pt-2'>

                            {/* 🔹 This version appears only on medium and larger screens */}
                            <Button className="d-none d-md-block" variant="outline-light m-1" onClick={handelSetcoin}>
                                <b>Claim Free Credit</b>
                            </Button>

                            {/* 🔹 This version appears only on small screens */}
                            <span className="d-block d-md-none" style={{ paddingBottom: '8px' }}>
                                <Button variant="outline-light m-1" onClick={handelSetcoin}>
                                    <b style={{ fontSize: '10px', display: 'flex', alignItems: 'center' }}>Claim Free Credit</b>
                                </Button>
                            </span>

                        </div>

                    </div>

                </Card.ImgOverlay>

            </Card>
        </>
    );
};

/**
 * PropTypes validation:
 * - Ensures the `handelSetcoin` prop is passed as a function.
 * - Helps prevent errors caused by incorrect prop types.
 */
Carousel.propTypes = {
    handelSetcoin: PropTypes.func.isRequired, // ✅ Function to grant users free coins
};

export default Carousel;