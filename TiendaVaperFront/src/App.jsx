import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/DashBoard';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from './components/products/Products';
import ProductPage from './components/productPage/ProductPage'
import Login from './components/login/Login';
import { AuthContextProvider } from './service/authContext/AuthContext';


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
    {
      path : "/products/ProductPage",
      element : <ProductPage/>
    },
    {
      path : "/Login",
      element : <Login/>
    }

  ])
  return (
    <AuthContextProvider>
          <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App;
