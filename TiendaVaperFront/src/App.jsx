import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/DashBoard';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from './components/products/Products';


function App() {

  const router = createBrowserRouter ([
    {
      path : "/",
      element : <Dashboard/>
    },
    {
      path : "/product",
      element : <Products/>
    },

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
