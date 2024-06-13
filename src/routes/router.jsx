import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";
import SignUp from "../pages/SignUp.jsx";


export const router = createBrowserRouter( [

    {
        path: '/signUp',
        element:<SignUp />
    },
    {
        path: '/',
        element:<Layout/>,
        errorElement:<div>Error</div>,
        children: [
            {
                path: '/',
                element:<HomePage />
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
