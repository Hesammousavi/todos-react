import { useEffect } from "react"
import Todos from "./components/Todos"
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import AppLayout from "./components/layouts/AppLayout"

function App() {



  return (
    <AppLayout>
        <Todos />
    </AppLayout>
  )
}

export default App
