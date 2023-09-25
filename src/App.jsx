import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/Root/Root";
import Error from "./pages/Error/Error";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import Home from "./pages/Home/Home";
import DonationDetails from "./components/DonationDetails/DonationDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("/data.json"),
        },
        {
          path: "/donation",
          element: <Donation />,
        },
        {
          path: "/donation/:id",
          element: <DonationDetails />,
          loader: () => fetch("/data.json"),
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
