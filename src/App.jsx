import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

function App() {

  return (
    <>
      <div className="w-11/12 mx-auto">
        {/* navbar */}
        <Navbar></Navbar>
        {/* banner */}
        <Banner></Banner>

        {/* newsletter */}
        <Newsletter></Newsletter>
      </div>
    </>
  )
}

export default App
