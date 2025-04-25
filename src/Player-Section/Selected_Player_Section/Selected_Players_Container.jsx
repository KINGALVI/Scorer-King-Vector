import React from 'react';
import PropTypes from 'prop-types';
import Selected_Players_Card from './Selected_Players_Card';
import { Col, Row } from 'react-bootstrap';

const Selected_Players_Container = ({ AllSelectedPlayer }) => {
    // console.log(AllSelectedPlayer)
    return (
        <>

            <center><h3>Total Selected Players is : {AllSelectedPlayer.length}</h3></center>

            <Row className="g-0" xs={1} md={2}>
                {AllSelectedPlayer.map((SelectedPlayer, idx) => (
                    <Col key={idx}>
                        <Selected_Players_Card key={idx} SelectedPlayer={SelectedPlayer}></Selected_Players_Card>
                    </Col>
                ))}
            </Row>

        </>
    );
};

Selected_Players_Container.propTypes = {

};

export default Selected_Players_Container;