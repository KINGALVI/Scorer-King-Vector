import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Single_Player_Card from './Single_Player_Card';

const Players_Container = ({ API }) => {

    return (
        <>
            <center><h3>Available Players : {API.length}</h3></center>

            <Row className="g-0" xs={1} md={2}>
                {
                    API.map((Player, idx) => (
                        <Col key={idx}>
                            <Single_Player_Card key={idx} Player={Player}></Single_Player_Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );

};

Players_Container.propTypes = {

};

export default Players_Container;