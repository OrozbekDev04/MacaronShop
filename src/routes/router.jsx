import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";
import SignUp from "../components/registration/SignUp.jsx";
import SignIn from "../components/registration/SignIn.jsx";
import Password from "../components/registration/password/Password.jsx";
import Error from "../components/error/Error.jsx";


export const router = createBrowserRouter( [

    {
        path:'/signUp',//Зарегист
        element:<SignUp/>
    },
    {
        path:'/signIn',//вход
        element:<SignIn/>
    },
    {
        path: '/password',//вход
        element:<Password/>,
    },
    {
        path: '/',
        element:<Layout/>,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            // {
            //     path: '/about',
            //     element:<div>aboutt</div>
            // },
            // {
            //     path: '/contact',
            //     element:<div>Contact</div>
            // },
            // {
            //     path: '/*',
            //     element:<div>404</div>
            // }
        ]

    }
]);
