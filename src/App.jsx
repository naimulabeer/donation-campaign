import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/Root/Root";
import Error from "./pages/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error />,
      children: [{}],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
