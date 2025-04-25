import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Selected_Players_Card = ({ SelectedPlayer }) => {
    return (
        <>
            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5 " style={{ width: '25rem', borderRadius: '10px' }}>

                    <Card.Img variant="top" src={SelectedPlayer.player_image} />

                    <Card.Body>

                        <Card.Title>{SelectedPlayer.player_name}</Card.Title>

                        <hr />

                        <h5><b>Playing Style</b></h5>
                        {SelectedPlayer.player_behavior.map((player_behavior, idx) => <li key={idx}>{player_behavior}</li>)}

                        <hr />

                        <div className="d-flex align-items-center pe-2">
                            <b>Player Nationality : {SelectedPlayer.player_nationality}</b>
                        </div>

                    </Card.Body>

                </Card>
            </section>
        </>
    );
};

Selected_Players_Card.propTypes = {

};

export default Selected_Players_Card;