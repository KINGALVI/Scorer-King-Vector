import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import All_Players_Card from './All_Players_Card';
import Selected_Players_Container from '../Selected_Player_Section/Selected_Players_Container';

const Players_Container = ({ API, handelRemovecoin }) => {

    const [activeSection, setActiveSection] = useState("available");


    const [AllSelectedPlayer, setSelectedPlayer] = useState([])

    const handelSelectedPlayer = (AllPlayer) => {
        setSelectedPlayer([...AllSelectedPlayer, AllPlayer])
    }

    return (
        <>

            <section className="d-flex justify-content-center mb-3">
                <Button
                    className="mx-2"
                    variant={activeSection === "available" ? "primary" : "outline-primary"}
                    onClick={() => setActiveSection("available")}>
                    {API.length} Available Players
                </Button>

                <Button
                    className="mx-2"
                    variant={activeSection === "selected" ? "success" : "outline-success"}
                    onClick={() => setActiveSection("selected")}>
                    {AllSelectedPlayer.length} Selected Players
                </Button>
            </section>

            {activeSection === "available" ? (
                <section>
                    <center><h3>Total Available Player is : {API.length}</h3></center>
                    <Row className="g-0" xs={1} md={2}>
                        {API.map((AllPlayer, idx) => (
                            <Col key={idx}>
                                <All_Players_Card key={idx} AllPlayer={AllPlayer} handelRemovecoin={handelRemovecoin} handelSelectedPlayer={handelSelectedPlayer} />
                            </Col>
                        ))}
                    </Row>
                </section>
            ) : (
                <Selected_Players_Container AllSelectedPlayer={AllSelectedPlayer}></Selected_Players_Container>
            )}

        </>
    );
};

Players_Container.propTypes = {
    API: PropTypes.array.isRequired,
    handelRemovecoin: PropTypes.func.isRequired,
};

export default Players_Container;