import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import LoginPage from "../Pages/LoginPage";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import AdventuresCards from "../Components/AdventuresCards";


const Router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayoutes></MainLayoutes>,
       children:[
        {
            path:"/",
            element: <AdventuresCards></AdventuresCards>,
        },
       ]
    },
    {
        path:"/about",
        element:<h2>Adventures</h2>
    },
    {
        path:"/user",
        element:<h2>UpdateUser</h2>
    },
    
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'*',
        element:<h2>Error page</h2>
    },
])

export default Router;