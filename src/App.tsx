import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './Home';



let router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
]);

function Error404() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1>Page not found!</h1>
            <p>
                Whatever you are looking for is not here!
            </p>
            <Link to="/">Home</Link>
        </div>
    )
}


function Root() {
    return (
        <div className="root">
            <div className="root-content">
                <Outlet />
            </div>
        </div>
    );
}

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
