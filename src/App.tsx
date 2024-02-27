import React from 'react';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Legal } from './Legal';
const Sentiment = React.lazy(() => import('./Sentiment'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "legal",
                element: <Legal />
            },
            {
                path: "showcase",
                children: [
                    {
                        path: "news-sentiment",
                        element: <Sentiment />
                    }
                ]
            },
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
    );
}


function Root() {
    return (
        <div className="root">
            <div className="root-content">
                <Outlet />
            </div>
            <div className="footer">
                <Link to="/legal">Imprint</Link>
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
