import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Professional_Players from "../../public/Logo-&-OtherPicture/Carousel-Picture.jpg";
import PropTypes from 'prop-types';

const Carousel = ({ handelSetcoin }) => {

    return (
        <>
            <Card className="bg-dark text-white shadow-lg m-5" style={{ borderRadius: '10px' }}>

                <div className='d-flex justify-content-center align-items-center'>
                    <Card.Img
                        className='w-100 h-100'
                        src={Professional_Players}
                        alt="Card image"
                        style={{ filter: 'brightness(35%)', opacity: 0.8 }}
                    />
                </div>

                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                    <div>

                        <div className='text-center pb-3'>
                            <Card.Title>
                                <h1><b>Assemble Your Ultimate Professional Scorer Team !</b></h1>
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

                        <div className='d-flex justify-content-center'>
                            <Button onClick={handelSetcoin} variant="outline-light m-1"><b>Claim Free Credit</b></Button>
                        </div>

                    </div>
                </Card.ImgOverlay>

            </Card>
        </>
    );

};

Carousel.propTypes = {

};

export default Carousel;