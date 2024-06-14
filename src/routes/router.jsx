import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";

import NewsPage from "../pages/newsPage/NewsPage.jsx";
import BasketPage from "../pages/basketPage/BasketPage.jsx";


import DetailProductPage from "../components/DetailProductPage.jsx";


export const router = createBrowserRouter( [
    {
        path: '/',
        element:<Layout/>,
        errorElement:<div>Error</div>,
        children: [
            // {
            //     path: '/',
            //     element:<HomePage />
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
            {
                path: '/news',
                element:<NewsPage/>
            },
            {
                path: 'basket',
                element:<BasketPage/>
            }
            // {
            //     path: '/*',
            //     element:<div>404</div>
            // }
        ]

    }
]);
