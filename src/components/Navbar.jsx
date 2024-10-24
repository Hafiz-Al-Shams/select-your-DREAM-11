import logo from '../assets/logo.png'
import coin from '../assets/coin.png'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center my-6">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex justify-center items-center gap-9 text-gray-600 font-semibold">
                <p><a href="">Home</a></p>
                <p><a href="">Fixture</a></p>
                <p><a href="">Teams</a></p>
                <p><a href="">Schedules</a></p>
                <div className="flex justify-center items-center gap-1 rounded-xl font-semibold border-2 p-3">
                    <p className='text-black'><span id="main-balance">10000000</span> Coin</p>
                    <img src={coin} alt="" className="w-2/12" />
                </div>
            </div>
        </div>
    )
}
