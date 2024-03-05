import { Outlet, createBrowserRouter } from "react-router-dom";
import HomeComponent from "./src/components/HomeComponent";
import Header from "./src/components/Header";
import { useSelector } from "react-redux";

const AppComponent = () => {
    const theme = useSelector((store) => store.theme.currentTheme);
    return (
        <div className={theme}>
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