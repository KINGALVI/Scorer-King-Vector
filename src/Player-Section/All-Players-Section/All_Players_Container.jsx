import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import All_Players_Card from './All_Players_Card';
import Selected_Players_Card from '../Selected_Player_Section/Selected_Players_Container';

const Players_Container = ({ API, handelRemovecoin }) => {
    const [activeSection, setActiveSection] = useState("available");

    return (
        <>

            <section className="d-flex justify-content-end mb-3">
                <Button
                    variant={activeSection === "available" ? "primary" : "outline-primary"}
                    onClick={() => setActiveSection("available")}>
                    Available Players
                </Button>

                <Button
                    variant={activeSection === "selected" ? "success" : "outline-success"}
                    onClick={() => setActiveSection("selected")}>
                    Selected Players
                </Button>
            </section>

            {activeSection === "available" ? (
                <section>
                    <center><h3>Total Available Players is {API.length}</h3></center>
                    <Row className="g-0" xs={1} md={2}>
                        {API.map((Player, idx) => (
                            <Col key={idx}>
                                <All_Players_Card key={idx} Player={Player} handelRemovecoin={handelRemovecoin} />
                            </Col>
                        ))}
                    </Row>
                </section>
            ) : (
                <Selected_Players_Card></Selected_Players_Card>
            )}

        </>
    );
};

Players_Container.propTypes = {
    API: PropTypes.array.isRequired,
    handelRemovecoin: PropTypes.func.isRequired,
};

export default Players_Container;