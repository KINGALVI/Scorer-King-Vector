// 🔹 Importing React for component-based rendering
import React from 'react';

// 🔹 Importing the `Selected_Players_Card` component to display individual player cards
import Selected_Players_Card from './Selected_Players_Card/Selected_Players_Card';

// 🔹 Importing Bootstrap components for layout and styling
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// 🔹 Importing PropTypes for type validation
import PropTypes from 'prop-types';

/**
 * Selected_Players_Container Component:
 * 
 * - Displays a list of players selected by the user.
 * - If no players are selected, it prompts the user to choose their favorite players.
 * - Dynamically renders player cards using the `Selected_Players_Card` component.
 *
 * Props:
 * - `AllSelectedPlayer` (array): List of players selected by the user.
 * - `handleRemovePlayer` (function): Removes a player from the selection.
 */

const Selected_Players_Container = ({ AllSelectedPlayer, handleRemovePlayer }) => {
    return (
        <>
            {/* 🔹 Display the total number of selected players */}
            <center><h3>Total Selected Players: {AllSelectedPlayer.length}</h3></center>

            {/* 🔹 If no players are selected, display a message prompting the user */}
            {AllSelectedPlayer.length === 0 ? (
                <center className="p-5">
                    <h4>Please Select Your Favorite Players!</h4>
                </center>
            )
                : (
                    /* 🔹 Display the list of selected players in a responsive grid */
                    <Row className="g-0" xs={1} md={2}>
                        {AllSelectedPlayer.map((SelectedPlayer, idx) => (
                            <Col key={idx}>
                                <Selected_Players_Card
                                    key={idx}
                                    SelectedPlayer={SelectedPlayer}
                                    handleRemovePlayer={handleRemovePlayer}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
        </>
    );
};

/**
 * PropTypes validation:
 * - Ensures components receive the correct data types.
 * - Helps prevent errors by enforcing strict type validation.
 */
Selected_Players_Container.propTypes = {
    AllSelectedPlayer: PropTypes.array.isRequired,       // ✅ List of selected players
    handleRemovePlayer: PropTypes.func.isRequired,       // ✅ Function to remove a selected player
};

export default Selected_Players_Container;