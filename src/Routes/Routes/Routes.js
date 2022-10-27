import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Details from "../../Pages/Details/Details/Details";
import ErrorPage from "../../Pages/ErrorPage.js/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivateRoute from "./PrivateRouter/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://pro-learn-server.vercel.app/course')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('https://pro-learn-server.vercel.app/course')
            },
            {
                path: '/courses/:id',
                element: <Courses />,
                loader: ({ params }) => fetch(`https://pro-learn-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://pro-learn-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }



        ],
    }
])