import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Assets from '../pages/Assets'
import Shipping from '../pages/Shipping'
import NotFound from '../pages/NotFound'
import Offer from '../pages/Offer'
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (<>
            <Header />
            <Outlet />
            <Footer />
        </>),
        children: [
            { path: '', element: <Home /> },
            { path: '/userinfo', element: <UserInfo /> },
            { path: '/assets', element: <Assets /> },
            { path: '/shipping', element: <Shipping /> },
            { path: '/offer', element: <Offer /> },
            { path: '/notfound', element: <NotFound /> },
            { path: '*', element: <NotFound /> },
        ]
    }])
export default function AppRouter() {
    return (<RouterProvider router={appRouter} />)
}