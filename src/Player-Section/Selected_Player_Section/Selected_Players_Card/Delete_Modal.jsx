// 🔹 Importing React for component-based rendering
import React from 'react';

// 🔹 Importing Bootstrap components for modal and buttons
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// 🔹 Importing PropTypes for type validation
import PropTypes from 'prop-types';

/**
 * Delete_Modal Component:
 * 
 * - Displays a confirmation modal before removing a player from the team.
 * - Ensures users can cancel the removal if needed.
 * - Uses Bootstrap for styling and modal functionality.
 *
 * Props:
 * - `show` (boolean): Controls modal visibility.
 * - `handleClose` (function): Closes the modal when triggered.
 * - `handleRemovePlayer` (function): Handles player removal logic.
 * - `SelectedPlayer` (object): The player being removed.
 */

const Delete_Modal = ({ show, handleClose, handleRemovePlayer, SelectedPlayer }) => {
    return (
        <Modal show={show} onHide={handleClose}>

            {/* 🔹 Modal header with title and close button */}
            <Modal.Header closeButton>
                <Modal.Title>Remove Player</Modal.Title>
            </Modal.Header>

            {/* 🔹 Modal body displaying player removal confirmation */}
            <Modal.Body>
                Are you sure you want to remove <b>{SelectedPlayer.player_name}</b> from the team?
            </Modal.Body>

            {/* 🔹 Modal footer with delete and cancel options */}
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={() => {
                        handleRemovePlayer(SelectedPlayer);
                        handleClose();
                    }}
                >
                    Delete
                </Button>

                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>

        </Modal>
    );
};

/**
 * PropTypes validation:
 * - Ensures the correct data types are passed as props.
 * - Prevents errors by enforcing strict type validation.
 */
Delete_Modal.propTypes = {
    show: PropTypes.bool.isRequired,                   // ✅ Controls the visibility of the modal
    handleClose: PropTypes.func.isRequired,           // ✅ Function to close the modal
    handleRemovePlayer: PropTypes.func.isRequired,    // ✅ Function to remove a player
    SelectedPlayer: PropTypes.object.isRequired,      // ✅ Represents the player being removed
};

export default Delete_Modal;