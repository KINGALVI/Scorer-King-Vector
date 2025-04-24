import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const All_Players_Card = ({ Player, handelRemovecoin }) => {
    const { player_image, player_name, player_information, player_behavior, player_nationality, player_weight, player_age } = Player

    return (
        <>
            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5 " style={{ width: '25rem', borderRadius: '10px' }}>

                    <Card.Img variant="top" src={player_image} />

                    <Card.Body>

                        <Card.Title>{player_name}</Card.Title>

                        <Card.Text>{player_information}</Card.Text>

                        <hr />

                        {player_behavior.map((player_behavior, idx) => <li key={idx}>{player_behavior}</li>)}

                        <hr />

                        <div className="d-grid pb-2">

                            <span className="d-flex align-items-center pe-2">
                                <b>Player Nationality : {player_nationality}</b>
                            </span>

                            <span className="d-flex align-items-center pe-2">
                                <b>Player Weight : {player_weight}</b>
                            </span>

                            <span className="d-flex align-items-center pe-2">
                                <b>Player Age : {player_age}</b>
                            </span>

                        </div>

                        <Button variant="success" onClick={handelRemovecoin}><b>Choose Player</b></Button>

                    </Card.Body>

                </Card>
            </section>
        </>
    );

};

All_Players_Card.propTypes = {

};

export default All_Players_Card;