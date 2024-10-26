import PropTypes from 'prop-types';
import background from '../assets/bg-shadow.png'

export default function Newsletter({ isActive }) {

    return (
        <div className={`${isActive.available ? 'mt-28' : 'mt-40'} mb-8`}>
            <div className='border-2 bg-cover bg-no-repeat rounded-2xl w-full py-20 text-center space-y-2.5' style={{ backgroundImage: `url(${background})`, background: 'linear-gradient(90deg, #e0f4fc, #f7e3e7, #ffddb0)', borderRadius: '10px', padding: '20px', marginBottom: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', color: '#333' }}>
                <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                <h4 className='text-lg font-semibold text-gray-500'>Get the latest updates and news right in your inbox!</h4>
                <div className='pt-3'>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    <button className='btn p-4 rounded-lg font-bold ml-3 bg-orange-300 border border-gray-400'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

Newsletter.propTypes = {
    isActive: PropTypes.object
}