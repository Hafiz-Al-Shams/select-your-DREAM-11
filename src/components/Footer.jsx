import logo from '../assets/logo-footer.png'

export default function Footer() {
    return (
        <div className="pt-40 pb-9" style={{ background: 'rgb(6, 9, 26)' }}>
            <div className='flex justify-center items-center py-10'><img src={logo} alt="" /></div>
            <div className='grid grid-cols-3 gap-10 w-10/12 mx-auto py-10'>
                <div>
                    <h5 className='text-white text-lg pb-3'>About Us</h5>
                    <p className='text-gray-500 text-sm'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div>
                    <h5 className='text-white text-lg pb-4'>Quick Links</h5>
                    <ul className='text-gray-500 text-sm pl-4 list-disc space-y-2'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-white text-lg pb-3'>Subscribe</h5>
                    <p className='text-gray-500 text-sm'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className='pt-6'>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Enter your email" />
                            <button className="btn join-item rounded-r-lg text-black bg-orange-300 font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider divider-neutral"></div>
            <p className='text-center text-gray-500 text-sm pt-1'>@2024 Your Company All Rights Reserved.</p>
        </div>
    )
}
