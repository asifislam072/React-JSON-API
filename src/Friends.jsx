import { useEffect, useState } from "react"
import Friend from "./Friend"

// import './assets/Friends.css'
export default function Friends(){

    const fri = {
        border: '2px solid red',
        padding: '50px',
        borderRadius: '15px'
    }

    const [friends,setfriend] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setfriend(data))
    },[])


    return (
        <div style={fri}>
            <h3>Freiends:{friends.length}</h3>
            {
                friends.map(frien => <Friend friend={frien}></Friend>)
            }
        </div>
    )
}