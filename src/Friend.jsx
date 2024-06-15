 
 export default function Friend({friend}){
    const {name, email,username,id}= friend;
    return(
        <div className='box'>
            <h3>Id:{id}</h3>
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p>User Name: {username}</p>
        </div>
    )
}