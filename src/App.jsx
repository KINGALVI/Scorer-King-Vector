import 'bootstrap/dist/css/bootstrap.min.css';
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



  const [API, setAPI] = useState([]);

  useEffect(() => {
    fetch('/public/Scorer-King-Vector.json')
      .then(Responce => Responce.json())
      .then(Data => setAPI(Data))
  }, [])

  return (
    <>
      <Header Coin={Coin}></Header>
      <Carousel handelSetcoin={handelSetcoin}></Carousel>
      <Players_Container API={API}></Players_Container>
      <Footer></Footer>
    </>
  )
}

export default App
