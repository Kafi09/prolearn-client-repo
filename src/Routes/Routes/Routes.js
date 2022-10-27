import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Details from "../../Pages/Details/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/courses/:id',
                element: <Courses />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
            
            
            
        ],
    }
])