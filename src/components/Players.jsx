import { useEffect, useState } from "react"

export default function Players() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    return (
        <div className="grid grid-cols-3 gap-6">
            {
                players.map(player => (
                    <div key={player.playerId} className="card card-compact bg-base-100 shadow-xl">
                        <figure className="p-3">
                            <img className="h-56 w-full rounded-xl"
                                src={player.image}
                                alt="Cricket Player" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{player.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
