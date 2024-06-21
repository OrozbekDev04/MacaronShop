import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";
import Corporate from "../pages/corporate/Corporate.jsx";


export const router = createBrowserRouter( [
    {
        path: '/',
        element:<Layout/>,
        errorElement:<div>Error</div>,
        children: [
            {
                path: '/',
                element:<HomePage />
            },
            {
                path: '/corporete',
                element:<Corporate/>
            },
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
