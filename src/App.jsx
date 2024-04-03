import { useEffect } from "react"
import Todos from "./components/Todos"
import { UserContext } from "./contexts/UserContext"

function App() {
    let user = { name : 'hesam mousavi'}


  return (
    <>
        <div className="bg-gray-100">
            <UserContext.Provider value={user} >
                <Todos />
            </UserContext.Provider>
        </div>
    </>
  )
}

export default App
