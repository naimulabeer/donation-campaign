import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/Root/Root";
import Error from "./pages/Error/Error";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import Search from "./components/Search/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Search />,
        },
        {
          path: "/donation",
          element: <Donation />,
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
