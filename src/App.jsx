import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

function App() {

  return (
    <>
      <div className="">
        <div className="w-11/12 mx-auto">
          {/* navbar */}
          <Navbar></Navbar>
          {/* banner */}
          <Banner></Banner>

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
