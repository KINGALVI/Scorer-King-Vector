import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; import 'bootstrap/dist/css/bootstrap.min.css';
import './App.CSS'
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Players_Container from './Player-Section/Players_Container';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [Coin, SetCoin] = useState(0);

  const handelSetcoin = () => {
    SetCoin(Coin + 5000)
  }

  const displayErrorMsg = () => {
    toast.error('your Coin is now empty. Please add some coin to purchase more player.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const displaySuccessMsg = () => {
    toast.success(`Player purchased this Player! Now you have ${Coin - 5000} coins.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const handelRemovecoin = () => {
    if (Coin === 0) {
      displayErrorMsg()
    }
    else {
      SetCoin(Coin - 5000)
      displaySuccessMsg()
    }
  }



  const [API, setAPI] = useState([]);

  useEffect(() => {
    fetch('/public/Scorer-King-Vector.json')
      .then(Responce => Responce.json())
      .then(Data => setAPI(Data))
  }, [])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header Coin={Coin}></Header>
      <Carousel handelSetcoin={handelSetcoin}></Carousel>
      <Players_Container API={API} handelRemovecoin={handelRemovecoin}></Players_Container>
      <Footer></Footer>
    </>
  )
}

export default App
