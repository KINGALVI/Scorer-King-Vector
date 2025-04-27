// 🔹 Importing React for component-based rendering
import React from 'react';

// 🔹 Importing Bootstrap components for styling and layout
import Card from 'react-bootstrap/Card';

// 🔹 Importing delete icon for removing players
import { MdDeleteForever } from "react-icons/md";

// 🔹 Importing React state management for handling modal visibility
import { useState } from 'react';

// 🔹 Importing the Delete_Modal component for confirmation before removing a player
import Delete_Modal from './Delete_Modal';

// 🔹 Importing PropTypes for type validation
import PropTypes from 'prop-types';

/**
 * Selected_Players_Card Component:
 * 
 * - Displays an individual selected player's information.
 * - Shows a delete button that triggers a confirmation modal before removal.
 * - Uses Bootstrap for styling and card presentation.
 * - Implements React state to handle modal visibility.
 *
 * Props:
 * - `SelectedPlayer` (object): Represents the selected player.
 * - `handleRemovePlayer` (function): Handles the removal of a player from the selection.
 */

const Selected_Players_Card = ({ SelectedPlayer, handleRemovePlayer }) => {

    // 🔹 State to control the visibility of the delete confirmation modal
    const [show, setShow] = useState(false);

    /**
     * Opens the delete confirmation modal.
     */
    const handleOpen = () => setShow(true);

    /**
     * Closes the delete confirmation modal.
     */
    const handleClose = () => setShow(false);

    return (
        <>
            {/* 🔹 Player card container */}
            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5" style={{ width: '25rem', borderRadius: '10px' }}>

                    {/* 🔹 Player Image */}
                    <Card.Img variant="top" src={SelectedPlayer.player_image} />

                    <Card.Body>

                        {/* 🔹 Player Name */}
                        <Card.Title>{SelectedPlayer.player_name}</Card.Title>

                        <hr />

                        {/* 🔹 Playing Style Section */}
                        <h5><b>Playing Style</b></h5>
                        {SelectedPlayer.player_behavior.map((player_behavior, idx) => (
                            <li key={idx}>{player_behavior}</li>
                        ))}

                        <hr />

                        {/* 🔹 Player Details (Nationality) */}
                        <div className="d-flex align-items-center pe-2">
                            <b>Player Nationality: {SelectedPlayer.player_nationality}</b>
                        </div>

                    </Card.Body>

                    {/* 🔹 Delete button to remove player */}
                    <center className="p-3">
                        <MdDeleteForever
                            style={{ cursor: "pointer" }}
                            onClick={handleOpen}
                            size={50}
                            color="red"
                        />
                    </center>
                </Card>

                {/* 🔹 Delete confirmation modal */}
                <Delete_Modal
                    show={show}
                    handleClose={handleClose}
                    handleRemovePlayer={handleRemovePlayer}
                    SelectedPlayer={SelectedPlayer}
                />
            </section>
        </>
    );
};

/**
 * PropTypes validation:
 * - Ensures components receive the correct data types.
 * - Helps prevent errors by enforcing strict type validation.
 */
Selected_Players_Card.propTypes = {
    SelectedPlayer: PropTypes.object.isRequired,          // ✅ Represents the selected player
    handleRemovePlayer: PropTypes.func.isRequired,        // ✅ Function to remove the player from the selection
};

export default Selected_Players_Card;