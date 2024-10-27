import PropTypes from 'prop-types';
import { useEffect, useState } from "react"

export default function Players({ handleReduceBalance, isActive }) {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    return (
        <div className={`${isActive.status === 'available' ? 'grid' : 'hidden'} grid-cols-3 gap-6`}>
            {
                players.map(player => (
                    <div key={player.playerId} className="card card-compact bg-base-100 shadow-xl border-2">
                        <figure className="p-3">
                            <img className="h-60 w-full rounded-xl"
                                src={player.image}
                                alt="Cricket Player" />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-start items-center gap-1">
                                <div>
                                    <img className="w-8" src="https://img.icons8.com/neon/40/test-account.png" alt="" />
                                </div>
                                <h2 className="card-title font-bold">{player.name}</h2>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <div className="flex justify-center items-center gap-2">
                                    <img className="w-5" src="https://img.icons8.com/?size=40&id=30618&format=png" alt="" />
                                    <p className="text-gray-600 text-base font-medium">{player.country}</p>
                                </div>
                                <div>
                                    <p className="px-3 py-1.5 bg-gray-100 text-gray-700 font-semibold rounded-md">{player.role}</p>
                                </div>
                            </div>
                            <hr />
                            <p className="text-base font-bold">Rating</p>
                            <div className="flex justify-between items-center px-1 font-medium">
                                <div className="text-black">{player.battingType}</div>
                                <div>{player.bowlingType}</div>
                            </div>
                            <div className="flex justify-between items-center py-0.5 px-1">
                                <div className="font-semibold text-black">Price: ${player.biddingPrice}</div>
                                <div>
                                    <button onClick={() => { handleReduceBalance(player.biddingPrice, player) }} className="btn btn-sm btn-outline text-gray-900">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

Players.propTypes = {
    handleReduceBalance: PropTypes.func,
    isActive: PropTypes.object
}
