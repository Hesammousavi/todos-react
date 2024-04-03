import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todos";
import About from "./About";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                path : '/',
                element : <Home />,
            },
            {
                path : '/todos',
                element : <Todos />,
            },
            {
                path : '/about',
                element : <About />,
            }
        ]
    },

])


export default router;
