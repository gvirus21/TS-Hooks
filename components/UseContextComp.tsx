import React, {useState, useContext} from 'react'
import UserContext, {UserState} from './Store'

const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext)
    return(
        <div className="my-16">
        <h1 className="text-5xl">UseEffect</h1>
        <div className='mt-5'>
            
            <h2 className="text-2xl">{user.first} {user.last}</h2>
        </div>
        </div>
    )
}

const UseContextComp = () => {
    const [user, setUser] = useState<UserState>({
        first: "Rakesh",
        last: "Kumar",
    })

  return (
    <UserContext.Provider value={user}>
        <ConsumerComponent />
    </UserContext.Provider>
  )
}



export default UseContextComp