import background from '../assets/bg-shadow.png'

export default function Newsletter() {

    return (
        <div className='mt-96 mb-10'>
            <div className='border-2 bg-cover bg-no-repeat rounded-2xl w-full py-20 text-center space-y-2.5' style={{ backgroundImage: `url(${background})` }}>
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
