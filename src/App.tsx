import React from "react";
import { AboutPage, HomePage, NotFoundPage } from "@/pages";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from "@/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Main>
      <RouterProvider router={routes} />
    </Main>
  );
}

export default App;
