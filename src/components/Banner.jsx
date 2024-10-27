import PropTypes from 'prop-types';
import background from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'

export default function Banner({ handleAddBalance }) {

    return (
        <div className='bg-cover bg-no-repeat rounded-2xl w-full py-14 text-center space-y-5 bg-black' style={{ backgroundImage: `url(${background})` }}>
            <div className='flex justify-center items-center'>
                <img src={banner} alt="" />
            </div>
            <h1 className='text-4xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='text-2xl font-semibold text-gray-400'>Beyond Boundaries Beyond Limits</h4>
            <button onClick={() => handleAddBalance()} className='btn border-2 text-black border-gray-50 p-4 rounded-xl font-bold hover:text-gray-500' style={{ backgroundColor: 'rgb(231, 254, 41)' }}>Claim Free Credit</button>
        </div>
    )
}

Banner.propTypes = {
    handleAddBalance: PropTypes.func
}
