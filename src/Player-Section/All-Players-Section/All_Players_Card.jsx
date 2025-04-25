import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const All_Players_Card = ({ AllPlayer, handelRemovecoin, handelSelectedPlayer, AllSelectedPlayer, Coin }) => {

    const { player_image, player_name, player_information, player_behavior, player_nationality, player_weight, player_age } = AllPlayer;

    const handelSingelPlayer = () => {

        const isPlayerAlreadyExist = AllSelectedPlayer.some(player => player.player_name === AllPlayer.player_name);

        if (Coin === 0 && isPlayerAlreadyExist === false) {
            toast.error("You don't have enough Coins. Please add Credit to purchase a player.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: "colored",
            });
            return;
        }



        if (isPlayerAlreadyExist === true) {
            toast.error("This player is already selected!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: "colored",
            });
            return;
        }
        else {
            handelSelectedPlayer(AllPlayer);
            handelRemovecoin();
        }

    };

    return (
        <section className="d-flex justify-content-center align-items-center">
            <Card className="bg-white text-dark shadow-lg m-5" style={{ width: "25rem", borderRadius: "10px" }}>
                <Card.Img variant="top" src={player_image} />
                <Card.Body>
                    <Card.Title>{player_name}</Card.Title>
                    <Card.Text>{player_information}</Card.Text>
                    <hr />
                    <h4><b>Playing Style</b></h4>
                    {player_behavior.map((behavior, idx) => <li key={idx}>{behavior}</li>)}
                    <hr />
                    <div className="d-grid pb-2">
                        <span><b>Player Nationality: {player_nationality}</b></span>
                        <span><b>Player Weight: {player_weight}</b></span>
                        <span><b>Player Age: {player_age}</b></span>
                    </div>
                    <Button variant="success" onClick={handelSingelPlayer}>
                        <b>Choose Player</b>
                    </Button>
                </Card.Body>
            </Card>
        </section>
    );
};

All_Players_Card.propTypes = {
    AllPlayer: PropTypes.object.isRequired,
    handelRemovecoin: PropTypes.func.isRequired,
    handelSelectedPlayer: PropTypes.func.isRequired,
    AllSelectedPlayer: PropTypes.array.isRequired,
    Coin: PropTypes.number.isRequired,
};

export default All_Players_Card;