import PropTypes from 'prop-types';
import './Available/Available.css'

export default function Selected({ isActive, selected, handleIsActiveState, handleReduceSelected }) {

    return (
        <div className={`${isActive.status === 'available' ? 'hidden' : ''}`}>
            {
                selected.map(player => (
                    <div key={player.playerId} className='flex justify-between items-center border-2 p-4 rounded-xl mb-3'>
                        <div className='flex justify-center items-center gap-4'>
                            <div><img className='w-36 h-28 rounded-xl' src={player.image} alt="" /></div>
                            <div className=''>
                                <p className='text-xl text-black font-semibold pb-1'>{player.name}</p>
                                <p className='font-medium text-gray-700'>{player.role}</p>
                                <p className='font-medium'>${player.biddingPrice}</p>
                            </div>
                        </div>
                        <div><img onClick={() => { handleReduceSelected(player, player.playerId) }} className='w-11 pr-4 hover:cursor-pointer' src="https://img.icons8.com/?size=48&id=102550&format=png" alt="" /></div>
                    </div>
                ))
            }
            <div>
                <button onClick={() => { handleIsActiveState('available') }} className={`mt-5 ml-4 active btn border-2 text-black border-gray-50 p-4 rounded-xl font-bold hover:text-gray-500`}>Add More Player</button>
            </div>
        </div>
    )
}

Selected.propTypes = {
    isActive: PropTypes.object,
    selected: PropTypes.array,
    handleIsActiveState: PropTypes.func,
    handleReduceSelected: PropTypes.func
}
