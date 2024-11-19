import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";


const Router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayoutes></MainLayoutes>
    },
    {
        path:"/about",
        element:<h2>About</h2>
    },
    {
        path:"/user",
        element:<h2>UpdateUser</h2>
    },
    {
        path:'*',
        element:<h2>Error page</h2>
    }
])

export default Router;