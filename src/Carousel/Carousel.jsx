// 🔹 Importing React for building component-based UI and handling rendering
import React from 'react';

// 🔹 Importing Bootstrap components for styling and layout
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            {/* 🔹 Main card container for the carousel */}
            <Card className="bg-dark text-white shadow-lg m-5" style={{ borderRadius: '10px' }}>

                {/* 🔹 Background image with dark overlay effect */}
                <div className='d-flex justify-content-center align-items-center'>
                    <Card.Img
                        className='w-100 h-100'  // ✅ Ensures full coverage
                        src={Professional_Players}
                        alt="Card image"
                        style={{ filter: 'brightness(35%)', opacity: 0.8 }} // ✅ Darkens the background for contrast
                    />
                </div>

                {/* 🔹 Overlay content on top of the background image */}
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                    <div>

                        {/* 🔹 Title and description */}
                        <div className='text-center pb-3'>
                            <Card.Title>
                                <h1><b>Assemble Your Ultimate Professional Scorer Team!</b></h1>
                            </Card.Title>
                            <br />
                            <Card.Text>
                                Build your dream football squad and take control of the ultimate team selection! <br />
                                From legendary scorers to rising stars, manage your picks, optimize player performance, <br />
                                and create the strongest lineup within your budget. Choose wisely, strategize effectively, <br />
                                and lead your team to victory on the field!
                            </Card.Text>
                        </div>

                        <br />

                        {/* 🔹 Button to claim free in-game credits */}
                        <div className='d-flex justify-content-center'>
                            <Button variant="outline-light m-1" onClick={handelSetcoin}>
                                <b>Claim Free Credit</b>
                            </Button>
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