import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Available from "./components/Available"
import Players from "./components/Players"

function App() {

  const [balance, setBalance] = useState(0);

  const [selected, setSelected] = useState([]);

  const handleAddBalance = () => {
    setBalance(balance + 2500000);
  }

  const handleReduceBalance = (price, player) => {
    if (balance > price && selected.length < 6) {
      setBalance(balance - price);
      setSelected([...selected, player]);
    }
    else {
      alert('operation failed!!');
    }

    // console.log(selected);
  }



  return (
    <>
      <div className="">
        <div className="w-11/12 mx-auto">
          {/* navbar */}
          <Navbar balance={balance}></Navbar>
          {/* banner */}
          <Banner handleAddBalance={handleAddBalance}></Banner>

          <Available selected={selected}></Available>

          {/* player cards */}
          <Players handleReduceBalance={handleReduceBalance}></Players>

          {/* newsletter */}
          <Newsletter></Newsletter>
        </div>
        {/* footer */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
