function User({firstName, lastName, email, city}) {  
    return (
        <div className="list-item">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{city}</p>
        </div>
    )
}

export default User