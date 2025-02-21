// import Dashboard from './components/dashboard/DashBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/DashBoard';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from './components/productPage/Product';


function App() {

  const router = createBrowserRouter ([
    {
      path : "/",
      element : <Dashboard/>
    },
    {
      path : "/product",
      element : <Product/>
    },

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
