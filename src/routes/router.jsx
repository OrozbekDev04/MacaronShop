import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from '../components/pages/HomePage.jsx'

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
            // {
            //     path: '/',
            //     element:<DetailProductPage />
            // },
            // {
            //     path: '/',
            //     element:<DetailProductPage />
            // },
            // {
            //     path: '/about',
            //     element:<div>aboutt</div>
            // },
            // {
            //     path: '/contact',
            //     element:<div>Contact</div>
            // },
            // {
            //     path: '/news',
            //     element:<NewsPage/>
            // },
            // {
            //     path: 'basket',
            //     element:<BasketPage/>
            // }
            // {
            //     path: '/*',
            //     element:<div>404</div>
            // }
        ]
    }
]);
