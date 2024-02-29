import { Outlet, createBrowserRouter } from "react-router-dom";
import HomeComponent from "./src/components/HomeComponent";
import Header from "./src/components/Header";

const AppComponent = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent/>,
        children: [
            {
                path: '/home',
                element: <HomeComponent/>
            }
        ]
    }
])