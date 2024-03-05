import ReactDom from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import { appRoute } from "./routes";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);
reactRoot.render(
<Provider store={appStore}>
    <RouterProvider router={appRoute}/>
</Provider>
);