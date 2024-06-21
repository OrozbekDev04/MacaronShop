import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout/Layout.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";

import NewsPage from "../pages/newsPage/NewsPage.jsx";
import BasketPage from "../pages/basketPage/BasketPage.jsx";


// import DetailProductPage from "../components/DetailProductPage.jsx";
import ProductsList from "../components/productsList/ProductsList.jsx";


export const router = createBrowserRouter( [

    // {
    //     path: '/signUp',
    //     element:<SignUp />
    // },
    {
        path: '/',
        element:<Layout/>,
        errorElement:<div>Errorrrrr..............|.|.|....|.....|.|.|.......______/\_________/\____/\/\/\/\/\/\______</div>,
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
            //     path: '/about',
            //     element:<div>aboutt</div>
            
            {
                path: '/news',
                element:<NewsPage/>
            },
            {
                path:'/allProducts',
                element:<ProductsList  />
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
