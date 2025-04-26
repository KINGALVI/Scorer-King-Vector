// 🔹 Importing global styles for the app
import './App.CSS';
import 'bootstrap/dist/css/bootstrap.min.css';

// 🔹 Importing Toastify for in-app notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔹 Importing major components used in the app
import Header from './Header/Header';         // ✅ Displays user coin balance
import Carousel from './Carousel/Carousel';   // ✅ Allows users to earn coins
import All_Players_Container from './Player-Section/All-Players-Section/All_Players_Container'; // ✅ Handles player selection
import Footer from './Footer/Footer';         // ✅ Displays the footer section

// 🔹 Importing React hooks for managing state and side effects
import { useEffect, useState } from 'react';

// 🔹 Importing PropTypes for type checking (though we don't need it in App.jsx)
import PropTypes from 'prop-types';

/**
 * The App component serves as the main entry point of the application.
 * It manages global states such as the API data and user coins,
 * and renders the major sections including the header, carousel,
 * player selection area, and footer.
 */

function App() {

  // 🔹 State to store API data (list of players)
  const [API, setAPI] = useState([]);

  // 🔹 Fetch player data from the local JSON file on initial render
  useEffect(() => {
    fetch('/Scorer-King-Vector.json')
      .then(response => response.json()) // ✅ Corrected spelling from "Responce" to "response"
      .then(data => setAPI(data));
  }, []);

  // 🔹 State to track the user's available coins
  const [Coin, SetCoin] = useState(0);

  /**
   * Adds 5000 coins to the user's balance when called.
   */
  const handelSetcoin = () => {
    SetCoin(Coin + 5000);
  };

  /**
   * Displays a success toast message when a player is purchased.
   */
  const displaySuccessMsg = () => {
    toast.success(`Player purchased successfully! Now you have ${Coin - 5000} coins.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  /**
   * Deducts 5000 coins from the user's balance when a player is bought.
   * Also triggers the success toast message.
   */
  const handelRemovecoin = () => {
    SetCoin(Coin - 5000);
    displaySuccessMsg();
  };

  return (
    <>
      {/* 🔹 ToastContainer: Handles displaying toast notifications globally */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        draggable
        theme="colored"
      />

      {/* 🔹 Header component displaying the user's coin balance */}
      <Header Coin={Coin} />

      {/* 🔹 Carousel component, allowing users to earn coins */}
      <Carousel handelSetcoin={handelSetcoin} />

      {/* 🔹 Main player selection section */}
      <All_Players_Container API={API} handelRemovecoin={handelRemovecoin} Coin={Coin} />

      {/* 🔹 Footer component */}
      <Footer />
    </>
  );
}


/*
 * PropTypes validation:
 * - Ensures components receive the correct data types.
 * - Helps other developers understand the expected props.
 * - Improves debugging by catching type mismatches early.
 */
App.propTypes = {
  API: PropTypes.array,              // ✅ Represents the list of players fetched from JSON
  Coin: PropTypes.number,            // ✅ Tracks the user's coin balance
  handelRemovecoin: PropTypes.func,  // ✅ Function to deduct coins when purchasing a player
  handelSetcoin: PropTypes.func,     // ✅ Function to add coins when user earns rewards
};

export default App;