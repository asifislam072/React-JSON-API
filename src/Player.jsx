import { useState } from "react"

export default function Player(){
    const [player,setplayer] = useState(11)
    function addplayer(){
        const newPlayer = player + 1;
        setplayer(newPlayer)
    }
    const outplayer =()=>{
        if(player < 12){
            return
        }
        const outPlayer = player - 1
        setplayer(outPlayer)
    }
    return(
        <div className="player">
            <h3>Player:{player}</h3>
            <button className="bg-red-500" onClick={addplayer}>Add player</button>
            <button onClick={outplayer}>Out Player</button>
        </div>
    )
}