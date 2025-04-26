// 🔹 Importing React for creating component-based UI and managing rendering
import React, { useState } from 'react';

// 🔹 Importing PropTypes for type validation to ensure correct prop data
import PropTypes from 'prop-types';

// 🔹 Importing Bootstrap components for layout and styling
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// 🔹 Importing child components used within this container
import All_Players_Card from './All_Players_Card';
import Selected_Players_Container from '../Selected_Player_Section/Selected_Players_Container';

/**
 * All_Players_Container Component:
 *
 * - Manages the available and selected player sections.
 * - Handles selection and removal of players dynamically.
 * - Uses Bootstrap for layout and styling.
 * - Provides buttons to switch between "Available Players" and "Selected Players".
 *
 * Props:
 * - `API` (array): List of available players fetched from JSON.
 * - `handelRemovecoin` (function): Deducts coins when a player is selected.
 * - `Coin` (number): Current user coin balance.
 */

const All_Players_Container = ({ API, handelRemovecoin, Coin }) => {

    // 🔹 State to track which section is active ("available" or "selected")
    const [activeSection, setActiveSection] = useState("available");

    // 🔹 State to store selected players
    const [AllSelectedPlayer, setSelectedPlayer] = useState([]);

    /**
     * Handles adding a player to the selected list.
     * @param {Object} AllPlayer - The player object to add.
     */
    const handelSelectedPlayer = (AllPlayer) => {
        setSelectedPlayer([...AllSelectedPlayer, AllPlayer]);  // ✅ Adds the selected player to the list
    };

    /**
     * Handles removing a player from the selected list.
     * @param {Object} PlayerToRemove - The player object to remove.
     */
    const handleRemovePlayer = (PlayerToRemove) => {
        // 🔹 Creates a new list excluding the player to be removed
        const UpdatedPlayerList = AllSelectedPlayer.filter(SelectedPlayer => SelectedPlayer.player_id !== PlayerToRemove.player_id);

        setSelectedPlayer(UpdatedPlayerList);  // ✅ Updates the state with the filtered player list
    };



    return (
        <>
            {/* 🔹 Section for toggling between available and selected players */}
            <section className="d-flex justify-content-center mb-3">
                <span className="pe-2">
                    <Button variant={activeSection === "available" ? "primary" : "outline-primary"} onClick={() => setActiveSection("available")}>
                        {API.length} Available Players
                    </Button>
                </span>

                <span className="ps-2">
                    <Button variant={activeSection === "selected" ? "success" : "outline-success"} onClick={() => setActiveSection("selected")}>
                        {AllSelectedPlayer.length} Selected Players
                    </Button>
                </span>
            </section>

            {/* 🔹 Conditionally rendering based on active section */}
            {activeSection === "available" ? (
                <section>
                    <center><h3>Total Available Players: {API.length}</h3></center>

                    {/* 🔹 Displaying all available players in a grid */}
                    <Row className="g-0" xs={1} md={2}>
                        {API.map((AllPlayer, idx) => (
                            <Col key={idx}>
                                <All_Players_Card
                                    key={idx}
                                    AllPlayer={AllPlayer}
                                    handelRemovecoin={handelRemovecoin}
                                    handelSelectedPlayer={handelSelectedPlayer}
                                    AllSelectedPlayer={AllSelectedPlayer}
                                    Coin={Coin}
                                    handleRemovePlayer={handleRemovePlayer} // ✅ Passing down player removal function
                                />
                            </Col>
                        ))}
                    </Row>
                </section>
            )
                : (
                    /* 🔹 Rendering selected players list */
                    <Selected_Players_Container
                        AllSelectedPlayer={AllSelectedPlayer}
                        handleRemovePlayer={handleRemovePlayer}
                    />
                )}
        </>
    );
};



/**
 * PropTypes validation:
 * - Ensures components receive the correct data types.
 * - Helps prevent errors by enforcing strict type validation.
 **/
All_Players_Container.propTypes = {
    API: PropTypes.array.isRequired,              // ✅ List of available players fetched from JSON
    handelRemovecoin: PropTypes.func.isRequired,  // ✅ Function to deduct coins when selecting a player
    Coin: PropTypes.number.isRequired,            // ✅ User's current coin balance
};

export default All_Players_Container;