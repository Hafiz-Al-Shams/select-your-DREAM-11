import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Available from "./components/Available"
import Players from "./components/Players"

function App() {

  const [balance, setBalance] = useState(0);

  const handleAddBalance = () => {
    setBalance(balance + 2500000);
  }



  return (
    <>
      <div className="">
        <div className="w-11/12 mx-auto">
          {/* navbar */}
          <Navbar balance={balance}></Navbar>
          {/* banner */}
          <Banner handleAddBalance={handleAddBalance}></Banner>

          <Available></Available>

          {/* player cards */}
          <Players></Players>

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
