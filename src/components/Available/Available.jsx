import PropTypes from 'prop-types';
import './Available.css'

export default function Available({ selected, isActive, handleIsActiveState }) {
    return (
        <div className="flex justify-between items-center pt-14 pb-10 w-[99%]">
            <h2 className="text-2xl font-bold">{isActive.available ? 'Available Players' : `Selected Players (${selected.length}/6)`}</h2>
            <div className='join'>
                <button onClick={() => { handleIsActiveState('available') }} className={`${isActive.available && 'active'} btn join-item border-2 text-black border-gray-50 p-4 rounded-lg font-bold hover:text-gray-500`}>Available</button>
                <button onClick={() => { handleIsActiveState('selected') }} className={`${!isActive.available && 'active'} btn join-item border-2 text-black border-gray-50 p-4 rounded-lg font-bold hover:text-gray-500 ml-1`}>Selected {` (${selected.length})`}</button>
            </div>
        </div>
    )
}

Available.propTypes = {
    selected: PropTypes.array,
    isActive: PropTypes.object,
    handleIsActiveState: PropTypes.func
}
