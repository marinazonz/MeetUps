import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FavoritesContextProvider>
            <RouterProvider router={router} />
        </FavoritesContextProvider>
    </React.StrictMode>
);
