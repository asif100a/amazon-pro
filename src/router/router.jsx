import { createBrowserRouter } from "react-router-dom";
import Root from "../project/root/Root";
import Home from "../project/pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;