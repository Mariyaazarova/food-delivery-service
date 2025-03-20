import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/pages/layout/layout";
import { HomePage } from "./components/pages/home-page/home-page";
import { RestaurantsPage } from "./components/pages/restaurants-page/restaurants-page";
import { Restaurant } from "./components/pages/restaurant/restaurant";
import { RestaurantMenu } from "./components/pages/restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "./components/pages/restaurant-reviews/restaurant-reviews";
import { DishPage } from "./components/pages/dish-page/dish-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":id",
            element: <Restaurant />,
            children: [
              {
                path: "menu",
                element: <RestaurantMenu />,
              },
              {
                path: "reviews",
                element: <RestaurantReviews />,
              },
            ],
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
