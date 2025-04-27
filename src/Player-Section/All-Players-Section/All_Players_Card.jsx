// 🔹 Importing React for component rendering
import React from "react";

// 🔹 Importing Toastify for showing notifications when players are selected or errors occur
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔹 Importing Bootstrap components for styling
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// 🔹 Importing PropTypes for type validation
import PropTypes from "prop-types";

/**
 * All_Players_Card Component:
 * 
 * - Displays player details including image, name, stats, and nationality.
 * - Allows users to select a player, ensuring they have enough coins.
 * - Uses Toastify for error messages when selecting a player.
 * - Uses Bootstrap for card styling.
 *
 * Props:
 * - `AllPlayer` (object): Represents a single player and their details.
 * - `handelRemovecoin` (function): Deducts coins when a player is selected.
 * - `handelSelectedPlayer` (function): Adds the selected player to the list.
 * - `AllSelectedPlayer` (array): Stores already selected players.
 * - `Coin` (number): User's current coin balance.
 */

const All_Players_Card = ({ AllPlayer, handelRemovecoin, handelSelectedPlayer, AllSelectedPlayer, Coin }) => {

    // 🔹 Destructuring player properties from the `AllPlayer` object
    const { player_image, player_name, player_information, player_behavior, player_nationality, player_weight, player_age } = AllPlayer;

    /**
     * Handles the selection of a player.
     * - Checks if the user has enough coins.
     * - Prevents duplicate selections.
     * - If valid, adds player and deducts coins.
     */
    const handelSingelPlayer = () => {

        // 🔹 Check if the player is already selected
        const isPlayerAlreadyExist = AllSelectedPlayer.some(Selected => Selected.player_name === AllPlayer.player_name);

        // 🔹 Error: if the User has 0 coins or the user tries to select a selected player
        if (Coin === 0 && !isPlayerAlreadyExist) {
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

        // 🔹 Error: if Player is already in the selected list
        if (isPlayerAlreadyExist) {
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

        // 🔹 Success: Select the player and remove coins
        handelSelectedPlayer(AllPlayer);
        handelRemovecoin();
    };

    return (
        <>
            {/* 🔹 Player card container */}
            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5" style={{ width: "25rem", borderRadius: "10px" }}>

                    {/* 🔹 Player Image */}
                    <Card.Img variant="top" src={player_image} />

                    <Card.Body>

                        {/* 🔹 Player Name */}
                        <Card.Title>{player_name}</Card.Title>

                        {/* 🔹 Player Information */}
                        <Card.Text>{player_information}</Card.Text>

                        <hr />

                        {/* 🔹 Playing Style Section */}
                        <h4><b>Playing Style</b></h4>
                        {player_behavior.map((behavior, idx) => <li key={idx}>{behavior}</li>)}

                        <hr />

                        {/* 🔹 Player Details (Nationality, Weight, Age) */}
                        <div className="d-grid pb-2">
                            <span><b>Player Nationality: {player_nationality}</b></span>
                            <span><b>Player Weight: {player_weight}</b></span>
                            <span><b>Player Age: {player_age}</b></span>
                        </div>

                        {/* 🔹 Choose Player Button */}
                        <Button variant="success" onClick={handelSingelPlayer}>
                            <b>Choose Player</b>
                        </Button>

                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

/**
 * PropTypes validation:
 * - Ensures components receive the correct data types.
 * - Prevents errors by enforcing strict type validation.
 */
All_Players_Card.propTypes = {
    AllPlayer: PropTypes.object.isRequired,              // ✅ Represents the player being displayed
    handelRemovecoin: PropTypes.func.isRequired,        // ✅ Function to deduct coins when selecting a player
    handelSelectedPlayer: PropTypes.func.isRequired,    // ✅ Function to add the selected player to the list
    AllSelectedPlayer: PropTypes.array.isRequired,      // ✅ Array storing all selected players
    Coin: PropTypes.number.isRequired,                  // ✅ User's current coin balance
};

export default All_Players_Card;