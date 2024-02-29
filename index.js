import ReactDom from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import { appRoute } from "./routes";

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);
reactRoot.render(<RouterProvider router={appRoute}/>);