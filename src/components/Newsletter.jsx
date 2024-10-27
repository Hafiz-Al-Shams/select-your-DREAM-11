import background from '../assets/bg-shadow.png'

export default function Newsletter() {

    return (
        <div className='absolute w-10/12 border-2 p-5 z-10 -top-48 left-[8%]' style={{ boxSizing: 'border-box', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgb(255, 255, 255' }}>
            <div className='border-2 bg-cover bg-no-repeat rounded-3xl w-full py-20 text-center space-y-2.5' style={{ backgroundImage: `url(${background})`, background: 'linear-gradient(90deg, #e0f4fc, #f7e3e7, #ffddb0)' }}>
                <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                <h4 className='text-lg font-semibold text-gray-500'>Get the latest updates and news right in your inbox!</h4>
                <div className='pt-3'>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    <button className='btn p-4 rounded-lg font-bold ml-1.5 border-2 border-gray-300 button hover:bg-orange-400'>Subscribe</button>
                </div>
            </div>
        </div >
    )
}
