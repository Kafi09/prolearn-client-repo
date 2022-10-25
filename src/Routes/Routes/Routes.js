import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/courses/:id',
                element: <Courses />,
            }
            
            
            
        ],
    }
])