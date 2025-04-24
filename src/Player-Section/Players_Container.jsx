import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import All_Player_Card from './All_Players_Card';

const Players_Container = ({ API, handelRemovecoin }) => {

    return (
        <>
            <center><h3>Available Players : {API.length}</h3></center>

            <Row className="g-0" xs={1} md={2}>
                {
                    API.map((Player, idx) => (
                        <Col key={idx}>
                            <All_Player_Card key={idx} Player={Player} handelRemovecoin={handelRemovecoin}></All_Player_Card>
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