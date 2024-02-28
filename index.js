import ReactDom from "react-dom/client";


const SomeComponent = () => {
    return (
        <>
        <div>Blinkit</div>
        </>
    )
}

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);
reactRoot.render(<SomeComponent/>);