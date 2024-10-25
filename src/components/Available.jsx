import PropTypes from 'prop-types';

export default function Available({ selected }) {
    return (
        <div className="flex justify-between items-center pt-14 pb-10 w-[99%]">
            <h2 className="text-2xl font-bold">Available Players</h2>
            <div>
                <button className='btn border-2 text-black border-gray-50 p-4 rounded-xl font-bold hover:text-gray-500' style={{ backgroundColor: 'rgb(231, 254, 41)' }}>Available</button>
                <button className='btn border-2 text-black border-gray-50 p-4 rounded-xl font-bold hover:text-gray-500' style={{ backgroundColor: 'rgb(231, 254, 41)' }}>Selected {` (${selected.length})`}</button>
            </div>
        </div>
    )
}

Available.propTypes = {
    selected: PropTypes.array
}