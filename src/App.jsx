import Banner from "./components/Banner"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="w-11/12 mx-auto">
        {/* navbar */}
        <Navbar></Navbar>
        {/* banner */}
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
