export default function Friend({friend}){
    console.log(friend)
    const {name,email} = friend
    const fri = {
        border: '2px solid red',
        padding: '50px',
        borderRadius: '15px',
        margin:'10px'
    }
    return(
        <div style={fri}>
            <h3>Name: {name}</h3>
            <h3>Emaile: {email}</h3>
        </div>
    )
}